# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**InnoVend LLC Website** - A marketing website for a vending machine placement service that operates in the North Potomac, Rockville, and Gaithersburg areas of Maryland. The business places vending machines at customer locations (salons, gyms, offices, etc.) at no cost to the business owner, handling all maintenance and restocking.

The website serves as the primary customer acquisition channel, showcasing services and collecting service requests through an interactive form.

**Live Site**: https://anaymehta1.github.io/innovend-website

## Technology Stack

### Core Technologies
- **React 19.2.0**: JavaScript library for building the user interface using components
- **Vite 7.2.4**: Modern build tool that provides fast development server and optimized production builds
- **Tailwind CSS 3.4.17**: Utility-first CSS framework (styles are applied via className attributes like `bg-blue-500 text-white p-4`)
- **Lucide React 0.562.0**: Icon library providing SVG icons as React components

### Supporting Tools
- **ESLint 9.39.1**: Code quality and style checker for JavaScript/React
- **PostCSS 8.5.6**: CSS processor that runs Tailwind CSS and Autoprefixer
- **gh-pages 6.3.0**: Deployment tool for publishing to GitHub Pages

## Development Commands

### Getting Started
```bash
npm install          # Install all dependencies (run this first!)
npm run dev          # Start development server at http://localhost:5173
```

### Building and Testing
```bash
npm run build        # Create production build in /dist folder
npm run preview      # Preview the production build locally
npm run lint         # Check code for errors and style issues
```

### Deployment
```bash
npm run deploy       # Build and deploy to GitHub Pages
```
The deploy command automatically runs `predeploy` (which builds the project) before publishing the `dist` folder to the `gh-pages` branch.

## Application Architecture

### Single Page Application (SPA)
This is a **single-page application**, meaning there's only one HTML file (`index.html`) and one main page. Instead of loading different HTML pages when users click links, JavaScript dynamically shows/hides different sections and uses smooth scrolling.

**How it works**:
1. Browser loads `index.html`
2. `index.html` loads `src/main.jsx`
3. `src/main.jsx` renders the `App` component from `src/App.jsx`
4. Everything the user sees is rendered by this one component

### File Structure
```
innovend-website/
├── src/
│   ├── App.jsx          # Main component (entire website UI)
│   ├── App.css          # Component-specific styles (mostly unused)
│   ├── main.jsx         # React entry point
│   ├── index.css        # Global styles (Tailwind imports)
│   └── assets/          # Images and static files
├── public/              # Static files served as-is
├── index.html           # Single HTML file for the app
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite build configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── eslint.config.js     # ESLint rules and configuration
```

### Component Structure

The entire application is one large component (`InnoVendWebsite`) in `src/App.jsx`. This component contains:

1. **Navigation Bar** (lines 65-100)
   - Fixed to top of page
   - Desktop: horizontal menu
   - Mobile: hamburger menu that toggles open/closed
   - Uses `scrollToSection()` function to smoothly scroll to page sections

2. **Page Sections** (lines 103-425)
   - `#home` - Hero section with main call-to-action
   - `#about` - Company information and key benefits
   - `#services` - Why choose InnoVend (6 benefit cards)
   - `#machines` - Vending machine types (6 machine cards)
   - `#products` - Available beverages and snacks
   - CTA section - Final call-to-action before footer
   - Footer - Contact information and links

3. **Modal Overlays** (lines 480-863)
   - Service request form modal (`showForm` state controls visibility)
   - Terms & Conditions modal (`showTerms` state controls visibility)

### State Management Explained

React uses "state" to track data that changes over time. When state changes, React automatically re-renders the affected parts of the UI.

**State variables in this app** (lines 5-21):

```javascript
const [showForm, setShowForm] = useState(false);
```
- `showForm`: boolean that controls if the form modal is visible
- `setShowForm`: function to update showForm (e.g., `setShowForm(true)` opens the modal)
- `useState(false)`: starts with value of false (form hidden)

```javascript
const [formStep, setFormStep] = useState(1);
```
- Tracks which step of the form is currently displayed (1, 2, 3, or 4)

```javascript
const [formData, setFormData] = useState({...});
```
- Object containing all form field values
- Updated via `updateFormData()` helper function (line 23)

### Multi-Step Form Flow

The service request form has 4 steps with validation:

**Step 1: Introduction & Email** (lines 508-565)
- Welcomes user and explains the process
- Collects email address
- Requires email validation and terms agreement
- Cannot proceed unless `canProceedStep1` is true (line 31)

**Step 2: Personal Information** (lines 567-676)
- Collects: first name, last name, business name, phone, contact preference
- Cannot proceed unless all required fields filled (`canProceedStep2`, line 32)

**Step 3: Additional Information** (lines 678-737)
- Optional fields: how they heard about InnoVend, referrals, additional info
- No validation required (all optional)

**Step 4: Review & Submit** (lines 739-798)
- Shows summary of entered information
- Requires final terms agreement
- Submit button calls `handleSubmit()` function (line 35)

### Form Validation Logic

Validation happens through computed values that are recalculated every render:

```javascript
const canProceedStep1 = formData.email && validateEmail(formData.email) && formData.termsAgreed;
```
This creates a boolean (true/false) that's true only when:
- Email field is not empty, AND
- Email passes validation regex, AND
- Terms checkbox is checked

The "Next" button is disabled when these conditions aren't met:
```javascript
disabled={!canProceedStep1}
```

### Navigation System

**Smooth Scrolling** (lines 54-60):
```javascript
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setShowMenu(false);  // Close mobile menu after navigation
  }
};
```

This function finds an HTML element by ID and scrolls to it smoothly. Sections have IDs like `id="about"`, `id="services"`, etc.

### Styling Approach

