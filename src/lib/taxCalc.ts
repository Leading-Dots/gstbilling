// HSN code data with tax rates and categories
const hsnData = {
    "0401": {
      "description": "Milk and cream, not concentrated nor containing added sugar or other sweetening matter",
      "category": "Dairy Products",
      "cgst": 0,
      "sgst": 0,
      "igst": 0
    },
    "0405": {
      "description": "Butter and other fats and oils derived from milk; dairy spreads",
      "category": "Dairy Products",
      "cgst": 6,
      "sgst": 6,
      "igst": 12
    },
    "1001": {
      "description": "Wheat and meslin",
      "category": "Cereals",
      "cgst": 0,
      "sgst": 0,
      "igst": 0
    },
    "1701": {
      "description": "Cane or beet sugar and chemically pure sucrose, in solid form",
      "category": "Sugar",
      "cgst": 2.5,
      "sgst": 2.5,
      "igst": 5
    },
    "2106": {
      "description": "Food preparations not elsewhere specified or included",
      "category": "Processed Foods",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "2710": {
      "description": "Petroleum oils and oils obtained from bituminous minerals, other than crude",
      "category": "Fuels",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "3004": {
      "description": "Medicaments consisting of mixed or unmixed products for therapeutic or prophylactic uses",
      "category": "Pharmaceuticals",
      "cgst": 6,
      "sgst": 6,
      "igst": 12
    },
    "3304": {
      "description": "Beauty or make-up preparations and preparations for the care of the skin",
      "category": "Cosmetics",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "3923": {
      "description": "Articles for the conveyance or packing of goods, of plastics",
      "category": "Plastics",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "6109": {
      "description": "T-shirts, singlets and other vests, knitted or crocheted",
      "category": "Apparel",
      "cgst": 2.5,
      "sgst": 2.5,
      "igst": 5
    },
    "6203": {
      "description": "Men's or boys' suits, ensembles, jackets, blazers, trousers, bib and brace overalls",
      "category": "Apparel",
      "cgst": 6,
      "sgst": 6,
      "igst": 12
    },
    "6403": {
      "description": "Footwear with outer soles of rubber, plastics, leather or composition leather",
      "category": "Footwear",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "8418": {
      "description": "Refrigerators, freezers and other refrigerating or freezing equipment",
      "category": "Machinery",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "8528": {
      "description": "Monitors and projectors, not incorporating television reception apparatus",
      "category": "Electronics",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    },
    "8703": {
      "description": "Motor cars and other motor vehicles principally designed for the transport of persons",
      "category": "Automobiles",
      "cgst": 14,
      "sgst": 14,
      "igst": 28
    },
    "9403": {
      "description": "Other furniture and parts thereof",
      "category": "Furniture",
      "cgst": 9,
      "sgst": 9,
      "igst": 18
    }
};

// Type definition for the HSN data structure
interface HsnItem {
  description: string;
  category: string;
  cgst: number;
  sgst: number;
  igst: number;
}


interface HsnItem {
    description: string;
    category: string;
    cgst: number;
    sgst: number;
    igst: number;
  }
  
  type HsnDatabase = {
    [hsnCode: string]: HsnItem;
  };
  
  /**
   * Get GST information for a given HSN code
   * @param hsnNumber The HSN number to look up
   * @returns GST information or undefined if not found
   */
  export function getGSTInfo(hsnNumber: string): HsnItem | undefined {
    // Try exact match first
    if (hsnData[hsnNumber]) {
      return hsnData[hsnNumber];
    }
    
    // If exact match not found, try to match first 4 digits
    const prefix = hsnNumber.slice(0, 4);
    if (hsnData[prefix]) {
      return hsnData[prefix];
    }
    
    // If still not found, try to match first 2 digits (chapter level)
    const chapter = hsnNumber.slice(0, 2);
    for (const code in hsnData) {
      if (code.startsWith(chapter)) {
        return hsnData[code];
      }
    }
    
    return undefined;
  }
  

export default hsnData as HsnDatabase;