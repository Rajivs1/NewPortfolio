# Portfolio Website with GSAP Animations

This project is a personal portfolio website built with React, TailwindCSS, and GSAP for animations.

## GSAP Animations

This project includes various animations powered by GreenSock Animation Platform (GSAP). Here's a breakdown of the animations implemented:

### Page Transitions

- Smooth transitions between pages using React Router and GSAP
- Multiple transition types available: fade, slide, zoom, and flip
- Controlled through the `PageTransition` component

### Element Animations

- **ScrollReveal**: Animates elements as they enter the viewport with various animation types:
  - Fade in
  - Slide up, down, left, right
  - Zoom in
  - Rotation

- **TextAnimation**: Text animation component that can animate characters, words, or lines with different effects:
  - Fade in
  - Slide up/down
  - Rotation
  - Elastic bouncy effect

### Component-specific Animations

- **Layout**: Page content transitions, title animations, and underline animations
- **Sidebar**: Profile image bounce, staggered reveal of contact info and social icons
- **AnimatedCursor**: Custom cursor with hover effects for interactive elements

## Animation Components

### 1. ScrollReveal

Use this component to animate elements as they scroll into view:

```jsx
<ScrollReveal animation="slide-up" delay={0.3} duration={0.6}>
  <div className="your-content">
    Content to be animated when scrolled into view
  </div>
</ScrollReveal>
```

### 2. TextAnimation

Use this component for text-based animations:

```jsx
<TextAnimation type="chars" animation="slideUp" stagger={0.02}>
  This text will be animated character by character
</TextAnimation>
```

### 3. PageTransition

Handles smooth transitions between pages:

```jsx
<PageTransition transitionType="fade" duration={0.5}>
  <Outlet /> {/* or any other page content */}
</PageTransition>
```

### 4. AnimatedCursor

Custom cursor effect that follows mouse movement and animates on hover:

```jsx
// Added to App.jsx to be available throughout the application
<AnimatedCursor />
```

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

## Installation

If you want to add GSAP to your own project:

```
npm install gsap
```

## Usage

To use GSAP in your components:

```jsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Use in your component
useEffect(() => {
  gsap.to(".element", { 
    opacity: 1, 
    y: 0, 
    duration: 1,
    scrollTrigger: {
      trigger: ".element",
      start: "top bottom-=100",
      toggleActions: "play none none none"
    }
  });
}, []);
```
