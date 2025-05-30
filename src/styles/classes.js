// Centralized CSS classes for consistent styling across components

export const INPUT_CLASSES = {
  // Standard text/number inputs
  base: "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black",
  
  // Small inputs (like quantity in attachments)
  small: "w-16 bg-white border border-gray-300 rounded px-2 py-1 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black placeholder-gray-400"
}

export const SELECT_CLASSES = {
  // Standard dropdown selects
  base: "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black",
  
  // Large selects (like country selector)
  large: "w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
}

export const BUTTON_CLASSES = {
  // Primary black button
  primary: "w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
  
  // Toggle button (inactive state)
  toggle: "px-3 py-1 text-xs font-medium rounded transition-all text-gray-600 hover:text-gray-900",
  
  // Toggle button (active state)
  toggleActive: "px-3 py-1 text-xs font-medium rounded transition-all bg-black text-white shadow-sm"
}

export const CONTAINER_CLASSES = {
  // Main card container with glassmorphic styling
  card: "bg-white/30 rounded-lg p-6 shadow-sm border border-white/30 backdrop-blur-md",
  
  // Sub-container (like attachment items)
  subCard: "bg-gray-50 rounded-lg p-4 border border-gray-200",
  
  // Small item containers (like breakdown items)
  item: "bg-gray-50 rounded p-3 text-sm border border-gray-200",
  
  // Toggle button container
  toggleContainer: "flex bg-gray-100 rounded-lg p-1 border border-gray-200"
}

export const TEXT_CLASSES = {
  // Main headings
  heading: "text-xl font-semibold text-gray-900 mb-4",
  
  // Page title
  title: "text-4xl font-bold text-gray-900 mb-2",
  
  // Subtitle
  subtitle: "text-gray-600",
  
  // Section labels
  label: "block text-sm font-medium text-gray-700 mb-2",
  
  // Sub-headings
  subHeading: "font-medium text-gray-700 mb-2",
  
  // Price text
  price: "text-black font-semibold",
  
  // Small descriptive text
  description: "text-sm text-gray-600",
  
  // Small detail text
  detail: "text-gray-600 text-xs",
  
  // Product/item names
  itemName: "text-gray-900 font-medium",
  
  // SKU text
  sku: "text-gray-900 font-mono text-xs font-medium",
  
  // Placeholder/empty state text
  placeholder: "text-gray-500 text-center"
}

export const LAYOUT_CLASSES = {
  // Main page container with blue gradient background
  page: "min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-4",
  
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
