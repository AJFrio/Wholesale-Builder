// Centralized CSS classes for consistent styling across components

export const INPUT_CLASSES = {
  // Standard text/number inputs
  base: "w-full bg-white bg-opacity-70 border border-blueglass-300 rounded-lg px-3 py-2 text-blueglass-900 focus:outline-none focus:ring-2 focus:ring-blueglass-500 focus:border-blueglass-500",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white bg-opacity-70 border border-blueglass-300 rounded px-2 py-1 text-blueglass-900 text-sm focus:outline-none focus:ring-1 focus:ring-blueglass-500 focus:border-blueglass-500 placeholder-blueglass-400"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects
  base: "w-full bg-white bg-opacity-70 border border-blueglass-300 rounded-lg px-3 py-2 text-blueglass-900 focus:outline-none focus:ring-2 focus:ring-blueglass-500 focus:border-blueglass-500",
  
  // Large selects (like country selector)
  large: "w-full bg-white bg-opacity-70 border border-blueglass-300 rounded-lg px-4 py-2 text-blueglass-900 focus:outline-none focus:ring-2 focus:ring-blueglass-500 focus:border-blueglass-500"
}

export const BUTTON_CLASSES = {
  // Primary blue button
  primary: "w-full bg-blueglass-600 hover:bg-blueglass-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-blueglass-600 hover:text-blueglass-900",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-blueglass-600 text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container with glassmorphic style
  card: "bg-white bg-opacity-20 backdrop-blur-xs rounded-lg p-6 border border-blueglass-300 shadow-sm",
  
  // Sub-container (like attachment items)
  subCard: "bg-white bg-opacity-10 backdrop-blur-xs rounded-lg p-4 border border-blueglass-200",
  
  // Small item containers (like breakdown items)
  item: "bg-white bg-opacity-10 rounded p-3 text-blueglass-900 border border-blueglass-200",
  
  // Toggle button container
  toggleContainer: "flex bg-blueglass-100 rounded-lg p-1 border border-blueglass-300"
}

export const TEXT_CLASSES = {
  // Main headings
  heading: "text-xl font-semibold text-blueglass-900 mb-4",
  
  // Page title
  title: "text-4xl font-bold text-blueglass-900 mb-2",
  
  // Subtitle
  subtitle: "text-blueglass-700",
  
  // Section labels
  label: "block text-sm font-medium text-blueglass-700 mb-2",
  
  // Sub-headings
  subHeading: "font-medium text-blueglass-700 mb-2",
  
  // Price text
  price: "text-blueglass-900 font-semibold",
  
  // Small descriptive text
  description: "text-sm text-blueglass-700",
  
  // Small detail text
  detail: "text-blueglass-700 text-xs",
  
  // Product/item names
  itemName: "text-blueglass-900 font-medium",
  
  // SKU text
  sku: "text-blueglass-900 font-mono text-xs font-medium",
  
  // Placeholder/empty state text
  placeholder: "text-blueglass-500 text-center"
}

export const LAYOUT_CLASSES = {
  // Main page container with subtle blue gradient background
  page: "min-h-screen bg-gradient-to-b from-blueglass-50 to-blueglass-100 p-4",
  
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
