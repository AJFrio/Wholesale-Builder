// Centralized CSS classes for consistent styling across components with a psychedelic twist

export const INPUT_CLASSES = {
  // Standard text/number inputs
  base: "w-full bg-white border border-pink-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white border border-pink-300 rounded px-2 py-1 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects
  base: "w-full bg-white border border-pink-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400",
  
  // Large selects (like country selector)
  large: "w-full bg-white border border-pink-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
}

export const BUTTON_CLASSES = {
  // Primary psychedelic gradient button
  primary: "w-full bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-gray-600 hover:text-gray-900",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-pink-600 text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container with a bright feel
  card: "bg-white bg-opacity-80 rounded-lg p-6 shadow-lg border border-pink-200",
  
  // Sub-container (like attachment items)
  subCard: "bg-white bg-opacity-80 rounded-lg p-4 border border-pink-100",
  
  // Small item containers (like breakdown items)
  item: "bg-white bg-opacity-80 rounded p-3 text-sm border border-pink-100",
  
  // Toggle button container
  toggleContainer: "flex bg-white bg-opacity-80 rounded-lg p-1 border border-pink-200"
}

export const TEXT_CLASSES = {
  // Main headings
  heading: "text-xl font-semibold text-white mb-4",
  
  // Page title with gradient text
  title: "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2",
  
  // Subtitle
  subtitle: "text-lg text-white",
  
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
