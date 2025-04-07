import React from 'react';

const mentors = [
  {
    id: 101,
    name: 'Anshuman Singh',
    title: 'Founder at Scaler, ex - meta',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    id: 102,
    name: 'Naman Balla',
    title: 'Founder at Scaler, ex - meta',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    id: 103,
    name: 'Anshuman Singh',
    title: 'Founder at Scaler, ex - meta',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  },
  {
    id: 104,
    name: 'Anshuman Singh',
    title: 'Founder at Scaler, ex - meta',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
  }
];

const reviews = [
  {
    id: 201,
    reviewer: 'Riya',
    text: 'The training was awesome. The instructor has done a great job. He was very patient throughout the sessions and took additional time to explain the concepts further when we had queries.',
  },
  {
    id: 202,
    reviewer: 'Riya',
    text: 'The training was awesome. The instructor has done a great job. He was very patient throughout the sessions and took additional time to explain the concepts further when we had queries.',
  },
  {
    id: 203,
    reviewer: 'Riya',
    text: 'The training was awesome. The instructor has done a great job. He was very patient throughout the sessions and took additional time to explain the concepts further when we had queries.',
  }
];

const MentorsSection = () => {
  return (
    <div style={{
      maxWidth: '100%',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: 'black'
      }}>
        Meet Mentors & Instructors
      </h2>
      <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: 'black'
      }}>
        Tap into the wisdom of DevOps & Cloud Computing Experts
      </h3>
      
      {/* Mentors Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {mentors.map((mentor) => (
          <div 
            key={mentor.id} 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '100%'
            }}>
              <img 
                src={mentor.image} 
                alt={mentor.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              padding: '1rem',
              textAlign: 'center',
              color: 'black'
            }}>
              <h4 style={{
                fontWeight: 'bold',
                marginBottom: '0.25rem'
              }}>
                {mentor.name}
              </h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#333'
              }}>
                {mentor.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Reviews Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem'
      }}>
        {reviews.map((review) => (
          <div 
            key={review.id} 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                marginRight: '1rem'
              }}></div>
              <div>
                <h5 style={{
                  fontWeight: 'bold',
                  marginBottom: '0.25rem'
                }}>
                  {review.reviewer}
                </h5>
                <div style={{
                  color: '#ffd700',
                  fontSize: '1.25rem'
                }}>
                  ★★★★★
                </div>
              </div>
            </div>
            <p style={{
              color: '#333'
            }}>
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorsSection;