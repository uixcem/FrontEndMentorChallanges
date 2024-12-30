# Frontend Mentor - Newsletter Sign-up Form Solution

This is my solution to the Frontend Mentor Newsletter sign-up form challenge. The project features a responsive newsletter subscription form with success message and validation.

## Overview

![](./design/desktop-design.jpg)

### The challenge

Users should be able to:

- Submit their email through a validated form
- See success message after successful submission
- Experience form validation for:
  - Empty field submissions
  - Invalid email formats
- View responsive layout across different devices
- See interactive hover and focus states

### Built with

- HTML5
- CSS
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

Working on this project helped me improve my understanding of:

```html
<!-- Form validation -->
<form action="#" method="post">
  <input type="email" required />
</form>
```

```css
/* Flexbox for layout */
.card {
  display: flex;
  flex-direction: column;
}

/* Responsive design */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

```js
// Form handling and DOM manipulation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Toggle visibility of success message
});
```

### Key Features

- Email validation
- Success message display
- Responsive design
- Interactive states

### Links

- Live Site: [View live project](https://newslettersignup-solution.netlify.app/)
- Code: [View repository](https://github.com/uixcem/FrontEndMentorChallanges/tree/main/NewsletterSignUp-Solution)

## Author

- Frontend Mentor - [@yourusername](uixcem)
