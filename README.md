# First Choice Insurance Services Website

A simple, responsive website for First Choice Insurance Services, an independent insurance agency in San Antonio, TX.

## Structure

```
first-choice-insurance/
│
├── index.html              # Main HTML file
├── assets/
│   ├── js/
│   │   ├── animations.js   # Scroll animations
│   │   └── form.js         # Form handling
│   └── images/
│       └── agent-placeholder.jpg
└── README.md               # This file
```

## Features

- Responsive design that works on mobile, tablet, and desktop
- Contact form powered by Formspree
- Scroll animations
- SEO-friendly metadata

## Setup Instructions

1. Clone this repository to your local machine
2. Make sure to create the proper directory structure:
   ```
   mkdir -p assets/js assets/images
   ```
3. Place the JavaScript files in the `assets/js` directory
4. Add an image file named `agent-placeholder.jpg` to the `assets/images` directory
5. Open `index.html` in a web browser to test the site

## Formspree Integration

The contact form uses Formspree for processing. The form is configured to use the endpoint `https://formspree.io/f/xanojyee`. Make sure to test the form submission to ensure it's working correctly.

## Browser Compatibility

This website has been tested and works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

For older browsers, the animations gracefully degrade.

## Deployment

This website can be deployed to GitHub Pages:

1. Push the repository to GitHub
2. Go to repository settings
3. Enable GitHub Pages from the main branch
4. The site will be available at `https://[username].github.io/[repository-name]/`
