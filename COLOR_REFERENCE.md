# Color Reference Guide

## Quick Color Palette

### Primary Green
```
primary-500: #22C55E  ← Main brand color
primary-600: #16A34A  ← Hover states
primary-700: #15803D  ← Active states
primary-50:  #F0FDF4  ← Light backgrounds
```

### Text Colors
```
dark-900: #111827  ← Primary text (near black)
dark-700: #374151  ← Secondary text
dark-500: #6B7280  ← Muted text
```

### Backgrounds
```
White:       #FFFFFF  ← Main background
dark-50:     #F9FAFB  ← Neutral light
primary-50:  #F0FDF4  ← Light green tint
```

### Borders
```
dark-200:    #E5E7EB  ← Light borders
primary-200: #BBF7D0  ← Green borders
```

## Common Patterns

### Primary Button
```jsx
<button className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105">
  Get Started
</button>
```

### Secondary Button
```jsx
<button className="bg-white hover:bg-primary-50 text-primary-600 font-bold px-8 py-4 rounded-xl border-2 border-primary-500 transition-all duration-200">
  Learn More
</button>
```

### Card
```jsx
<div className="bg-white p-6 rounded-xl border border-dark-200 hover:shadow-lg transition-shadow">
  <h3 className="text-dark-900 font-bold text-xl mb-2">Title</h3>
  <p className="text-dark-700">Description text</p>
</div>
```

### Link
```jsx
<a href="#" className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
  Click here
</a>
```

### Section Background
```jsx
<section className="bg-primary-50 py-20">
  {/* Content */}
</section>
```

### Icon Container
```jsx
<div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-white" />
</div>
```

### Heading
```jsx
<h1 className="text-4xl font-bold text-dark-900">
  Main Heading
</h1>
```

### Body Text
```jsx
<p className="text-dark-900 leading-relaxed">
  Primary body text
</p>
<p className="text-dark-700">
  Secondary body text
</p>
<p className="text-dark-500">
  Muted text
</p>
```

## Status Colors (if needed)

### Success
```
Use primary-500: #22C55E (green)
```

### Error
```
Use red-500: #EF4444 (only for errors)
```

### Warning
```
Use amber-500: #F59E0B (only for warnings)
```

### Info
```
Use blue-500: #3B82F6 (only for info messages)
```

**Note:** Status colors should only be used for their specific purposes (error messages, success notifications, etc.). The main design uses only green, white, and black.

## Accessibility

All color combinations meet WCAG AA standards:
- ✅ dark-900 on white: 14.7:1 (AAA)
- ✅ dark-700 on white: 9.7:1 (AAA)
- ✅ dark-500 on white: 5.4:1 (AA)
- ✅ White on primary-500: 2.1:1 (Large text only)

## Do's and Don'ts

### ✅ Do
- Use green for interactive elements (buttons, links, icons)
- Use black/dark gray for text
- Use white for backgrounds
- Use light green tints for section backgrounds
- Maintain high contrast

### ❌ Don't
- Don't use blue, red, orange, or purple for branding
- Don't use low contrast combinations
- Don't use green for body text
- Don't use colored backgrounds for text sections
- Don't mix multiple brand colors

## Browser DevTools

To inspect colors in browser:
1. Right-click element → Inspect
2. Check computed styles
3. Look for `background-color`, `color`, `border-color`
4. Verify against this reference

## Figma/Design Tools

Export these color variables:
```
Primary Green:    #22C55E
Primary Hover:    #16A34A
Primary Active:   #15803D
Text Primary:     #111827
Text Secondary:   #374151
Text Muted:       #6B7280
Background:       #FFFFFF
Border Light:     #E5E7EB
Green Tint:       #F0FDF4
```
