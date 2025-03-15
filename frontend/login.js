// Toggle between Sign In and Sign Up forms
document.querySelector('.signup-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.sign-in').classList.remove('active');
  document.querySelector('.sign-up').classList.add('active');
});

document.querySelector('.signin-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.sign-up').classList.remove('active');
  document.querySelector('.sign-in').classList.add('active');
});

// Handle Sign In Form Submission
document.getElementById('signin-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.querySelector('#signin-form input[type="text"]').value; // Changed from email to username
  const password = document.querySelector('#signin-form input[type="password"]').value;

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }) // Updated to use username
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.location.href = 'index.html';
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    console.error(err);
    alert('Login failed');
  }
});

// Handle Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('#signup-form input[type="text"]').value;
  const username = document.querySelector('#signup-form input[type="text"]').value; // Changed from email to username
  const password = document.querySelector('#signup-form input[type="password"]').value;

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password }) // Updated to use username
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message || 'Signup successful');
      window.location.href = 'login.html';
    } else {
      alert(data.message || 'Signup failed');
    }
  } catch (err) {
    console.error(err);
    alert('Signup failed');
  }
});