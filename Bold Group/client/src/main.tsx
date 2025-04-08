/**
 * Application Entry Point
 * 
 * This is the main entry file for the Bold Group website React application.
 * It renders the root App component into the DOM and applies global styles.
 */
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Base styles from Tailwind

/**
 * Bold Group Custom Styling
 * 
 * Additional CSS for Bold Group brand-specific styles using styled-components.
 * This includes custom colors, typography, and UI effects that maintain brand consistency.
 */
import { createGlobalStyle } from "styled-components";

/**
 * Global Style Component
 * 
 * Defines brand-specific CSS variables and utility classes that can be used throughout the app.
 * This includes:
 * - Brand color palette
 * - Typography settings
 * - UI decorations (underlines, gradients, shadows)
 * - Default font settings
 */
const GlobalStyle = createGlobalStyle`
  /* Brand color variables */
  :root {
    --bold-gold: #C4A01D;    /* Primary accent color for important elements */
    --bold-orange: #E94822;  /* Secondary accent for CTAs and highlights */
    --bold-black: #1E1E1E;   /* Primary text color */
    --bold-gray: #333333;    /* Secondary text and UI elements */
    --bold-light: #F8F8F8;   /* Background and light UI elements */
  }

  /* Diagonal gradient background for hero sections and call-to-action areas */
  .bg-diagonal {
    background: linear-gradient(135deg, var(--bold-orange) 0%, #f3b831 100%);
  }

  /* Text shadow for improved readability on image backgrounds */
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Decorative gold underline for section headings */
  .gold-underline {
    position: relative;
  }

  /* The actual underline element created with pseudo-element */
  .gold-underline::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--bold-gold);
  }

  /* Typography classes for consistent font usage */
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }

  /* Set default body font */
  body {
    font-family: 'Raleway', sans-serif;
  }
`;

/**
 * Application Rendering
 * 
 * Creates a React root in the 'root' DOM element and renders:
 * 1. Global styles for brand consistency
 * 2. The main App component
 */
createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
