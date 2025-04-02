import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const subjectOptions = [
    'General Inquiry',
    'Support Request',
    'Business Opportunity',
    'Feedback',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
      // Reset success message after 3 seconds
      if (submitStatus === 'success') {
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    }
  };

  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-heading">Get In Touch</p>
            
            <div className={`form-field ${errors.name ? 'error' : ''}`}>
              <input 
                required 
                placeholder="Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field" 
                type="text" 
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className={`form-field ${errors.email ? 'error' : ''}`}>
              <input 
                required 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field" 
                type="email" 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className={`form-field subject-field ${errors.subject ? 'error' : ''}`}>
              <select
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-field subject-select"
              >
                <option value="" disabled>Select Subject</option>
                {subjectOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>
            
            <div className={`form-field ${errors.message ? 'error' : ''}`}>
              <textarea 
                required 
                placeholder="Message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols={30} 
                rows={3} 
                className="input-field" 
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <div className="message-status-area">
              {submitStatus === 'success' && (
                <div className="success-message">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">Failed to send message. Please try again.</div>
              )}
            </div>
            
            <button 
              type="submit" 
              className="sendMessage-btn"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #f7ecec;
    border-radius: 20px;
  }

  .form-heading {
    text-align: center;
    margin: 2em;
    color: #FF0000;
    font-size: 1.2em;
    background-color: transparent;
    align-self: center;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    
    outline: none;
    color: black;
    background-color: #fffff;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .form-field.error {
    box-shadow: inset 2px 5px 10px rgb(255, 0, 0, 0.2);
    border: 1px solid rgba(255, 0, 0, 0.3);
  }

  .error-message {
    color: #ff6b6b;
    font-size: 0.8rem;
    margin-top: 0.25rem;
    text-align: left;
  }

  .subject-field {
    position: relative;
  }

  .subject-select {
    appearance: none;
    background: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364ffda%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") right 0.7em top 50% no-repeat;
    background-size: 0.65em auto;
    padding-right: 1.5em;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: black;
    padding-inline: 1em;
  }

  .message-status-area {
    min-height: 30px;
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
  }

  .success-message {
    color: #64ffda;
    padding: 0.5em;
    border-radius: 5px;
    background-color: rgba(100, 255, 218, 0.1);
    text-align: center;
    width: 100%;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #FF0000;
    font-weight: bold;
    outline: 1px solid #CF3838;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover:not(:disabled) {
    transition: all ease-in-out 0.3s;
    background-color: ##FF0000;
    color: #FF0000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .sendMessage-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #FF0000 0%, #CF3838 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px rgba(100, 255, 218, 0.3);
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export default Form;