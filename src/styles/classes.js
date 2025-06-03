// Centralized CSS classes for consistent styling across components

// Tailwind glassmorphic container base
const glassBase = "bg-white/40 backdrop-blur-md border border-white/30 shadow-lg"

export const INPUT_CLASSES = {
  // Standard text/number inputs
  base: "w-full bg-white/70 border border-white/40 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white/70 border border-white/40 rounded px-2 py-1 text-gray-900 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects
  base: "w-full bg-white/70 border border-white/40 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
  
  // Large selects (like country selector)
  large: "w-full bg-white/70 border border-white/40 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
}

export const BUTTON_CLASSES = {
  // Primary blue button
  primary: "w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-gray-200 hover:text-white",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-primary text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container (glassmorphic)
  card: `${glassBase} rounded-lg p-6`,
  
  // Sub-container (like attachment items)
  subCard: `${glassBase} rounded-lg p-4`,
  
  // Small item containers (like breakdown items)
  item: `${glassBase} rounded p-3 text-sm`,
  
  // Toggle button container
  toggleContainer: "flex bg-white/20 rounded-lg p-1 border border-white/30"
}

export const TEXT_CLASSES = {
  // Main headings
  heading: "text-xl font-semibold text-white mb-4",
  
  // Page title
  title: "text-4xl font-bold text-white mb-2 drop-shadow-md",
  
  // Subtitle
  subtitle: "text-white/80",
  
  // Section labels
  label: "block text-sm font-medium text-white mb-2",
  
  // Sub-headings
  subHeading: "font-medium text-white mb-2",
  
  // Price text
  price: "text-white font-semibold",
  
  // Small descriptive text
  description: "text-sm text-white/80",
  
  // Small detail text
  detail: "text-white/80 text-xs",
  
  // Product/item names
  itemName: "text-white font-medium",
  
  // SKU text
  sku: "text-white font-mono text-xs font-medium",
  
  // Placeholder/empty state text
  placeholder: "text-white/70 text-center"
}

export const LAYOUT_CLASSES = {
  // Main page container with gradient background
  page: "min-h-screen bg-gradient-to-br from-primary via-blue-500 to-secondary p-4",
  
  // Content wrapper
  wrapper: "max-w-6xl mx-auto",
  
  // Main grid layout
  grid: "grid lg:grid-cols-3 gap-6",
  
  // Configuration panel
  configPanel: "lg:col-span-2 space-y-6",
  
  // Form grid layouts
  formGrid: "grid md:grid-cols-2 lg:grid-cols-2 gap-4",
  
  // Vertical spacing
  spacingY: "space-y-4",
  spacingY2: "space-y-2",
  
  // Center content
  center: "text-center mb-8",
  
  // Flex layouts
  flexBetween: "flex justify-between items-center",
  flexStart: "flex items-start gap-4",
  flexCenter: "flex items-center gap-2"
}