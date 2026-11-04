import type { CatalogueProduct } from "./paperProducts";

export const PLASTIC_PRODUCTS: CatalogueProduct[] = [
  {
    slug: "pet-cups",
    title: "PET Cups",
    description: "Clear PET cups from 6 oz to 24 oz, supplied in cases of 1000.",
    image: "/assets/product/plastic/pet-cups.webp",
    alt: "Clear PET cups in six sizes",
    page: 23,
    tables: [
      {
        title: "PET Cups",
        columns: ["Size", "Case Pack", "CBM/Case"],
        rows: [
          ["6 oz", "1000", "0.042"],
          ["8 oz", "1000", "0.046"],
          ["9 oz", "1000", "N/A"],
          ["10 oz", "1000", "0.054"],
          ["12 oz", "1000", "0.06"],
          ["16 oz", "1000", "0.07"],
          ["20 oz", "1000", "0.089"],
          ["24 oz", "1000", "0.091"],
        ],
      },
    ],
  },
];

export const BAGASSE_PRODUCTS: CatalogueProduct[] = [
  {
    slug: "plates-trays",
    title: "Plates & Trays",
    description: "Molded fiber round plates from 6 in to 12 in, along with compartment plates and rectangular trays.",
    image: "/assets/product/bagasse/plates-trays.webp",
    alt: "Molded fiber bagasse compartment trays and round plates",
    page: 31,
    tables: [
      {
        title: "Plates & Trays",
        columns: ["Size", "Case Pack", "Case Weight (lbs)", "CBM/Case"],
        rows: [
          ['6" Round Plate', "2000", "28.66", "0.0540"],
          ['7" Round Plate', "1500", "35.27", "0.0579"],
          ['9" Round Plate', "500", "19.84", "0.0383"],
          ['9" 3 Compartment Round Plate', "500", "19.84", "0.0383"],
          ['10" Round Plate', "500", "26.46", "0.0414"],
          ['10" Round 3 Compartment Plate', "500", "26.46", "0.0579"],
          ['11" 4 Compartment Plate', "500", "29.76", "0.0609"],
          ['12" Round Plate', "500", "37.48", "0.0728"],
          ['12" 4 CP Round Plate', "500", "35.27", "0.0832"],
          ["3 Compartment Rectangular Tray", "500", "30.86", "0.0832"],
          ["5 Compartment Rectangular Tray", "500", "30.86", "0.0620"],
          ["5 Compartment Rectangular Tray (Deep)", "300", "33.07", "0.0679"],
        ],
      },
    ],
  },
];

export const ALUMINUM_PRODUCTS: CatalogueProduct[] = [
  {
    slug: "aluminum-foil-rolls",
    title: "Aluminum Foil Rolls",
    description: "Aluminum foil rolls in 12 in and 18 in widths, from 20 sq ft up to 1000 sq ft.",
    image: "/assets/product/aluminum/aluminum-foil-rolls.webp",
    alt: "Aluminum foil roll partly unrolled",
    page: 34,
    tables: [
      {
        title: "Aluminum Foil Rolls",
        columns: ["Size", "Case Pack"],
        rows: [
          ['12" x 20 sqft', "48"],
          ['12" x 25 sqft', "24"],
          ['12" x 50 sqft HD', "24"],
          ['12" x 50 sqft EHD', "24"],
          ['12" x 75 sqft', "24"],
          ['12" x 75 sqft EHD', "24"],
          ['12" x 150 sqft', "24"],
          ['12" x 200 sqft EHD', "12"],
          ['18" x 37.5 sqft', "24"],
          ['18" x 150 sqft', "48"],
          ['12" x 500 sqft', "1"],
          ['12" x 1000 sqft', "1"],
          ['18" x 500 sqft', "1"],
          ['18" x 1000 sqft', "1"],
        ],
      },
    ],
  },
];
