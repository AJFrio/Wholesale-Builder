// Centralized CSS classes for consistent styling across components

export const INPUT_CLASSES = {
  // Standard text/number inputs with blue focus ring
  base: "w-full bg-white bg-opacity-90 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white bg-opacity-90 border border-gray-300 rounded px-2 py-1 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects with blue focus ring
  base: "w-full bg-white bg-opacity-90 border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
  
  // Large selects (like country selector)
  large: "w-full bg-white bg-opacity-90 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
}

export const BUTTON_CLASSES = {
  // Primary blue button with hover effect
  primary: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-gray-600 hover:text-gray-900",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-blue-600 text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container with glassmorphic style
  card: "bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 shadow-lg",
  
  // Sub-container (like attachment items) with glass effect
  subCard: "bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-4 border border-white border-opacity-10 shadow",
  
  // Small item containers (like breakdown items) with subtle glass
  item: "bg-white bg-opacity-20 backdrop-blur-md rounded p-3 text-sm border border-white border-opacity-20 shadow",
  
  // Toggle button container with glass effect
  toggleContainer: "flex bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-1 border border-white border-opacity-20"
}

export const TEXT_CLASSES = {
  // Main headings using blue tones
  heading: "text-xl font-semibold text-blue-900 mb-4",
  
  // Page title
  title: "text-4xl font-bold text-blue-900 mb-2",
  
  // Subtitle text
  subtitle: "text-blue-800",
  
  // Section labels
  label: "block text-sm font-medium text-blue-700 mb-2",
  
  // Sub-headings
  subHeading: "font-medium text-blue-700 mb-2",
  
  // Price text
  price: "text-blue-900 font-semibold",
  
  // Small descriptive text
  description: "text-sm text-blue-700",
  
  // Small detail text
  detail: "text-blue-700 text-xs",
  
  // Product/item names
  itemName: "text-blue-900 font-medium",
  
  // SKU text
  sku: "text-blue-900 font-mono text-xs font-medium",
  
  // Placeholder/empty state text
  placeholder: "text-blue-500 text-center"
}

export const LAYOUT_CLASSES = {
  // Main page container with green gradient background
  page: "min-h-screen bg-gradient-to-br from-green-400 to-green-600 p-4",
  
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
