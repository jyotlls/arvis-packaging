/* Knowledge-hub articles: listed on the homepage and /blog, each with its own page at /blog/[slug].
   Article bodies are DRAFT copy (general guidance, no figures) — review or replace before launch. */

/* h2 = section, h3 = sub-point inside the section above it */
export type Block = { type: "p" | "h2" | "h3"; text: string };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  iso: string;
  image: string;
  alt: string;
  content: Block[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "paper-vs-plastic-vs-bagasse",
    title: "Paper vs Plastic vs Bagasse: Choosing the Right Packaging",
    category: "Materials",
    excerpt:
      "Each material solves a different problem. Here is how to match paper, plastic and bagasse packaging to the product, the journey and the customer.",
    date: "28 August 2026",
    iso: "2026-08-28",
    image: "/assets/blog/blog-1.webp",
    alt: "Kraft paper bags, a bottle and molded fiber food containers",
    content: [
      { type: "p", text: "There is no single best packaging material. Paper, plastic and bagasse each perform well in different situations, and the right choice depends on what you are packing, how far it travels and how your customers will use it." },
      { type: "h2", text: "Start with the product" },
      { type: "p", text: "Begin by listing what the packaging has to do: hold liquid or grease, survive heat, stack in transport, stay sealed, or simply look good on a shelf. The answers quickly narrow the options." },
      { type: "p", text: "Hot, oily or saucy food needs grease and moisture resistance. Products that must stay visible suit clear plastic. Dry goods and carry-out items often work well in paper. Single-use food service is a natural fit for molded fiber (bagasse)." },
      { type: "h2", text: "Where each material fits" },
      { type: "h3", text: "Paper" },
      { type: "p", text: "Paper is versatile and easy to print, which makes it popular for bags, wraps, cups and boxes that carry a brand." },
      { type: "h3", text: "Plastic" },
      { type: "p", text: "Plastic offers clarity, strong seals and moisture protection for deli, soup and cold-chain applications." },
      { type: "h3", text: "Bagasse (molded fiber)" },
      { type: "p", text: "Bagasse, made from sugarcane fiber, is used for plates, bowls, trays and clamshells in food service." },
      { type: "h2", text: "Think about the whole journey" },
      { type: "p", text: "Consider storage, stacking, transport and how the packaging will be disposed of in your market. Local recycling and composting options can differ, so check what applies where your customers are." },
      { type: "h2", text: "Mixing materials in one order" },
      { type: "p", text: "Most businesses need more than one material. Sourcing paper, plastic, bagasse and aluminum together keeps specifications consistent and lets products ship in the same consolidated order." },
    ],
  },
  {
    slug: "bagasse-packaging-sustainable-food-service",
    title: "How Bagasse Packaging Supports Sustainable Food Service",
    category: "Sustainability",
    excerpt:
      "Molded fiber made from sugarcane bagasse gives restaurants and caterers a practical plant-based option for plates, bowls, trays and clamshells.",
    date: "14 August 2026",
    iso: "2026-08-14",
    image: "/assets/blog/blog-2.webp",
    alt: "Molded fiber bagasse clamshells and bowls with fresh food and sugarcane",
    content: [
      { type: "p", text: "Bagasse is the fiber that remains after sugarcane is processed. Molded into plates, bowls, trays and clamshells, it gives food businesses a plant-based alternative for single-use service ware." },
      { type: "h2", text: "What bagasse is good at" },
      { type: "p", text: "Holding hot and cold meals for service and takeaway. A sturdy, natural look that suits fresh food. A wide range of formats, from plates to hinged containers. Pairing with matching lids for bowls and cups." },
      { type: "h2", text: "Choosing the right format" },
      { type: "p", text: "Match the container to the menu, and check sizes against your portions before ordering at scale." },
      { type: "h3", text: "Compartment trays" },
      { type: "p", text: "Compartment trays keep dishes separate on a single plate." },
      { type: "h3", text: "Deep bowls" },
      { type: "p", text: "Deep bowls suit soups, rice and saucy dishes." },
      { type: "h3", text: "Clamshells" },
      { type: "p", text: "Clamshells close securely, which makes them a good fit for takeaway and delivery." },
      { type: "h2", text: "Disposal and end of life" },
      { type: "p", text: "Bagasse is suitable for composting where facilities accept it. Because local rules vary, confirm the options in your market and tell customers how to dispose of the packaging correctly." },
      { type: "h2", text: "Building it into your range" },
      { type: "p", text: "Many caterers combine bagasse with paper bags and cups or aluminum containers for specific dishes. Sourcing them together keeps the look consistent and simplifies ordering." },
    ],
  },
  {
    slug: "packaging-consolidation-global-sourcing",
    title: "How Packaging Consolidation Simplifies Global Sourcing",
    category: "Sourcing",
    excerpt:
      "Buying many packaging products from one coordinated source reduces suppliers, shipments and storage headaches for international buyers.",
    date: "30 July 2026",
    iso: "2026-07-30",
    image: "/assets/blog/blog-3.webp",
    alt: "Stacked shipping cartons in a warehouse with a world map behind",
    content: [
      { type: "p", text: "International buyers often manage separate suppliers for bags, cups, containers and foil. Each one brings its own shipment, paperwork and storage. Consolidation brings those products together into one coordinated order." },
      { type: "h2", text: "What consolidation means" },
      { type: "p", text: "Instead of receiving many partial shipments, required products are gathered and shipped together. Arvis Packaging works this way: a collective of manufacturers in India pooling capabilities so a wide range of products can be shipped together." },
      { type: "h2", text: "Why it helps" },
      { type: "h3", text: "Fewer suppliers to manage" },
      { type: "p", text: "One coordinated order replaces many separate suppliers and points of contact." },
      { type: "h3", text: "Better use of container space" },
      { type: "p", text: "Mixed products can be planned together so containers are used efficiently." },
      { type: "h3", text: "Simpler receiving and storage" },
      { type: "p", text: "Fewer deliveries make receiving, storage and stock planning easier, with consistent specifications across the range." },
      { type: "h2", text: "Planning a consolidated order" },
      { type: "p", text: "Share product types, quantities, customization needs and timelines up front. That allows product selection, quality checks and consolidation to be coordinated before shipping." },
      { type: "h2", text: "Warehousing and distribution" },
      { type: "p", text: "Warehousing support in Mundra, India and Brunswick, NJ, USA helps bridge production and delivery, so products can be stored and distributed as needed." },
    ],
  },
  {
    slug: "food-packaging-takeaway-delivery",
    title: "Choosing the Right Food Packaging for Takeaway & Delivery",
    category: "Food Packaging",
    excerpt:
      "Delivery packaging has to protect food, travel well and still look good on arrival. Use these checks to choose containers that work.",
    date: "14 August 2026",
    iso: "2026-08-14",
    image: "/assets/blog/blog-4.webp",
    alt: "Delivery rider handing over a kraft paper bag and pizza box",
    content: [
      { type: "p", text: "Takeaway and delivery put packaging under pressure. Food has to stay hot or cold, sealed and presentable from the kitchen to the customer's door." },
      { type: "h2", text: "Protect the food" },
      { type: "p", text: "Use leak-resistant containers and secure lids for sauces and soups. Choose grease-resistant materials for fried and oily food. Separate wet and dry items so nothing goes soggy. Match container size to portion to stop food shifting." },
      { type: "h2", text: "Keep temperature in mind" },
      { type: "h3", text: "Hot meals" },
      { type: "p", text: "Hot meals need containers that handle heat and, where needed, venting to avoid condensation." },
      { type: "h3", text: "Cold food and drinks" },
      { type: "p", text: "Cold desserts and drinks need tight seals to stay fresh and spill-free." },
      { type: "h3", text: "Choosing the material" },
      { type: "p", text: "Aluminum containers suit many oven-ready and hot dishes, while plastic and paper options cover deli, salads and drinks." },
      { type: "h2", text: "Make it easy to carry" },
      { type: "p", text: "Sturdy carry bags, cup holders and stackable containers make orders easier for riders and customers. Consistent sizes also speed up packing in the kitchen." },
      { type: "h2", text: "Let the packaging carry your brand" },
      { type: "p", text: "Printed bags and boxes turn every delivery into brand exposure. Custom sizes, finishes and handles can be specified to suit your menu and identity." },
    ],
  },
];

/* helpers */
export const slugify = (text: string) =>
  text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const readingMinutes = (post: Insight) => {
  const words = post.content
    .map((b) => b.text)
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

export const getInsight = (slug: string) => INSIGHTS.find((p) => p.slug === slug);
