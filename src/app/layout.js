
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import NeonCursor from "@/component/About/NeonCursor";




export const metadata = {
  
  title: "Careertronic",
  description: "Know about careertronic and it's services",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased !bg-black"
      >
        <Navbar/>

      <div className='h-20 w-full bg-black'></div>
        {/* <NeonCursor/> */}
        {children}
<div className="z-50 opacity-100">
<Footer/>
</div>

      </body>
    </html>
  );
}
