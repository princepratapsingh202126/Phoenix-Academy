/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
<script src="https://cdn.emailjs.com/sdk/2.6.4/email.min.js"></script>

<script>
  (function() {
    emailjs.init("YOUR_USER_ID");
  })();

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const templateId = 'template_fgfi4a3';
    const serviceId = 'gmail';
    const userId = 'Prince Pratap Singh';
    const templateParams = {
      from_name: 'Visitor',
      to_name: 'Prince Pratap Singh',
      reply_to: email,
      message: 'Notify Me!'
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  });
</script>
