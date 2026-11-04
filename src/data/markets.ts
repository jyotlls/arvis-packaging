/* Markets Arvis supplies: drives the market cards and the highlighted countries on the map.
   To add a market: add its 2-letter code (flag file name in /public/assets/flags), short and full name,
   ISO 3166-1 numeric code (finds the country shape on the map) and [longitude, latitude] for its pin. */
export type Market = { code: string; name: string; fullName: string; iso: string; at: [number, number] };

export const MARKETS: Market[] = [
  { code: "us", name: "USA", fullName: "United States", iso: "840", at: [-98, 39] },
  { code: "gb", name: "UK", fullName: "United Kingdom", iso: "826", at: [-2, 53] },
  { code: "ae", name: "UAE", fullName: "United Arab Emirates", iso: "784", at: [54, 24] },
];

/* Where the products are made and shipped from */
export const ORIGIN = { code: "in", name: "India", iso: "356", at: [79, 22] as [number, number] };
