# Boomerang - UI/UX Design Handoff Document

## Project Overview

**Product**: Boomerang - AI-Powered Returns Processing Platform  
**Target Users**: Fashion retailers, operations teams, customer service representatives  
**Platform**: Web application (responsive)  
**Tech Stack**: React/Next.js, TypeScript, Tailwind CSS (recommended)

---

## Design System

### Color Palette

```css
/* Primary Brand Colors */
--primary-500: #6366f1;      /* Main brand color */
--primary-600: #4f46e5;      /* Hover states */
--primary-700: #4338ca;      /* Active states */
--primary-50: #eef2ff;       /* Light backgrounds */
--primary-100: #e0e7ff;      /* Subtle highlights */

/* Secondary Colors */
--secondary-500: #8b5cf6;    /* Accent purple */
--secondary-600: #7c3aed;    /* Accent hover */

/* Neutral Colors */
--gray-50: #f8fafc;
--gray-100: #f1f5f9;
--gray-200: #e2e8f0;
--gray-300: #cbd5e1;
--gray-400: #94a3b8;
--gray-500: #64748b;
--gray-600: #475569;
--gray-700: #334155;
--gray-800: #1e293b;
--gray-900: #0f172a;

/* Status Colors */
--success-500: #10b981;      /* Approved returns */
--success-100: #dcfce7;      /* Success backgrounds */
--warning-500: #f59e0b;      /* Partial refunds */
--warning-100: #fef3c7;      /* Warning backgrounds */
--error-500: #ef4444;        /* Rejected/fraud */
--error-100: #fee2e2;        /* Error backgrounds */
```

### Typography

```css
/* Font Stack */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System

```css
/* Spacing Scale (4px base) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

## Component Library

### Buttons

```jsx
// Primary Button
<button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
  Primary Action
</button>

// Secondary Button
<button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md font-medium border border-gray-200 transition-colors">
  Secondary Action
</button>

// Danger Button
<button className="bg-error-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
  Danger Action
</button>
```

### Status Badges

```jsx
// Status Badge Component
const StatusBadge = ({ status, children }) => {
  const variants = {
    approved: "bg-success-100 text-success-700",
    partial: "bg-warning-100 text-warning-700",
    rejected: "bg-error-100 text-error-700",
    processing: "bg-primary-100 text-primary-700"
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${variants[status]}`}>
      {children}
    </span>
  );
};
```

### Cards

```jsx
// Standard Card
<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
  {/* Card Content */}
</div>

// Hover Card (for interactive elements)
<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
  {/* Card Content */}
</div>
```

---

## Application Layout

### Navigation Structure

```
├── Dashboard (/)
├── Returns (/returns)
│   ├── All Returns (/returns)
│   ├── Pending Review (/returns/pending)
│   ├── Approved (/returns/approved)
│   └── Rejected (/returns/rejected)
├── Analytics (/analytics)
├── Settings (/settings)
│   ├── General (/settings/general)
│   ├── Processing Rules (/settings/rules)
│   └── Integrations (/settings/integrations)
└── Help (/help)
```

### Header Component

```jsx
// Header Layout
<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        <span className="text-xl font-bold text-gray-900">Boomerang</span>
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        {/* Navigation items */}
      </nav>
      
      {/* User menu */}
      <div className="flex items-center gap-4">
        {/* Notifications, user avatar, etc. */}
      </div>
    </div>
  </div>
</header>
```

### Sidebar Navigation

```jsx
// Sidebar Component
<aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-16">
  <nav className="p-4">
    <ul className="space-y-2">
      <li>
        <a href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50">
          <DashboardIcon className="w-5 h-5" />
          Dashboard
        </a>
      </li>
      {/* More nav items */}
    </ul>
  </nav>
</aside>
```

---

## Key Pages & Components

### 1. Dashboard Page

**Layout**: Full-width with sidebar  
**Components**: Stats cards, recent returns table, processing queue

```jsx
// Dashboard Stats Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  <div className="bg-white rounded-lg border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">Returns Today</p>
        <p className="text-2xl font-bold text-gray-900">847</p>
      </div>
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
        <ReturnIcon className="w-6 h-6 text-primary-600" />
      </div>
    </div>
    <div className="mt-4">
      <span className="text-sm text-success-600">+12% from yesterday</span>
    </div>
  </div>
  {/* Repeat for other stats */}
</div>
```

### 2. Returns Processing Queue

**Layout**: Table with filters and bulk actions  
**Key Features**: 
- Real-time updates
- Bulk selection
- Quick action buttons
- Status filtering

```jsx
// Returns Table Row
<tr className="border-b border-gray-200 hover:bg-gray-50">
  <td className="px-6 py-4">
    <input type="checkbox" className="rounded border-gray-300" />
  </td>
  <td className="px-6 py-4">
    <div className="flex items-center gap-3">
      <img src="/api/placeholder/40/40" className="w-10 h-10 rounded-md object-cover" />
      <div>
        <p className="font-medium text-gray-900">Blue Denim Jacket</p>
        <p className="text-sm text-gray-500">SKU: BDJ-001-M</p>
      </div>
    </div>
  </td>
  <td className="px-6 py-4">
    <StatusBadge status="processing">Processing</StatusBadge>
  </td>
  <td className="px-6 py-4">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-success-500 rounded-full"></div>
      <span className="text-sm text-gray-700">98% Confidence</span>
    </div>
  </td>
  <td className="px-6 py-4">
    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
      Review
    </button>
  </td>
