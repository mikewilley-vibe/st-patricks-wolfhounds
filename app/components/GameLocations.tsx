import { MapPin, ExternalLink } from "lucide-react";

const LOCATIONS = [
  {
    name: "Veritas\nSchool",
    address: "3400 Brook Road, Richmond, VA 23227",
    website: "https://www.veritasschool.com/",
  },
  {
    name: "Benedictine\nSchools",
    address: "12829 River Road, Richmond, VA 23238",
    website: "https://www.benedictineschools.org/",
  },
  {
    name: "Our Lady of Lourdes",
    address: "8200 Woodman Road, Richmond, VA 23228",
    website: "https://lourdesrva.org/",
  },
];

export default function GameLocations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <MapPin className="size-7 text-purple-600" />
        <h2 className="text-2xl font-semibold">Game Locations</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {LOCATIONS.map((loc, idx) => (
          <div
            key={loc.name}
            className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:ring-purple-300"
            style={{ animation: `fade-in-up 0.6s ease-out ${0.1 * idx}s both` }}
          >
            <h3 className="whitespace-pre-line text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-purple-700">
              {loc.name}
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{loc.address}</p>

            <div className="mt-4 space-y-2 flex flex-col">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  loc.address
                )}`}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-slate-700 transition-all duration-300 hover:text-purple-700 hover:gap-3 font-medium"
              >
                <MapPin className="size-4 transition-transform duration-300 group-hover:scale-110" />
                Open in Maps
              </a>

              <a
                href={loc.website}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-purple-700 transition-all duration-300 hover:text-purple-900 hover:gap-3 font-medium"
              >
                Visit website
                <ExternalLink className="size-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}