import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './BookRequestForm.css';

function BookRequestForm() {
  // State for form fields
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState(''); // Added name field
  
  // State for form submission status
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  
  // Reference to the form element
  const form = useRef();

  // Reset form fields
  const resetForm = () => {
    setBookName('');
    setAuthor('');
    setIsbn('');
    setUserEmail('');
    setUserName('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // Parameters for admin notification email ("Contact Us" template)
    const adminTemplateParams = {
      to_email: 'team.rilearn@gmail.com',
      name: userName,            // Matches {{name}} in template
      title: `Book Request: ${bookName}`,  // Matches {{title}} in template
      email: userEmail,          // Matches {{email}} in template
      user_email: userEmail,     // Matches {{user_email}} in template
      book_name: bookName,       // Matches {{book_name}} in template
      isbn_number: isbn,         // Matches {{isbn_number}} in template
      message: `Author: ${author}` // Will appear in the {{message}} section
    };

    // Parameters for user confirmation email ("Auto-Reply" template)
    const userTemplateParams = {
      email: userEmail,         // Matches {{email}} in template
      name: userName,           // Matches {{name}} in template
      title: `Book Request: ${bookName}`, // Matches {{title}} in template
      from_name: 'RILEARN',     // Your organization name
    };

    // First send the notification email to the admin (Contact Us template)
    emailjs.send(
      'service_jjhp49g',      
      'template_n01z6pv',     // Admin template ID
      adminTemplateParams,
      'BL2XA4YJKRT8yj2us'     
    )
      .then(() => {
        console.log("Admin notification sent successfully");
        // If admin email succeeds, send confirmation to user
        return emailjs.send(
          'service_jjhp49g',    
          'template_xd1y6jz',   // User template ID
          userTemplateParams,
          'BL2XA4YJKRT8yj2us'   
        );
      })
      .then(() => {
        // Both emails sent successfully
        console.log("User confirmation sent successfully");
        setStatus('success');
        resetForm();
        setLoading(false);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setStatus('error');
        setLoading(false);
      });
  };

  return (
    <div className="book-request-container">
      <h2>Book Request Form</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Your Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
            placeholder="Enter book name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder="Enter author name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN Number:</label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
            placeholder="Enter ISBN number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="userEmail">Your Email:</label>
          <input
            type="email"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            placeholder="Enter your email address"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="request-button"
        >
          {loading ? 'Sending...' : 'Send Request'}
        </button>
        
        {status === 'success' && (
          <div className="success-message">
            Your book request has been submitted! Please check your email for confirmation.
          </div>
        )}
        
        {status === 'error' && (
          <div className="error-message">
            There was an error submitting your request. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}

export default BookRequestForm;