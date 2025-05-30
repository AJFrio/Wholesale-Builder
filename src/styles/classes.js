// Centralized CSS classes for consistent styling across components

export const INPUT_CLASSES = {
  // Standard text/number inputs
  base: "w-full bg-white border border-pink-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white border border-pink-300 rounded px-2 py-1 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 placeholder-pink-200"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects
  base: "w-full bg-white border border-pink-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
  
  // Large selects (like country selector)
  large: "w-full bg-white border border-pink-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
}

export const BUTTON_CLASSES = {
  // Primary vibrant button with psychedelic gradient
  primary: "w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-pink-300 hover:text-pink-100",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-pink-500 text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container with a neon border
  card: "bg-white rounded-lg p-6 shadow-sm border border-pink-300",
  
  // Sub-container (like attachment items) with soft pink background
  subCard: "bg-pink-50 rounded-lg p-4 border border-pink-200",
  
  // Small item containers (like breakdown items) with soft pink background
  item: "bg-pink-50 rounded p-3 text-sm border border-pink-200",
  
  // Toggle button container
  toggleContainer: "flex bg-pink-100 rounded-lg p-1 border border-pink-200"
}

export const TEXT_CLASSES = {
  // Main headings
  heading: "text-xl font-semibold text-white mb-4",
  
  // Page title
  title: "text-4xl font-bold text-white mb-2",
  
  // Subtitle
  subtitle: "text-yellow-200",
  
  // Section labels
  label: "block text-sm font-medium text-pink-700 mb-2",
  
  // Sub-headings
  subHeading: "font-medium text-pink-700 mb-2",
  
  // Price text
  price: "text-pink-800 font-semibold",
  
  // Small descriptive text
  description: "text-sm text-yellow-600",
  
  // Small detail text
  detail: "text-pink-600 text-xs",
  
  // Product/item names
  itemName: "text-purple-800 font-medium",
  
  // SKU text
  sku: "text-blue-900 font-mono text-xs font-medium",
  
  // Placeholder/empty state text
  placeholder: "text-pink-300 text-center"
}

export const LAYOUT_CLASSES = {
  // Main page container with a psychedelic gradient background
  page: "min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4",
  
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
