import { MapPin, ExternalLink } from "lucide-react";

const LOCATIONS = [
  {
    name: "Star of the Sea",
    address: "1135 Westwood Avenue, Norfolk, VA 23510",
    website: "https://www.staroftheaschoolnorfolk.org/",
  },
  {
    name: "St. Patrick Catholic School\nSaturday, January 10",
    address: "1000 Bolling Avenue, Norfolk, VA 23508",
    website: "https://www.stpcs.org/",
  },
  {
    name: "St. Matthew's School",
    address: "2619 Buckingham Avenue, Virginia Beach, VA 23455",
    website: "https://smsvb.net/",
  },
  {
    name: "Saturday, February 21\nSt. Gregory the Great",
    address: "1700 Beach Road, Virginia Beach, VA 23451",
    website: "https://www.stgregorythegreatchurch.org/",
  },
];

export default function GameLocations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <MapPin className="size-8 text-green-600 animate-pulse" />
        <h2 className="text-3xl font-bold text-slate-900">Game Locations</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {LOCATIONS.map((loc, idx) => (
          <div
            key={loc.name}
            className="group rounded-2xl bg-gradient-to-br from-white to-green-50 p-6 shadow-md ring-1 ring-green-200/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:ring-green-400 overflow-hidden relative"
            style={{ animation: `fadeInUp 0.6s ease-out ${0.1 * idx}s both` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/0 via-green-300/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-3 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                  <MapPin className="size-5 text-green-600" />
                </div>
                <h3 className="whitespace-pre-line text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-green-700 flex-1">
                  {loc.name}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4 ml-12">{loc.address}</p>
              <div className="mt-5 space-y-3 flex flex-col ml-12">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    loc.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-green-700 font-semibold hover:text-green-900 transition-all duration-300"
                >
                  <div className="p-1 rounded bg-green-100 group-hover/link:bg-green-200 transition-colors">
                    <MapPin className="size-4 transition-transform duration-300 group-hover/link:scale-110" />
                  </div>
                  Open in Maps
                  <div className="w-2 h-0.5 bg-green-700 group-hover/link:w-4 transition-all duration-300" />
                </a>

                <a
                  href={loc.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm text-green-700 font-semibold hover:text-green-900 transition-all duration-300"
                >
                  <div className="p-1 rounded bg-green-100 group-hover/link:bg-green-200 transition-colors">
                    <ExternalLink className="size-4 transition-transform duration-300 group-hover/link:scale-110" />
                  </div>
                  Visit Website
                  <div className="w-2 h-0.5 bg-green-700 group-hover/link:w-4 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
