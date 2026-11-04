import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { GeometryCollection, Topology } from "topojson-specification";
import world from "world-atlas/countries-110m.json";
import { MARKETS, ORIGIN } from "../../data/markets";

const W = 1000;
const H = 620;

type Props = { name: string };

type WorldMapProps = {
  /* ISO code of the market to light up; the other markets fade back */
  active?: string | null;
};

/* World map drawn as plain SVG (no map library in the browser, no watermark):
   grey countries, markets in navy, India in gold. Hover shows the country name. */
export default function WorldMap({ active = null }: WorldMapProps) {
  const topo = world as unknown as Topology<{ countries: GeometryCollection<Props> }>;
  const countries = (feature(topo, topo.objects.countries) as FeatureCollection<Geometry, Props>).features.filter(
    (f) => f.id !== "010", // Antarctica
  );

  // centre on 11.5°E so the map's edge falls in the Bering Strait instead of cutting through Russia
  const projection = geoMercator().rotate([-11.5, 0]).fitExtent(
    [
      [4, 4],
      [W - 4, H - 4],
    ],
    { type: "FeatureCollection", features: countries },
  );
  const path = geoPath(projection);
  const markets = new Set(MARKETS.map((m) => m.iso));

  return (
    <svg className={`ex-wmap${active ? " has-active" : ""}`} viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="ex-wmap-title">
      <title id="ex-wmap-title">
        {`World map highlighting India and the markets Arvis supplies: ${MARKETS.map((m) => m.name).join(", ")}`}
      </title>
      {countries.map((c) => {
        const id = String(c.id);
        const kind = id === ORIGIN.iso ? "origin" : markets.has(id) ? "market" : "land";
        return (
          <path
            key={`${id}-${c.properties.name}`}
            d={path(c) ?? ""}
            className={`ex-wc ex-wc--${kind}${id === active ? " is-active" : ""}`}
          >
            <title>{c.properties.name}</title>
          </path>
        );
      })}
    </svg>
  );
}