</tr>
```

### 3. Individual Return Inspection

**Layout**: Split screen - image gallery left, details right  
**Key Features**:
- Image zoom/pan
- AI annotations
- Manual override controls
- Processing history

```jsx
// Return Inspection Layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Image Gallery */}
  <div className="space-y-4">
    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <img src="/api/placeholder/400/400" className="w-full h-full object-cover" />
    </div>
    <div className="grid grid-cols-4 gap-2">
      {/* Thumbnail images */}
    </div>
  </div>
  
  {/* Details Panel */}
  <div className="space-y-6">
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Assessment</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Condition</span>
          <span className="text-sm font-semibold text-gray-900">Like New</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Confidence</span>
          <span className="text-sm font-semibold text-success-600">98%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Recommendation</span>
          <StatusBadge status="approved">Full Refund</StatusBadge>
        </div>
      </div>
    </div>
    
    {/* Action Buttons */}
    <div className="flex gap-3">
      <button className="flex-1 bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded-md font-medium">
        Approve
      </button>
      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium">
        Review
      </button>
      <button className="flex-1 bg-error-500 hover:bg-error-600 text-white px-4 py-2 rounded-md font-medium">
        Reject
      </button>
    </div>
  </div>
</div>
```

### 4. Analytics Dashboard

**Layout**: Grid of charts and metrics  
**Key Components**:
- Time series charts
- Pie charts for return reasons
- Heat maps for processing times
- Exportable reports

```jsx
// Analytics Chart Container
<div className="bg-white rounded-lg border border-gray-200 p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-gray-900">Returns by Status</h3>
    <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
      <option>Last 30 days</option>
      <option>Last 90 days</option>
      <option>Last year</option>
    </select>
  </div>
  <div className="h-64">
    {/* Chart component goes here */}
  </div>
</div>
```

---

## Interactive Behaviors

### Loading States

```jsx
// Processing animation
<div className="flex items-center gap-2 text-primary-600">
  <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
  <span className="text-sm">Processing return...</span>
</div>

// Skeleton loading for cards
<div className="bg-white rounded-lg border border-gray-200 p-6">
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
</div>
```

### Error States

```jsx
// Error Message Component
<div className="bg-error-50 border border-error-200 rounded-md p-4">
  <div className="flex items-center gap-3">
    <AlertTriangleIcon className="w-5 h-5 text-error-500" />
    <div>
      <h4 className="text-sm font-medium text-error-800">Processing Error</h4>
      <p className="text-sm text-error-700">Unable to analyze this return. Please try again.</p>
    </div>
  </div>
</div>
```

### Empty States

```jsx
// Empty state for returns queue
<div className="text-center py-12">
  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
    <InboxIcon className="w-12 h-12 text-gray-400" />
  </div>
  <h3 className="text-lg font-medium text-gray-900 mb-2">No returns to process</h3>
  <p className="text-gray-500 mb-4">All returns have been processed successfully.</p>
  <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium">
    Refresh
  </button>
</div>
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile Navigation

```jsx
// Mobile Menu Toggle
<div className="md:hidden">
  <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
    <MenuIcon className="w-6 h-6" />
  </button>
</div>

// Mobile Sidebar Overlay
<div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
  <div className="fixed inset-y-0 left-0 w-64 bg-white z-50">
    {/* Mobile navigation content */}
  </div>
</div>
```

### Responsive Table

```jsx
// Mobile-friendly table (stack on mobile)
<div className="md:hidden space-y-4">
  {returns.map(return => (
    <div key={return.id} className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-900">{return.product}</span>
        <StatusBadge status={return.status}>{return.status}</StatusBadge>
      </div>
      <div className="text-sm text-gray-500">
        <p>Customer: {return.customer}</p>
        <p>Date: {return.date}</p>
      </div>
    </div>
  ))}
</div>
```

---

## Technical Requirements

### Performance
- Lazy load images and charts
- Implement virtual scrolling for large return lists
- Cache API responses appropriately
- Optimize bundle size with code splitting

### Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader compatible
- Color contrast ratios meet WCAG 2.1 AA standards

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### API Integration
- REST API endpoints for CRUD operations
- WebSocket connection for real-time updates
- File upload handling for return images
- Bulk operations support

---

## Animation & Transitions

### Micro-interactions

```css
/* Smooth transitions */
.transition-all {
  transition: all 0.2s ease-in-out;
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Focus states */
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}
```

### Page Transitions

```jsx
// Fade in animation for page loads
<div className="animate-fade-in">
  {/* Page content */}
</div>

// Slide in animation for modals
<div className="animate-slide-in-right">
  {/* Modal content */}
</div>
```

---

## Testing Considerations

### Unit Tests
- Component rendering
- Event handlers
- State management
- API integration

### Integration Tests
- User workflows
- Form submissions
- Data flow between components

### E2E Tests
- Complete return processing workflow
- User authentication
- Responsive behavior
- Performance benchmarks

---

## Deployment Notes

### Environment Variables
```
NEXT_PUBLIC_API_URL=https://api.boomerang.com
NEXT_PUBLIC_UPLOAD_URL=https://uploads.boomerang.com
NEXT_PUBLIC_WEBSOCKET_URL=wss://ws.boomerang.com
```

### Build Configuration
- Enable source maps for debugging
- Configure CDN for static assets
- Set up monitoring and analytics
- Enable progressive web app features

This design system provides a comprehensive foundation for building a professional, scalable returns processing application that maintains consistency with the established branding while delivering an intuitive user experience.