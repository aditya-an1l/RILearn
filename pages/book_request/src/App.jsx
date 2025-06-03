import React from 'react';
import BookRequestForm from './BookRequestForm';
import { init } from '@emailjs/browser';
import './App.css';

// Initialize EmailJS once when your app loads
init("BL2XA4YJKRT8yj2us"); // Replace with your actual EmailJS public key

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Request System</h1>
      </header>
      <main>
        <BookRequestForm />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Your Library Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;