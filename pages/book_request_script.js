
(function() {
  emailjs.init('BL2XA4YJKRT8yj2us'); 
})();

document.getElementById('bookRequestForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const bookName = document.getElementById('bookName').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  const userEmail = document.getElementById('userEmail').value;
  const submitBtn = document.getElementById('submitBtn');
  const statusMessage = document.getElementById('statusMessage');

  submitBtn.disabled = true;
  submitBtn.innerText = 'Sending...';
  statusMessage.innerHTML = '';

  const adminParams = {
    to_email: 'team.rilearn@gmail.com',
    name: userName,
    title: `Book Request: ${bookName}`,
    email: userEmail,
    user_email: userEmail,
    book_name: bookName,
    isbn_number: isbn,
    message: `Author: ${author}`
  };

  const userParams = {
    email: userEmail,
    name: userName,
    title: `Book Request: ${bookName}`,
    from_name: 'RILEARN'
  };

  // Send to admin
  emailjs.send('service_jjhp49g', 'template_n01z6pv', adminParams)
    .then(() => {
      console.log("Admin email sent");
      // Then send to user
      return emailjs.send('service_jjhp49g', 'template_xd1y6jz', userParams);
    })
    .then(() => {
      console.log("User confirmation sent");
      statusMessage.innerHTML = '<div class="success-message">Your book request has been submitted! Please check your email for confirmation.</div>';
      document.getElementById('bookRequestForm').reset();
    })
    .catch((err) => {
      console.error('Error:', err);
      statusMessage.innerHTML = '<div class="error-message">There was an error submitting your request. Please try again.</div>';
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Send Request';
    });
});
