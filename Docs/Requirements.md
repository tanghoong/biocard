# Digital Business Card Component Specification

## 1. Overview
Develop a responsive, single-page React component that serves as a digital business card. The component should embody a modern, clean, and user-friendly design, drawing inspiration from contemporary mobile application interfaces.

## 2. Layout and Design Specifications

### 2.1 Header
- Brand identifier: "Beam" logotype (black, bold) with accompanying rounded icon, positioned top-left
- Call-to-action: "Get your card" button (outline style, fully rounded corners), positioned top-right

### 2.2 Profile Section
- Avatar: Circular image representation
- User identification: Name (large, bold typeface)
- Professional title
- Personal branding statement or tagline

### 2.3 Content Area
- Background: White with rounded corners
- Navigation: Sticky tab interface at the top
- Content display: Below tab navigation

## 3. Navigation and Tab Structure
- Tab order: About, Contact, Posts, Projects
- Behavior: Tabs should maintain position (sticky) at the content container's top
- Active state: Visually differentiated (e.g., underline, color variation)

## 4. Tab Content Specifications

### 4.1 About
- Biographical summary or professional overview
- Skills inventory (tag-based visual representation)

### 4.2 Contact
- Social media link directory with corresponding iconography
- Each entry to include platform identifier and associated icon

### 4.3 Posts
- Chronological list of blog entries or articles
- Entry format: Title and publication date
- Empty state handling: Display "No posts available" when applicable

### 4.4 Projects
- Project portfolio, categorized as active or discontinued
- User control: Toggle for discontinued project visibility (default: hidden)
- Project entry schema:
  - Title
  - Concise description
  - Status indicator (active/discontinued)

## 5. Footer
- Branding: "Made with Beam" (centered alignment, reduced font size)

## 6. Style Guide
- Typography: "Inter" sans-serif font family
- Color palette:
  - Body background: Dark violet
  - Main container: Vibrant, complementary color
  - Content area: White
- Design elements:
  - Rounded corners for containers and interactive elements
  - Generous use of whitespace for improved readability
  - High contrast ratios for accessibility compliance

## 7. Functional Requirements
- Tab navigation: Implement without full page reloads
- Project visibility: Toggle mechanism for discontinued projects
- Responsive design: Ensure compatibility across mobile and desktop viewports

## 8. Data Architecture
- Utilize a mock data object for development and testing phases
- Structure data model to facilitate seamless integration with live data sources

## 9. Technical Specifications
- Implementation: Single, self-contained React component
- Styling methodology: Inline styles or CSS-in-JS
- Modularity: Ensure component is easily importable and reusable

## 10. Future Enhancements (Out of Scope)
- QR code generation for contact information dissemination
- In-situ information editing capabilities
- Backend API integration for dynamic data management
- Customizable theming options
