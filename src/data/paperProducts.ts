export type SpecTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type CatalogueProduct = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  /* first page of this product in the catalogue PDF */
  page: number;
  /* specs as printed in the catalogue */
  tables: SpecTable[];
  /* made-to-order products list their options instead of size tables */
  options?: { label: string; value: string }[];
  note?: string;
};

const image = (name: string) => `/assets/product/paper/${name}.webp`;

const FULL = ["Size", "Case Pack", "Case Weight (lbs)", "CBM/Case"];
const NO_WEIGHT = ["Size", "Case Pack", "CBM/Case"];
const SIZE_PACK = ["Size (in)", "Case Pack"];
const STRAW = ["Size (Dia x Length)", "Case Pack", "Case Weight (lbs)", "CBM/Case"];

const PAPER_STRAW_ROWS = [
  ["6mm x 197mm", "10000", "24.47", "0.095"],
  ["8mm x 197mm", "6000", "24.8", "0.095"],
  ["10mm x 197mm", "4000", "20.28", "0.095"],
];

export const PAPER_PRODUCTS: CatalogueProduct[] = [
  {
    slug: "handle-paper-bags",
    title: "Handle Paper Bags - Twisted / Flat / Die Cut",
    description: "Paper carry bags with twisted handles, flat handles or a die-cut grip, in plain kraft or printed.",
    image: image("handle-paper-bags"),
    alt: "Kraft and printed paper bags with handles",
    page: 6,
    tables: [
      {
        title: "Handle Paper Bags - Twisted / Flat / Die Cut",
        columns: FULL,
        rows: [
          ["8 x 4.75 x 10.5", "250", "17.81", "0.0368"],
          ["16 x 6 x 12", "250", "32.77", "0.08"],
          ["10 x 6.75 x 12", "250", "25.44", "0.0504"],
          ["13 x 7 x 13", "250", "32.78", "0.0692"],
          ["10 x 5 x 13", "250", "23.3", "0.0535"],
          ["9 x 5.75 x 13.50", "250", "25.09", "0.0498"],
          ["14 x 8 x 14.63", "250", "40.76", "0.0816"],
          ["14 x 10 x 15.75", "250", "50.4", "0.0866"],
          ["16 x 6 x 15.75", "250", "40.16", "0.0986"],
          ["13 x 6 x 15.75", "250", "34.38", "0.0804"],
          ["12 x 9 x 15.75", "250", "42.28", "0.0744"],
          ["13 x 7 x 17", "250", "40.27", "0.0855"],
          ["16 x 6 x 19.25", "250", "46.06", "0.116"],
        ],
      },
    ],
  },
  {
    slug: "sos-paper-bags",
    title: "SOS Paper Bags",
    description: "SOS bags in kraft and white, from #1 up to 1/4 BL.",
    image: image("sos-paper-bags"),
    alt: "Kraft SOS paper bags arranged by size",
    page: 7,
    tables: [
      {
        title: "SOS Paper Bags",
        columns: FULL,
        rows: [
          ["#1 - 3.5 x 2.375 x 6.875", "1000", "5.59", "0.0066"],
          ["#2 - 4.063 x 2.625 x 7.875", "1000", "6.78", "0.0087"],
          ["#3 - 4.75 x 2.938 x 8.563", "1000", "8.34", "0.011"],
          ["#4 - 5 x 3.25 x 9.75", "1000", "9.8", "0.0131"],
          ["#5 - 5.25 x 3.438 x 10.938", "1000", "11.53", "0.0153"],
          ["#6 - 6 x 3.625 x 11", "1000", "12.92", "0.0176"],
          ["#8 - 6.125 x 4 x 12.375", "1000", "14.82", "0.0202"],
          ["#10 - 6.313 x 4.125 x 13.375", "500", "15.89", "0.0224"],
          ["#12 - 7.125 x 4.5 x 13.75", "500", "20.87", "0.026"],
          ["#16 - 7.75 x 4.75 x 16", "500", "25.41", "0.0328"],
          ["#20 - 8.25 x 5.313 x 16.125", "500", "28.04", "0.0353"],
          ["#25 - 8.25 x 5.25 x 18", "500", "29.96", "0.0393"],
          ["#20(SH) - 8.25 x 5.938 x 13.375", "300", "25.55", "0.0293"],
          ["#25(SH) - 8.25 x 6.125 x 15.875", "300", "29.47", "0.0347"],
          ["#1/6BL - 12 x 7 x 17", "300", "30.91", "0.0325"],
          ["#QUART - 4.5 x 2.5 x 16", "500", "12.14", "0.0192"],
          ["#1/4BL - 12 x 7 x 21.75", "300", "46.06", "0.0518"],
        ],
      },
    ],
  },
  {
    slug: "v-bottom-paper-bags",
    title: "V Bottom Paper Bag",
    description: "Slim V-bottom bags, shown here in kraft and white with a clear window.",
    image: image("v-bottom-paper-bags"),
    alt: "Kraft and white V bottom paper bags with a clear window",
    page: 8,
    tables: [
      {
        title: "V Bottom Paper Bags",
        columns: NO_WEIGHT,
        rows: [
          ["3.50 x 1.50 x 8.50", "1000", "0.06314"],
          ["4.00 x 2.00 x 10.00", "1000", "0.01614"],
          ["5.00 x 1.75 x 8.00", "1000", "0.0203"],
          ["5.25 x 3.50 x 12.00", "1000", "0.03737"],
          ["6.00 x 0.75 x 6.50", "1000", "0.0121"],
          ["6.00 x 4.75 x 14.00", "500", "0.0288"],
          ["7.50 x 2.00 x 11.00", "250", "0.03709"],
          ["8.50 x 3.50 x 14.00", "1000", "0.04445"],
        ],
      },
    ],
  },
  {
    slug: "e-commerce-bags",
    title: "E-commerce Bags - Paper & Poly Mailers",
    description: "Paper and poly mailers, plus self-seal stay-flat mailers in kraft or white.",
    image: image("e-commerce-bags"),
    alt: "Kraft stay-flat mailers and a white poly mailer",
    page: 9,
    tables: [
      {
        title: "Paper Mailers, Poly Mailers & Self-Seal Stay Flat Mailers (Kraft / White)",
        columns: SIZE_PACK,
        rows: [
          ["6 x 6", "200"],
          ["6 x 8", "100"],
          ["7 x 9", "100"],
          ["9 x 11", "100"],
          ["9.75 x 12.25", "100"],
          ["11 x 13.5", "100"],
          ["12.75 x 15", "100"],
          ["13 x 18", "100"],
        ],
      },
    ],
  },
  {
    slug: "bubble-mailers",
    title: "Bubble Mailers",
    description: "Padded mailers in yellow, gold or white, from 4 x 8 in up to 14.25 x 20 in.",
    image: image("bubble-mailers"),
    alt: "Yellow bubble mailers",
    page: 10,
    tables: [
      {
        title: "Bubble Mailers (Yellow / Gold / White)",
        columns: SIZE_PACK,
        rows: [
          ["4 x 8", "500"],
          ["5 x 10", "250"],
          ["6.5 x 10", "250"],
          ["7.25 x 8", "250"],
          ["7.25 x 9.75", "100"],
          ["7.25 x 12", "100"],
          ["8.5 x 12", "100"],
          ["8.5 x 14.5", "100"],
          ["9.5 x 14.5", "100"],
          ["10.5 x 16", "100"],
          ["12.5 x 19", "50"],
          ["14.25 x 20", "50"],
        ],
      },
    ],
  },
  {
    slug: "food-trays",
    title: "Food Trays",
    description: "Open paper trays for serving food, from 4 oz up to 32 oz.",
    image: image("food-trays"),
    alt: "Red and white checked paper food trays",
    page: 11,
    tables: [
      {
        title: "Food Trays",
        columns: NO_WEIGHT,
        rows: [
          ["4 oz", "1000", "0.015"],
          ["6 oz", "1000", "0.022"],
          ["10 oz", "1000", "0.033"],
          ["13 oz", "1000", "0.034"],
          ["23 oz", "500", "0.032"],
          ["32 oz", "500", "0.037"],
        ],
      },
    ],
  },
  {
    slug: "deli-sheets",
    title: "Deli Sheets",
    description: "15 x 15 in deli sheets, plus interfolded sheets in 9 x 10.75 in and 12 x 10.75 in.",
    image: image("deli-sheets"),
    alt: "Printed deli sheets wrapped around a burger and fries",
    page: 11,
    tables: [
      { title: "Deli Sheets", columns: SIZE_PACK, rows: [["15 x 15", "2000"]] },
      {
        title: "Interfolded Deli Sheets",
        columns: SIZE_PACK,
        rows: [
          ['9" x 10.75"', "6000"],
          ['12" x 10.75"', "6000"],
        ],
      },
    ],
  },
  {
    slug: "paper-tableware",
    title: "Paper Tableware",
    description: "Paper plates from 6 in to 10 in, along with a 12 in bowl.",
    image: image("paper-tableware"),
    alt: "Plain and printed paper plates and bowls",
    page: 12,
    tables: [
      {
        title: "Paper Tableware",
        columns: FULL,
        rows: [
          ['6" Plates', "1000", "14", "0.03"],
          ['7" Plates', "1000", "15.6", "0.03"],
          ['8.5" Plates', "500", "15.5", "0.027"],
          ['9" Plates', "500", "17.1", "0.029"],
          ['10" Plates', "500", "23.9", "0.045"],
          ['12" Bowl', "1000", "22.2", "0.037"],
        ],
      },
    ],
  },
  {
    slug: "paper-cutlery",
    title: "Paper Cutlery",
    description: "960 gsm paper table spoons, forks, knives and dessert spoons.",
    image: image("paper-cutlery"),
    alt: "Paper cutlery sets in kraft sleeves",
    page: 12,
    tables: [
      {
        title: "Paper Cutlery",
        columns: FULL,
        rows: [
          ["Paper Table Spoon (960 gsm)", "2000", "17.416", "0.019"],
          ["Paper Fork (960 gsm)", "2000", "17.416", "0.019"],
          ["Paper Knife (960 gsm)", "2000", "16.535", "0.019"],
          ["Paper Dessert Spoon (960 gsm)", "5000", "22.046", "0.019"],
        ],
      },
    ],
  },
  {
    slug: "cups-lids",
    title: "Cups & Lids",
    description: "Single wall, double wall and ripple wall cups from 4 oz to 32 oz, with kraft sleeves and sipper lids.",
    image: image("cups-lids"),
    alt: "Paper cups with white sipper lids",
    page: 13,
    note: "Also available: aqueous coating for all cups.",
    tables: [
      {
        title: "Single Wall Cups",
        columns: FULL,
        rows: [
          ["4 oz", "1000", "7.054", "0.0274625"],
          ["5 oz", "1000", "7.93", "0.029739625"],
          ["7 oz", "1000", "8.81", "0.036164096"],
          ["8 oz", "1000", "18.29", "0.05840942"],
          ["10 oz", "1000", "23.36", "0.07935764"],
          ["12 oz", "1000", "23.36", "0.08426636"],
          ["16 oz", "1000", "31.52", "0.092938432"],
          ["20 oz", "1000", "35.05", "0.09572004"],
          ["22 oz", "1000", "31.04", "0.123624"],
          ["24 oz", "500", "18.63", "0.087514"],
          ["32 oz", "500", "21.61", "0.08672125"],
        ],
      },
      {
        title: "Double Wall Cups",
        columns: FULL,
        rows: [
          ["8 oz", "500", "14.33", "0.0661617"],
          ["10 oz", "500", "17.19", "0.0736308"],
          ["12 oz", "500", "18.29", "0.0777214"],
          ["16 oz", "500", "25.13", "0.09490192"],
          ["20 oz", "500", "27.99", "0.1063556"],
        ],
      },
      {
        title: "Ripple Wall Cups",
        columns: FULL,
        rows: [
          ["4 oz", "1000", "12.56", "0.055566"],
          ["5 oz", "1000", "14.99", "0.06192875"],
          ["7 oz", "1000", "9.7", "0.043524"],
          ["8 oz", "1000", "15.21", "0.05641104"],
          ["10 oz", "1000", "18.29", "0.06448849"],
          ["12 oz", "1000", "20.72", "0.068243516"],
          ["16 oz", "1000", "25.57", "0.087834956"],
          ["20 oz", "1000", "29.1", "0.110365112"],
        ],
      },
      {
        title: "Kraft Cup Sleeve",
        columns: FULL,
        rows: [["10-20 oz Kraft", "1000", "9.7", "0.02180304"]],
      },
      {
        title: "PP Sipper Lids (Black / White)",
        columns: FULL,
        rows: [
          ["80 mm", "1000", "6.61", "0.0425"],
          ["90 mm", "1000", "7.71", "0.0505"],
        ],
      },
      {
        title: "PS Lockable Sipper Lids (Black / White)",
        columns: FULL,
        rows: [
          ["80 mm", "1000", "6.61", "0.0392084"],
          ["90 mm", "1000", "7.71", "0.04811672"],
        ],
      },
    ],
  },
  {
    slug: "paper-containers-lids",
    title: "Paper Containers & Lids",
    description: "Round paper containers from 8 oz to 32 oz, with 90 mm, 97 mm and 115 mm paper lids.",
    image: image("paper-containers-lids"),
    alt: "White paper container of food with its paper lid",
    page: 16,
    tables: [
      {
        title: "Paper Containers",
        columns: NO_WEIGHT,
        rows: [
          ["8 oz", "500", "0.038"],
          ["12 oz", "500", "0.052"],
          ["16 oz", "500", "0.059"],
          ["26 oz", "500", "0.087"],
          ["32 oz", "500", "0.093"],
        ],
      },
      {
        title: "Paper Lids",
        columns: NO_WEIGHT,
        rows: [
          ["90 mm", "500", "0.074"],
          ["97 mm", "500", "0.088"],
          ["115 mm", "500", "0.122"],
        ],
      },
    ],
  },
  {
    slug: "salad-bowls-lids",
    title: "Salad Bowls & Lids",
    description: "Kraft salad bowls from 500 ml to 1500 ml, with 150 mm and 185 mm PET lids.",
    image: image("salad-bowls-lids"),
    alt: "Kraft paper salad bowls filled with salad",
    page: 17,
    tables: [
      {
        title: "Salad Bowls",
        columns: NO_WEIGHT,
        rows: [
          ["16.9 oz (500ml)", "300", "0.067"],
          ["25.35 oz (750ml)", "300", "0.068"],
          ["33.8 oz (1000ml)", "300", "0.082"],
          ["37.2 oz (1100ml)", "300", "0.083"],
          ["43.95 oz (1300ml)", "300", "0.122"],
          ["50.72 oz (1500ml)", "300", "0.141"],
        ],
      },
      {
        title: "Salad Bowl Lids (PET)",
        columns: NO_WEIGHT,
        rows: [
          ["150 mm", "300", "0.039"],
          ["185 mm", "300", "0.047"],
        ],
      },
    ],
  },
  {
    slug: "double-flap-containers",
    title: "Double Flap Take Out Containers",
    description: "Fold-top takeaway containers in kraft and white, from 500 ml to 3000 ml.",
    image: image("double-flap-containers"),
    alt: "Kraft double flap take out containers",
    page: 18,
    tables: [
      {
        title: "Double Flap Take Out Containers",
        columns: NO_WEIGHT,
        rows: [
          ["16.9oz (500ml)", "200", "0.031"],
          ["23.65oz (700ml)", "200", "0.054"],
          ["25.36oz (750ml)", "200", "0.052"],
          ["27.05oz (800ml)", "200", "0.038"],
          ["33.8oz (1000ml)", "200", "0.055"],
          ["40.57oz (1200ml)", "200", "0.06"],
          ["47.34oz (1400ml)", "200", "0.091"],
          ["50.72oz (1500ml)", "200", "0.073"],
          ["67.62oz (2000ml)", "200", "0.093"],
          ["91.3oz (2700ml)", "100", "0.141"],
          ["101.44oz (3000ml)", "150", "0.087"],
        ],
      },
    ],
  },
  {
    slug: "pizza-boxes",
    title: "Pizza Boxes",
    description: "Pizza boxes from 8 in to 18 in, supplied in bundles of 50.",
    image: image("pizza-boxes"),
    alt: "Stacks of printed and white pizza boxes",
    page: 19,
    tables: [
      {
        title: "Pizza Boxes",
        columns: ["Product Size", "Pcs / Bundle", "Case Weight (lbs)"],
        rows: [
          ['8" Pizza Box', "50", "7.50"],
          ['9" Pizza Box', "50", "9.04"],
          ['10" Pizza Box', "50", "9.81"],
          ['12" Pizza Box', "50", "13.23"],
          ['13" Pizza Box', "50", "16.05"],
          ['14" Pizza Box', "50", "17.06"],
          ['16" Pizza Box', "50", "23.70"],
          ['18" Pizza Box', "50", "28.66"],
        ],
      },
    ],
  },
  {
    slug: "straws",
    title: "Straws - PLA & Paper",
    description: "PLA straws, plus paper straws in white, black or printed, single wrapped or foil.",
    image: image("straws"),
    alt: "White, printed and black paper straws",
    page: 19,
    tables: [
      {
        title: "PLA Straws",
        columns: NO_WEIGHT,
        rows: [
          ["6 mm x 8 inch", "10000", "0.0873"],
          ["8 mm x 8 inch", "10000", "0.1417"],
          ["8 mm x 10 inch", "5000", "0.195"],
          ["10 mm x 8 inch", "5000", "0.1354"],
          ["10 mm x 10 inch", "5000", "0.1521"],
          ["12 mm x 8 inch", "5000", "0.1896"],
        ],
      },
      { title: "Paper Straws (White / Black / Printed)", columns: STRAW, rows: PAPER_STRAW_ROWS },
      { title: "Single Wrapped Paper Straws", columns: STRAW, rows: PAPER_STRAW_ROWS },
      { title: "Foil Paper Straws", columns: STRAW, rows: PAPER_STRAW_ROWS },
    ],
  },
  {
    slug: "bespoke-premium-bags",
    title: "Bespoke Premium Bags",
    description:
      "We make premium bags where each detail is customized to your preferences. Right from the print to the handle, reflecting your brand in the best way.",
    image: image("bespoke-premium-bags"),
    alt: "Custom printed premium paper bags with rope and ribbon handles",
    page: 21,
    tables: [],
    options: [
      { label: "Paper & Print", value: "Regular, Glossy, Matte, Laminated, Foil Printed" },
      { label: "Handles", value: "Paper, Ribbons, Cotton Rope, Paper Rope" },
    ],
  },
  {
    slug: "bespoke-paper-board-boxes",
    title: "Bespoke Paper Board Boxes",
    description:
      "We make boxes that balance design and functionality exactly the way your brand needs. Right from food to retail products, the structure and finish can be tailored to meet all your requirements.",
    image: image("bespoke-paper-board-boxes"),
    alt: "Custom printed paper board food and retail boxes",
    page: 22,
    tables: [],
    options: [
      {
        label: "Types",
        value: "Burger Boxes, Fries Cups, Pizza Slice Boxes, Bakery Boxes with Window, Gift Boxes, Retail Packaging Magnetic Boxes",
      },
    ],
  },
];

export const getPaperProduct = (slug: string) => PAPER_PRODUCTS.find((product) => product.slug === slug);