**Tailwind CSS** is a utility-first framework. Instead of writing CSS files, you add class names directly to elements:

```javascript
<div className="bg-blue-500 text-white p-4 rounded-lg">
```

This translates to:
- `bg-blue-500`: blue background color
- `text-white`: white text color
- `p-4`: padding on all sides
- `rounded-lg`: rounded corners

**Responsive Design**:
- `md:`: prefix means "on medium screens and up"
- `sm:`: means "on small screens and up"
- `lg:`: means "on large screens and up"

Example:
```javascript
className="grid md:grid-cols-2 gap-8"
```
- Mobile: single column grid
- Tablet and up: two column grid

**Color Scheme**:
- Primary: Blue (`blue-500`, `blue-600`)
- Accent: Cyan (`cyan-400`, `cyan-500`)
- Background: Slate dark (`slate-900`, `slate-800`)
- Text: White and gray shades

### Icons

Icons are imported from `lucide-react` and used as components:

```javascript
import { Check, X, Phone } from 'lucide-react';

<Phone className="w-6 h-6" />  // Renders a phone icon
```

The `w-6 h-6` classes set the icon to 24px × 24px (6 × 4px = 24px in Tailwind's spacing scale).

## Build Configuration Details

### Vite Configuration (vite.config.js)
```javascript
base: '/innovend-website/'
```
This tells Vite that the app won't be served from the root domain, but from `domain.com/innovend-website/`. This is required for GitHub Pages when the repo isn't named `username.github.io`.

**Important**: If you rename the repository or move deployment elsewhere, update this base path.

### Tailwind Configuration (tailwind.config.js)
```javascript
content: ["./index.html", "./src/**/*.{js,jsx}"]
```
Tells Tailwind which files to scan for class names. Tailwind only includes CSS for classes you actually use, keeping file sizes small.

### Package.json Homepage
```json
"homepage": "https://anaymehta1.github.io/innovend-website"
```
This tells gh-pages where the site will be hosted. Must match the `base` in vite.config.js.

## Key Concepts for Beginners

### React Components
Components are reusable pieces of UI written as JavaScript functions that return JSX (HTML-like syntax):

```javascript
const InnoVendWebsite = () => {
  return (
    <div className="...">
      {/* UI content */}
    </div>
  );
};
```

### JSX Syntax
- Use `className` instead of `class` (because `class` is a JavaScript keyword)
- Use `{variable}` to insert JavaScript values into HTML
- Use `{condition && <Element />}` to conditionally show elements
- Event handlers use camelCase: `onClick`, `onChange`, `onSubmit`

### Conditional Rendering
```javascript
{showForm && (
  <div>Form content here</div>
)}
```
This means: if `showForm` is true, render the div. Otherwise, render nothing.

### Event Handlers
```javascript
onClick={() => setShowForm(true)}
```
When the element is clicked, run this function, which sets `showForm` to true.

With input parameter:
```javascript
onChange={(e) => updateFormData('email', e.target.value)}
```
When input changes, call `updateFormData` with the field name and new value from the event.

## Important Notes

### Form Submission (NEEDS BACKEND INTEGRATION)
Currently, the form shows an alert on submission (line 36):
```javascript
alert('Form submitted successfully!...');
```

**For production**, replace this with:
- API call to backend server
- Email service integration (Formspree, EmailJS, etc.)
- Serverless function (Netlify Functions, Vercel Functions)
- Form service (Netlify Forms, etc.)

The form data is available in the `formData` state object when submitted.

### No Routing Library
This app doesn't use React Router or any routing library. All navigation is handled by:
- Smooth scrolling to section IDs on the same page
- Showing/hiding modals with state variables

If you need multiple pages, you would add React Router.

### Static Site (No Backend)
This is a frontend-only application. There's no:
- Database
- Server-side processing
- User authentication
- API (except what you'd add for form submission)

Everything runs in the user's browser.

### GitHub Pages Deployment
The site is hosted on GitHub Pages, which only serves static files (HTML, CSS, JavaScript). The deployment process:

1. `npm run deploy` triggers `predeploy` script
2. `predeploy` runs `npm run build`
3. Build creates optimized files in `/dist` folder
4. `gh-pages` package pushes `/dist` contents to `gh-pages` branch
5. GitHub Pages serves the site from that branch

### Development vs Production
- **Development** (`npm run dev`): Fast refresh, detailed error messages, unoptimized code
- **Production** (`npm run build`): Minified code, optimized for performance, smaller file sizes

Always test with `npm run preview` before deploying to catch any build-specific issues.

## Common Development Tasks

### Adding a new section to the page
1. Add a new section element with an `id` attribute in App.jsx
2. Add a navigation link that calls `scrollToSection('your-id')`
3. Style it with Tailwind classes matching the existing design

### Modifying the form
- Form structure: lines 480-802
- Form state: lines 9-21
- Form validation: lines 27-33
- Add new fields to `formData` state object
- Add corresponding input elements in the appropriate step
- Update validation logic if the field is required

### Changing colors/styling
- Tailwind classes are used throughout
- Main color scheme: blue/cyan/slate
- Search for color classes (e.g., `bg-blue-500`) and replace
- Or extend Tailwind config for custom colors

### Adding new icons
1. Import from lucide-react: `import { IconName } from 'lucide-react';`
2. Use as component: `<IconName className="w-6 h-6" />`
3. Browse available icons at: https://lucide.dev/icons

### Testing the site
1. Run `npm run dev` for development server
2. Test on different screen sizes (browser dev tools responsive mode)
3. Test form validation by submitting with empty/invalid fields
4. Test navigation links and smooth scrolling
5. Test mobile menu toggle
6. Run `npm run build && npm run preview` to test production build
