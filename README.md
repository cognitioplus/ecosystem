# Cognitio+ Ecosystem

A dynamic, responsive mental wellness platform that combines evidence-based psychology with modern technology to deliver personalized mental health support.

## 🌟 Features

### Core Functionality
- **Comprehensive Wellness Tools**: Resilience Navigator, Habit Design Studio, Well-Be Monitor, Emotion Tracker, Oasis Sanctuary, and Professional Care
- **Personalized Dashboard**: Real-time metrics, progress tracking, and actionable recommendations
- **Pillars of Wellness Framework**: Built on Resilience, Culture, Awareness, and Technology
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **PWA Capabilities**: Installable on mobile devices, offline functionality, push notifications

### Technical Highlights
- **Dynamic React Architecture**: Single-page application with client-side routing
- **Optimized Performance**: Lazy loading, image optimization, and efficient rendering
- **Modern UI/UX**: Gradient headers, animated transitions, hover effects, and polished card layouts
- **Accessibility**: Semantic HTML, proper contrast ratios, and keyboard navigation support
- **Progressive Enhancement**: Works on all modern browsers with graceful degradation

## 🎨 Design System

### Color Palette
- **Primary**: `#b425aa` (Cognitio Purple)
- **Secondary**: `#c80ec9` (Deep Purple)
- **Accent**: `#D4AF37` (Metallic Gold)
- **Background**: `#f8f9fa` (Light Neutral)

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body Text**: Roboto Condensed (300-400 weight)
- **Branding**: Montserrat (400-800 weight)
- **Special Elements**: Oswald (500-600 weight)

### UI Components
- **Cards**: Rounded corners with subtle shadows and hover effects
- **Buttons**: Gradient backgrounds with hover animations
- **Icons**: Custom SVG icon system with consistent styling
- **Layout**: Grid and flexbox-based responsive design

## 🚀 Getting Started

### Installation
1. Save the HTML file to your local machine
2. Open in any modern web browser (Chrome, Firefox, Safari, Edge)
3. **Optional**: Install as PWA by clicking the install button in your browser

### Development
This is a single-file React application using:
- React 18 with Babel standalone
- Tailwind-inspired custom CSS
- Inline SVG icons (no external dependencies)
- Service Worker for PWA functionality

### Customization
To modify the application:

1. **Update Branding**: Modify the `BRAND` constant in the JavaScript section
2. **Change Images**: Update the `ICONS` constant with your own image URLs
3. **Add Features**: Extend the `currentView` switch statement with new components
4. **Modify Styling**: Adjust CSS variables in the `:root` section

## 📱 PWA Features

### Manifest Configuration
- **Name**: Cognitio+
- **Display**: Standalone (full-screen app experience)
- **Icons**: 192x192 and 512x512 PNG icons
- **Theme Color**: `#b425aa`
- **Background Color**: `#f8f9fa`

### Service Worker
The application automatically registers a service worker for:
- Offline caching
- Background sync
- Push notifications (when implemented)
- Installable experience

## 🎯 User Experience

### Key User Flows
1. **Landing Page**: Greeting message, wellness pillars, statistics, and feature showcase
2. **Authentication**: Simple login/signup flow
3. **Dashboard**: Personalized metrics and recommendations
4. **Navigation**: Intuitive menu with responsive mobile support

### Accessibility Features
- Proper heading hierarchy
- Sufficient color contrast
- Semantic HTML structure
- Keyboard navigable components
- Screen reader friendly

## 📊 Performance Optimizations

### Image Optimization
- Lazy loading with `loading="lazy"` attribute
- Fallback placeholders for failed images
- Aspect ratio preservation
- Async decoding

### Rendering Performance
- CSS animations instead of JavaScript where possible
- Efficient React component structure
- Minimal re-renders with proper state management
- Optimized CSS with minimal repaints/reflows

## 🌍 Browser Support

- **Chrome**: Full support (including PWA features)
- **Firefox**: Full support
- **Safari**: Full support (iOS 15+ for PWA)
- **Edge**: Full support
- **Mobile Browsers**: Optimized for touch interfaces

## 📝 License

The Cognitio+ brand and associated content are the property of their respective owners.

## 🤝 Contributing

While this is a standalone HTML file, you can contribute by:
1. Reporting issues or bugs
2. Suggesting new features or improvements
3. Creating derivative works with proper attribution

## 📞 Support

For questions about implementation or customization, refer to the inline documentation within the HTML file.

---

**Powered by Awareness, Enhanced by Technology** 💜
