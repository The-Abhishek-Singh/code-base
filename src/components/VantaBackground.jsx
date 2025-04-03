"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaBackground = ({
  color = 0xff6a00, // Changed to more vibrant orange
  backgroundColor = 0x23153c,
  points = 10,
  maxDistance = 20,
  spacing = 15,
  showDots = true,
  mouseCoeffX = 1,
  mouseCoeffY = 1,
  speed = 4, // Reduced from 10 to 4 for slower movement
  children,
}) => {
  const vantaRef = useRef(null);
  const backgroundRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && backgroundRef.current) {
      // Helper functions from original code
      const rn = (a, b) => Math.random() * (b - a) + a;
      const ri = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
      const mobileCheck = () => {
        return (
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth < 600
        );
      };
      const getBrightness = (color) => {
        return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
      };

      // Extend built-in objects
      if (!Number.prototype.clamp) {
        Number.prototype.clamp = function (min, max) {
          return Math.min(Math.max(this, min), max);
        };
      }

      class Effect {
        constructor(options) {
          this.options = {
            color,
            backgroundColor,
            points,
            maxDistance,
            spacing,
            showDots,
            mouseCoeffX,
            mouseCoeffY,
            speed,
            ...options,
          };

          this.width = window.innerWidth;
          this.height = window.innerHeight;
          this.points = [];
          this.container = options.container;
          this.t = 0;

          this.init();
          this.initEvents();
          this.resize();

          // Start animation
          this.animate();
        }

        init() {
          // Scene setup
          this.scene = new THREE.Scene();

          // Renderer setup
          this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
          });
          this.renderer.setSize(this.width, this.height);
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.container.appendChild(this.renderer.domElement);

          // Initialize the effect
          this.onInit();
        }

        genPoint(x, y, z) {
          let sphere;
          if (!this.points) {
            this.points = [];
          }

          if (this.options.showDots) {
            const geometry = new THREE.SphereGeometry(0.35, 12, 12); // Slightly larger dots
            const material = new THREE.MeshLambertMaterial({
              color: this.options.color,
              emissive: this.options.color, // Add emissive for more vibrant appearance
              emissiveIntensity: 0.5,
            });
            sphere = new THREE.Mesh(geometry, material);
          } else {
            sphere = new THREE.Object3D();
          }

          this.cont.add(sphere);
          sphere.ox = x;
          sphere.oy = y;
          sphere.oz = z;
          sphere.position.set(x, y, z);
          // Reduced rotation speed
          sphere.r = rn(-2, 2) * this.options.speed;

          return this.points.push(sphere);
        }

        onInit() {
          this.cont = new THREE.Group();
          this.cont.position.set(0, 0, 0);
          this.scene.add(this.cont);

          let n = this.options.points;
          let { spacing } = this.options;

          if (mobileCheck()) {
            n = ~~(n * 0.75);
            spacing = ~~(spacing * 0.65);
          }

          const numPoints = n * n * 2;
          this.linePositions = new Float32Array(numPoints * numPoints * 3);
          this.lineColors = new Float32Array(numPoints * numPoints * 3);

          const colorB = getBrightness(new THREE.Color(this.options.color));
          const bgB = getBrightness(
            new THREE.Color(this.options.backgroundColor)
          );
          this.blending = colorB > bgB ? "additive" : "subtractive";

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(this.linePositions, 3).setUsage(
              THREE.DynamicDrawUsage
            )
          );
          geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(this.lineColors, 3).setUsage(
              THREE.DynamicDrawUsage
            )
          );
          geometry.computeBoundingSphere();
          geometry.setDrawRange(0, 0);

          const material = new THREE.LineBasicMaterial({
            vertexColors: true,
            blending: THREE.AdditiveBlending, // Force additive blending for more vibrant lines
            transparent: true,
            opacity: 1.0, // Full opacity
            linewidth: 1.5, // Thicker lines (note: this may not work in all browsers)
          });

          this.linesMesh = new THREE.LineSegments(geometry, material);
          this.cont.add(this.linesMesh);

          for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= n; j++) {
              const y = ri(-3, 3);
              const x = (i - n / 2) * spacing + ri(-5, 5);
              let z = (j - n / 2) * spacing + ri(-5, 5);
              if (i % 2) {
                z += spacing * 0.5;
              } // offset

              this.genPoint(x, y - ri(5, 15), z);
              this.genPoint(x + ri(-5, 5), y + ri(5, 15), z + ri(-5, 5));
            }
          }

          // Camera setup
          this.camera = new THREE.PerspectiveCamera(
            25,
            this.width / this.height,
            0.01,
            10000
          );
          this.camera.position.set(50, 100, 150);
          this.scene.add(this.camera);

          // Enhanced lighting for more vibrant colors
          const ambience = new THREE.AmbientLight(0xffffff, 0.9); // Increased intensity
          this.scene.add(ambience);

          this.spot = new THREE.SpotLight(0xffffff, 1.2); // Increased intensity
          this.spot.position.set(0, 200, 0);
          this.spot.distance = 400;
          this.spot.target = this.cont;
          this.scene.add(this.spot);
        }

        onUpdate() {
          let diff;
          const c = this.camera;

          if (Math.abs(c.tx - c.position.x) > 0.01) {
            diff = c.tx - c.position.x;
            // Slower camera movement
            c.position.x += diff * 0.02 * this.options.speed;
          }
          if (Math.abs(c.ty - c.position.y) > 0.01) {
            diff = c.ty - c.position.y;
            // Slower camera movement
            c.position.y += diff * 0.02 * this.options.speed;
          }

          c.lookAt(new THREE.Vector3(0, 0, 0));

          let vertexpos = 0;
          let colorpos = 0;
          let numConnected = 0;

          const bgColor = new THREE.Color(this.options.backgroundColor);
          const color = new THREE.Color(this.options.color);
          const diffColor = color.clone().sub(bgColor);

          if (this.rayCaster) {
            this.rayCaster.setFromCamera(
              new THREE.Vector2(this.rcMouseX, this.rcMouseY),
              this.camera
            );
          }

          for (let i = 0; i < this.points.length; i++) {
            let dist, distToMouse;
            const p = this.points[i];

            if (this.rayCaster) {
              distToMouse = this.rayCaster.ray.distanceToPoint(p.position);
            } else {
              distToMouse = 1000;
            }

            const distClamp = Math.min(Math.max(distToMouse, 5), 15);
            p.scale.x =
              p.scale.y =
              p.scale.z =
                Math.min(Math.max((15 - distClamp) * 0.25, 1), 100);

            if (p.r !== 0) {
              let ang = Math.atan2(p.position.z, p.position.x);
              dist = Math.sqrt(
                p.position.z * p.position.z + p.position.x * p.position.x
              );
              // Slower rotation
              ang += 0.00025 * p.r * this.options.speed;
              p.position.x = dist * Math.cos(ang);
              p.position.z = dist * Math.sin(ang);
            }

            for (let j = i; j < this.points.length; j++) {
              const p2 = this.points[j];
              const dx = p.position.x - p2.position.x;
              const dy = p.position.y - p2.position.y;
              const dz = p.position.z - p2.position.z;
              dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (dist < this.options.maxDistance) {
                let lineColor;
                // Enhanced color intensity by increasing the alpha factor
                const alpha = Math.min(
                  Math.max((1.0 - dist / this.options.maxDistance) * 3, 0),
                  1
                );

                // Always use more vibrant blending
                lineColor = new THREE.Color(0x000000).lerp(color, alpha);

                this.linePositions[vertexpos++] = p.position.x;
                this.linePositions[vertexpos++] = p.position.y;
                this.linePositions[vertexpos++] = p.position.z;
                this.linePositions[vertexpos++] = p2.position.x;
                this.linePositions[vertexpos++] = p2.position.y;
                this.linePositions[vertexpos++] = p2.position.z;

                this.lineColors[colorpos++] = lineColor.r;
                this.lineColors[colorpos++] = lineColor.g;
                this.lineColors[colorpos++] = lineColor.b;
                this.lineColors[colorpos++] = lineColor.r;
                this.lineColors[colorpos++] = lineColor.g;
                this.lineColors[colorpos++] = lineColor.b;

                numConnected++;
              }
            }
          }

          this.linesMesh.geometry.setDrawRange(0, numConnected * 2);
          this.linesMesh.geometry.attributes.position.needsUpdate = true;
          this.linesMesh.geometry.attributes.color.needsUpdate = true;

          return this.t * 0.001;
        }

        animate() {
          // Slower animation
          this.t += this.options.speed;
          this.onUpdate();
          this.frameId = requestAnimationFrame(this.animate.bind(this));
          this.renderer.render(this.scene, this.camera);
        }

        onMouseMove(x, y) {
          const c = this.camera;
          if (!c.oy) {
            c.oy = c.position.y;
            c.ox = c.position.x;
            c.oz = c.position.z;
          }
          const ang = Math.atan2(c.oz, c.ox);
          const dist = Math.sqrt(c.oz * c.oz + c.ox * c.ox);
          const tAng = ang + (x - 0.5) * 2 * (this.options.mouseCoeffX || 1);
          c.tz = dist * Math.sin(tAng);
          c.tx = dist * Math.cos(tAng);
          c.ty = c.oy + (y - 0.5) * 50 * (this.options.mouseCoeffY || 1);

          this.rcMouseX = x * 2 - 1;
          this.rcMouseY = -x * 2 + 1;
        }

        initEvents() {
          // Mouse movement listener
          document.addEventListener("mousemove", (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            this.onMouseMove(x, y);
          });

          // Window resize listener
          window.addEventListener("resize", this.resize.bind(this));
        }

        resize() {
          if (!this.renderer) return;
          this.width = window.innerWidth;
          this.height = window.innerHeight;
          this.renderer.setSize(this.width, this.height);
          if (this.camera) {
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
          }
        }

        destroy() {
          this.scene && this.scene.remove(this.linesMesh);
          this.spot =
            this.points =
            this.linesMesh =
            this.lineColors =
            this.linePositions =
              null;

          this.renderer && this.container.removeChild(this.renderer.domElement);
          window.removeEventListener("resize", this.resize.bind(this));

          cancelAnimationFrame(this.frameId);
          this.renderer = null;
        }
      }

      // Create effect instance
      const effect = new Effect({
        container: backgroundRef.current,
        color,
        backgroundColor,
        points,
        maxDistance,
        spacing,
        showDots,
        mouseCoeffX,
        mouseCoeffY,
        speed,
      });

      setVantaEffect(effect);
    }

    // Clean up on unmount
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [
    vantaEffect,
    color,
    backgroundColor,
    points,
    maxDistance,
    spacing,
    showDots,
    mouseCoeffX,
    mouseCoeffY,
    speed,
  ]);

  return (
    <div
      ref={vantaRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div
        ref={backgroundRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
};

export default VantaBackground;
