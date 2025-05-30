// Distribution data for different countries
export const COUNTRY_DATA = {
  brazil: {
    name: "Brazil",
    POST_DIST: {
      "4_post": 0.65, // 65% 4-post racks
      "6_post": 0.35  // 35% 6-post racks
    },
    HEIGHT_DIST: {
      "80": 0.30, // 30% 80-inch height
      "93": 0.70  // 70% 93-inch height
    },
    COLOR_DIST: {
      "black": 0.5, // 50% black racks
      "red": 0.25,  // 25% red racks
      "blue": 0.25  // 25% blue racks
    }
  },
  china: {
    name: "China",
    POST_DIST: {
      "4_post": 0.45,
      "6_post": 0.55
    },
    HEIGHT_DIST: {
      "80": 0.60,
      "93": 0.40
    },
    COLOR_DIST: {
      "black": 0.7,
      "red": 0.15,
      "blue": 0.15
    }
  },
  japan: {
    name: "Japan",
    POST_DIST: {
      "4_post": 0.70,
      "6_post": 0.30
    },
    HEIGHT_DIST: {
      "80": 0.80,
      "93": 0.20
    },
    COLOR_DIST: {
      "black": 0.8,
      "red": 0.1,
      "blue": 0.1
    }
  }
};

// Base rack pricing (can be adjusted later)
export const RACK_PRICING = {
  "4_post": {
    "80": {
      "black": 450,
      "red": 465,  // Red is slightly more expensive
      "blue": 480  // Blue is premium
    },
    "93": {
      "black": 520,
      "red": 535,
      "blue": 550
    }
  },
  "6_post": {
    "80": {
      "black": 650,
      "red": 665,
      "blue": 680
    },
    "93": {
      "black": 720,
      "red": 735,
      "blue": 750
    }
  }
};
