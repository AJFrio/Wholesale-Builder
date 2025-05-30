// Centralized CSS classes for consistent styling across components

export const INPUT_CLASSES = {
  // Standard text/number inputs
  base: "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white border border-gray-300 rounded px-2 py-1 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 placeholder-gray-400"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects
  base: "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300",
  
  // Large selects (like country selector)
  large: "w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
}

export const BUTTON_CLASSES = {
  // Primary psychedelic button
  primary: "w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-white hover:text-yellow-300",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-purple-700 text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container with a bright twist
  card: "bg-white rounded-lg p-6 shadow-lg border border-purple-300",
  
  // Sub-container (like attachment items) with vibrant background
  subCard: "bg-yellow-100 rounded-lg p-4 border border-purple-200",
  
  // Small item containers (like breakdown items) with a fresh color
  item: "bg-green-100 rounded p-3 text-sm border border-purple-200",
  
  // Toggle button container with a soft psychedelic background
  toggleContainer: "flex bg-pink-100 rounded-lg p-1 border border-purple-200"
}

export const TEXT_CLASSES = {
  // Main headings
  heading: "text-xl font-semibold text-white mb-4",
  
  // Page title
  title: "text-4xl font-bold text-white mb-2",
  
  // Subtitle
  subtitle: "text-white",
  
  // Section labels
  label: "block text-sm font-medium text-white mb-2",
  
  // Sub-headings
  subHeading: "font-medium text-white mb-2",
  
  // Price text
  price: "text-white font-semibold",
  
  // Small descriptive text
  description: "text-sm text-white",
  
  // Small detail text
  detail: "text-white text-xs",
  
  // Product/item names
  itemName: "text-white font-medium",
  
  // SKU text
  sku: "text-white font-mono text-xs font-medium",
  
  // Placeholder/empty state text
  placeholder: "text-white text-center"
}

export const LAYOUT_CLASSES = {
  // Main page container with a vibrant gradient background
  page: "min-h-screen bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 p-4",
  
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
