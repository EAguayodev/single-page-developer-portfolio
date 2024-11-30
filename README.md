# Frontend Mentor - Single-page developer portfolio

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)

### Links

- Solution URL: [Github](https://github.com/EAguayodev/single-page-developer-portfolio)
- Live Site URL: [Vercel](https://single-page-developer-portfolio-nu.vercel.app/)

## My process
Build out the single page developer portoflio project with the primary focus on the form validation, and the use of html and css displaying the layout for desktop, tablet, and mobile using flexbox and css grid. My process was top down, starting with the desktop layout and then building out the tablet and mobile layouts.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- CSS Grid
- Desktop-first workflow


### What I learned

- How to use the nextElementSibling to target the error message.
- How to use the trim method to remove any whitespace from the input fields.
- How to use the test method to validate the email address.
- How to use the display property to show and hide the error message.
- How to use the css grid to create the layout for the desktop, tablet, and mobile views.

To see how you can add code snippets, see below:

```html
<div class="box">
  <picture>
    <source srcset="assets/images/thumbnail-project-1-large.webp" media="(min-width: 900px)">
    <source srcset="assets/images/thumbnail-project-1-small.webp" media="(min-width: 768px)">
    <img class="project-img" src="assets/images/thumbnail-project-1-small.webp" alt="project-1">
  </picture>
  <div class="box-content">
    <a href="#">View project</a>
    <a href="#">View code</a>
  </div>
</div>
```
```css
.text-type {
    background: none;
    border: none;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    caret-color: var(--white);
    outline: none;
    width: 27.813rem;
}
```
```js
 const emailError = emailField.nextElementSibling;
  if (!emailField.value.trim()) {
    emailError.textContent = "Sorry, email is required.";
    emailError.style.display = "block";
    emailError.style.color = "#FF6F5B";
    emailField.style.borderBottom = "1px solid #FF6F5B";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
    emailError.textContent = "Sorry, invalid format here .";
    isValid = false;
  } else {
    emailError.textContent = "";
  }
```

### Continued development

- For future projects, I want to continue focusing on improving my JavaScript skills and will add in using css framworks like Tailwind CSS and Scss.
- Once I have a better understanding of JavaScript, I want to start learning React.
- I also will learn a backend language like c#, php and SQL to be able to connect the frontend to the backend.
### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_css_image_overlay.asp) - Resource used to create the image overlay effect on the projects section.
- [Codepen](https://codepen.io/AbdullahSajjad/pen/LYGVRgK) - Resource used to get ideas for the form validation.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)

## Acknowledgments

I wanted to give thanks to [Frontend Mentor](https://www.frontendmentor.io/) for providing the challenge and [Vercel](https://vercel.com/) for hosting the project.