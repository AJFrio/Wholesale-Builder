// SKU pricing data
export const SKU_PRICING = {
  // Uprights - PR-5000-UP-<height>-<color>
  "PR-5000-UP-80-MBLK": 85,
  "PR-5000-UP-80-RED": 95,
  "PR-5000-UP-80-BLUE": 90,
  "PR-5000-UP-93-MBLK": 95,
  "PR-5000-UP-93-RED": 105,
  "PR-5000-UP-93-BLUE": 100,
  
  // Crossmembers - PR-5000-CR-<length>-<color>
  "PR-5000-CR-30-MBLK": 45,
  "PR-5000-CR-30-RED": 50,
  "PR-5000-CR-30-BLUE": 47,
  "PR-5000-CR-16-MBLK": 35,
  "PR-5000-CR-16-RED": 40,
  "PR-5000-CR-16-BLUE": 37
};

// Rack composition rules
export const RACK_COMPOSITION = {
  "4_post": {
    components: [
      {
        type: "uprights",
        skuTemplate: "PR-5000-UP-{height}-{color}",
        quantity: 1, // 1 set (4 pieces)
        description: "Set of 4 Uprights"
      },
      {
        type: "crossmembers",
        skuTemplate: "PR-5000-CR-30-{color}",
        quantity: 1, // 1 set
        description: "Set of 30\" Crossmembers"
      }
    ]
  },
  "6_post": {
    components: [
      {
        type: "uprights",
        skuTemplate: "PR-5000-UP-{height}-{color}",
        quantity: 1, // 1 set (4 pieces)
        description: "Set of 4 Uprights"
      },
      {
        type: "uprights_pair",
        skuTemplate: "PR-5000-UP-{height}-{color}",
        quantity: 0.5, // 1 pair (2 pieces) = 0.5 set
        description: "Pair of Uprights"
      },
      {
        type: "crossmembers_30",
        skuTemplate: "PR-5000-CR-30-{color}",
        quantity: 1, // 1 set
        description: "Set of 30\" Crossmembers"
      },
      {
        type: "crossmembers_16",
        skuTemplate: "PR-5000-CR-16-{color}",
        quantity: 1, // 1 set
        description: "Set of 16\" Crossmembers"
      }
    ]
  }
};

// Helper function to generate SKU from template
export const generateSKU = (template, height, color) => {
  let colorCode;
  if (color === 'red') {
    colorCode = 'RED';
  } else if (color === 'blue') {
    colorCode = 'BLUE';
  } else {
    colorCode = 'MBLK';
  }
  return template
    .replace('{height}', height)
    .replace('{color}', colorCode);
};
