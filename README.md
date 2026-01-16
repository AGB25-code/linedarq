# LINEDARQ - Professional Architecture Portfolio Website

A sophisticated, multi-page architecture portfolio website with elegant design and smooth navigation.

## Features

- **Separate Pages**: Four distinct pages (Home, Portfolio, Services, Contact) with seamless navigation
- **Video Hero Section**: Full-screen video background on homepage
- **Professional Typography**: Cormorant Garamond (serif) and Montserrat (sans-serif) fonts
- **Project Gallery**: Dynamic portfolio with modal lightbox for project details
- **Responsive Design**: Fully responsive across all devices
- **Elegant Animations**: Smooth transitions and hover effects
- **Contact Information**: Complete contact details from your contactos.txt
- **Services Listing**: All services from serviços.txt beautifully displayed

## File Structure

```
linedarq/
├── index.html          # Home page with video hero
├── portfolio.html      # Portfolio gallery page
├── servicos.html       # Services page
├── contactos.html      # Contact page
├── styles.css          # Main stylesheet
├── script.js           # Main JavaScript
├── portfolio.js        # Portfolio functionality
├── logo.jpg            # Your logo
├── contactos.txt       # Contact information
├── serviços.txt        # Services information
├── landingPage.mov     # Homepage video
├── landingPage.jpg     # Hero image
└── [project files]     # All project images and videos stored at the root
```

## Running the Website

Simply **double-click `index.html`** to open it in your browser!

All content is embedded directly in the files, so no server is needed.

## Projects Included

The portfolio automatically displays these projects:

1. **Lixa** - Multifamily development
2. **Back Office** - Architectural design
3. **Casa Modular T2** - Modular home
4. **Pedra Natural** - Natural stone project
5. **Design de Interiores** - Interior design
6. **Casa Térrea** - Single-story house
7. **Moradia Térrea** - Contemporary home
8. **Piscina Privada** - Private pool area

## Customization

### Adding New Projects

Edit `portfolio.js` and add to the `portfolioProjects` array:

```javascript
{
    id: 'project-id',
    name: 'Project Name',
    description: 'Project description text',
    images: ['image1.jpg', 'image2.jpg']
}
```

### Changing Colors

Edit `styles.css` CSS variables:

```css
:root {
    --color-primary: #1a1a1a;
    --color-accent: #8b7355;
    --color-light: #f8f8f8;
}
```

### Updating Contact Information

Edit `contactos.html` directly or update `contactos.txt` and manually sync.

### Updating Services

Edit `servicos.html` to add/remove services.

## Typography

- **Headings**: Cormorant Garamond (elegant serif)
- **Body Text**: Montserrat (clean sans-serif)

## Design Philosophy

- White background for clean, professional look
- Generous whitespace
- Subtle transitions and animations
- Focus on photography and project quality
- Minimal but sophisticated aesthetic

## Browser Support

Modern browsers with ES6+ support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Next Steps

1. Add backend integration for contact form (EmailJS, FormSpree, etc.)
2. Add Google Analytics tracking
3. Optimize images for web performance
4. Add meta tags for SEO
5. Consider adding Portuguese language toggle

## Contact Form

Currently displays an alert. To make it functional, integrate with:
- [EmailJS](https://www.emailjs.com/)
- [FormSpree](https://formspree.io/)
- Custom backend API

## Notes

- Project media files live at the repository root and are referenced without a folder prefix.
- Project descriptions are pulled from `.txt` files
- Contact information from `contactos.txt`
- Services from `serviços.txt`
