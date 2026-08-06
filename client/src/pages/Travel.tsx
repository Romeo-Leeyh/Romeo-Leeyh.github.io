import { Sidebar } from "@/components/Sidebar";
import {
  travelPlaces,
  visitedCountryIds,
  type TravelPlace,
} from "@/lib/travelData";
import { cn } from "@/lib/utils";
import { Archive, Camera, ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { useRef, useState } from "react";
import austriaFlag from "flag-icons/flags/4x3/at.svg";
import australiaFlag from "flag-icons/flags/4x3/au.svg";
import botswanaFlag from "flag-icons/flags/4x3/bw.svg";
import chinaFlag from "flag-icons/flags/4x3/cn.svg";
import czechiaFlag from "flag-icons/flags/4x3/cz.svg";
import germanyFlag from "flag-icons/flags/4x3/de.svg";
import hungaryFlag from "flag-icons/flags/4x3/hu.svg";
import indonesiaFlag from "flag-icons/flags/4x3/id.svg";
import japanFlag from "flag-icons/flags/4x3/jp.svg";
import malaysiaFlag from "flag-icons/flags/4x3/my.svg";
import mexicoFlag from "flag-icons/flags/4x3/mx.svg";
import mozambiqueFlag from "flag-icons/flags/4x3/mz.svg";
import netherlandsFlag from "flag-icons/flags/4x3/nl.svg";
import unitedArabEmiratesFlag from "flag-icons/flags/4x3/ae.svg";
import unitedStatesFlag from "flag-icons/flags/4x3/us.svg";
import uzbekistanFlag from "flag-icons/flags/4x3/uz.svg";
import vietnamFlag from "flag-icons/flags/4x3/vn.svg";
import zambiaFlag from "flag-icons/flags/4x3/zm.svg";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const mapUrl = "/maps/countries-110m.json";

interface CountryCollection {
  countryId: string;
  countryCode: string;
  flag: string;
  continent: string;
  country: string;
  places: TravelPlace[];
  photoCount: number;
  cover?: string;
}

const countryCodeById: Record<string, string> = {
  "040": "at",
  "036": "au",
  "072": "bw",
  "156": "cn",
  "203": "cz",
  "276": "de",
  "348": "hu",
  "360": "id",
  "392": "jp",
  "458": "my",
  "484": "mx",
  "508": "mz",
  "528": "nl",
  "704": "vn",
  "784": "ae",
  "840": "us",
  "860": "uz",
  "894": "zm",
};

const countryFlagById: Record<string, string> = {
  "040": austriaFlag,
  "036": australiaFlag,
  "072": botswanaFlag,
  "156": chinaFlag,
  "203": czechiaFlag,
  "276": germanyFlag,
  "348": hungaryFlag,
  "360": indonesiaFlag,
  "392": japanFlag,
  "458": malaysiaFlag,
  "484": mexicoFlag,
  "508": mozambiqueFlag,
  "528": netherlandsFlag,
  "704": vietnamFlag,
  "784": unitedArabEmiratesFlag,
  "840": unitedStatesFlag,
  "860": uzbekistanFlag,
  "894": zambiaFlag,
};

const continentByCountryId: Record<string, string> = {
  "040": "Europe",
  "036": "Oceania",
  "072": "Africa",
  "156": "Asia",
  "203": "Europe",
  "276": "Europe",
  "348": "Europe",
  "360": "Asia",
  "392": "Asia",
  "458": "Asia",
  "484": "North America",
  "508": "Africa",
  "528": "Europe",
  "704": "Asia",
  "784": "Asia",
  "840": "North America",
  "860": "Asia",
  "894": "Africa",
};

const countryCoverById: Record<string, string> = {
  "156": "/images/travel/ulanqab/3.png",
};

const countryCollections = Array.from(
  travelPlaces
    .reduce((collections, place) => {
      const collection = collections.get(place.countryId);
      const countryCover = countryCoverById[place.countryId];

      if (collection) {
        collection.places.push(place);
        collection.photoCount += place.photos.length;
        collection.cover ??= countryCover ?? place.cover ?? place.photos[0];
      } else {
        collections.set(place.countryId, {
          countryId: place.countryId,
          countryCode: countryCodeById[place.countryId],
          flag: countryFlagById[place.countryId],
          continent: continentByCountryId[place.countryId],
          country: place.country,
          places: [place],
          photoCount: place.photos.length,
          cover: countryCover ?? place.cover ?? place.photos[0],
        });
      }

      return collections;
    }, new Map<string, CountryCollection>())
    .values(),
);

const collectionByCountryId = new Map(
  countryCollections.map(collection => [collection.countryId, collection]),
);

const continentCollections = [
  "Asia",
  "Africa",
  "Europe",
  "North America",
  "Oceania",
].map(continent => ({
  continent,
  countries: countryCollections.filter(
    collection => collection.continent === continent,
  ),
}));

const mapGeographyIdsByCountryId: Record<string, string[]> = {
  "156": ["156", "158"],
};

const countryIdByMapGeographyId = Object.fromEntries(
  Object.entries(mapGeographyIdsByCountryId).flatMap(([countryId, geographyIds]) =>
    geographyIds.map(geographyId => [geographyId, countryId]),
  ),
);

function CollectionMap({
  selectedCollection,
  onSelect,
}: {
  selectedCollection: CountryCollection;
  onSelect: (countryId: string) => void;
}) {
  const selectedGeographyIds = new Set(
    mapGeographyIdsByCountryId[selectedCollection.countryId] ?? [selectedCollection.countryId],
  );
  const visitedGeographyIds = new Set(
    Array.from(visitedCountryIds).flatMap(
      countryId => mapGeographyIdsByCountryId[countryId] ?? [countryId],
    ),
  );
  const selectedMarkers = Array.from(
    new Map(
      selectedCollection.places.flatMap(place =>
        place.markers.map(marker => [
          `${marker.label}-${marker.coordinates.join(",")}`,
          marker,
        ]),
      ),
    ).values(),
  );

  return (
    <div className="relative h-[300px] overflow-hidden bg-[#deddd8] md:h-[350px]">
      <ComposableMap
        width={800}
        height={360}
        projectionConfig={{ rotate: [-10, 0, 0], scale: 130 }}
        className="h-full w-full"
        aria-label="Map of countries and places I have visited"
      >
        <Geographies geography={mapUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const geographyId = String(geo.id).padStart(3, "0");
              const countryId = countryIdByMapGeographyId[geographyId] ?? geographyId;
              const isVisited = visitedGeographyIds.has(geographyId);
              const isSelected = selectedGeographyIds.has(geographyId);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (collectionByCountryId.has(countryId)) onSelect(countryId);
                  }}
                  tabIndex={isVisited ? 0 : -1}
                  aria-label={geo.properties.name}
                  style={{
                    default: {
                      fill: isSelected
                        ? "var(--primary)"
                        : isVisited
                          ? "#777872"
                          : "#c4c3be",
                      stroke: "#deddd8",
                      strokeWidth: 0.7,
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
                    },
                    hover: {
                      fill: isVisited ? "var(--primary)" : "#c4c3be",
                      stroke: "#deddd8",
                      strokeWidth: 0.7,
                      outline: "none",
                      cursor: isVisited ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isVisited ? "var(--primary)" : "#c4c3be",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {selectedMarkers.map(marker => (
          <Marker key={marker.label} coordinates={marker.coordinates}>
            <circle r={8} fill="var(--primary)" opacity={0.17} />
            <circle
              r={3.3}
              fill="#f4f2ea"
              stroke="var(--primary)"
              strokeWidth={1.8}
            >
              <title>{marker.label}</title>
            </circle>
            <text
              textAnchor="middle"
              y={-10}
              className="pointer-events-none fill-zinc-900 text-[7px] font-semibold"
            >
              {marker.label}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      <div className="absolute bottom-5 right-5 hidden items-center gap-5 text-[9px] uppercase tracking-[0.12em] text-zinc-600 sm:flex md:bottom-8 md:right-8">
        <span className="flex items-center gap-2">
          <span className="size-2 bg-primary" /> Selected
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2 bg-zinc-500" /> Visited
        </span>
      </div>
    </div>
  );
}

function CountryCover({
  collection,
  index,
  isSelected,
  onSelect,
}: {
  collection: CountryCollection;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group border border-white/8 bg-[#e7e5df] px-3 py-4 text-left transition-colors sm:px-4",
        isSelected
          ? "bg-zinc-900 text-stone-100"
          : "text-zinc-900 hover:bg-[#d9d7d0]",
      )}
      aria-pressed={isSelected}
      aria-label={`Open the ${collection.country} collection`}
    >
      <div className="mb-3 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] opacity-70">
        <span>No. {String(index + 1).padStart(2, "0")}</span>
        <span>{collection.photoCount} photographs</span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-300">
        {collection.cover ? (
          <img
            src={collection.cover}
            alt={`${collection.country} collection cover`}
            className="h-full w-full object-cover saturate-[0.82] sepia-[0.08] transition duration-500 group-hover:scale-[1.025] group-hover:saturate-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#cbc9c1_0_49%,#73736e_49.5%_50.5%,#cbc9c1_51%)]">
            <Archive className="size-7 text-zinc-600" />
          </div>
        )}
        <span
          className={cn(
            "absolute bottom-0 left-0 h-1 transition-all duration-300",
            isSelected
              ? "w-full bg-primary"
              : "w-0 bg-primary group-hover:w-full",
          )}
        />
      </div>

      <p className="mt-3 text-lg font-semibold leading-none">
        {collection.country}
      </p>
      <p
        className={cn(
          "mt-1.5 text-[10px]",
          isSelected ? "text-stone-400" : "text-zinc-500",
        )}
      >
        {collection.places.length} {collection.places.length === 1 ? "location" : "locations"}
      </p>
    </button>
  );
}

export default function Travel() {
  const [selectedCountryId, setSelectedCountryId] = useState(
    countryCollections[0].countryId,
  );
  const [openCountryId, setOpenCountryId] = useState<string | null>(null);
  const [activePlaceId, setActivePlaceId] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const archiveRef = useRef<HTMLElement>(null);
  const selectedCollection =
    collectionByCountryId.get(selectedCountryId) ?? countryCollections[0];
  const activePlace =
    selectedCollection.places.find(place => place.id === activePlaceId) ??
    selectedCollection.places[0];
  const activePhoto = activePlace.photos[activePhotoIndex] ?? activePlace.photos[0];

  const selectCountry = (countryId: string, revealArchive = true) => {
    setSelectedCountryId(countryId);

    const nextCollection = collectionByCountryId.get(countryId);
    if (nextCollection) {
      setActivePlaceId(nextCollection.places[0]?.id ?? null);
      setActivePhotoIndex(0);
    }

    if (revealArchive) {
      setOpenCountryId(countryId);
      requestAnimationFrame(() => {
        archiveRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const closeCollection = () => {
    setOpenCountryId(null);
  };

  const collectionYears = Array.from(
    new Set(selectedCollection.places.map(place => place.period.slice(0, 4))),
  ).join(" / ");
  const selectedCollectionIndex = countryCollections.findIndex(
    item => item.countryId === selectedCountryId,
  );
  const activePlaceIndex = selectedCollection.places.findIndex(
    place => place.id === activePlace.id,
  );
  const isArchiveOpen = openCountryId === selectedCountryId;

  return (
    <div className="min-h-screen bg-[#e7e5df] text-zinc-900 lg:flex">
      <Sidebar />

      <main className="min-w-0 flex-1 lg:ml-[300px]">
        <section className="w-full py-6 xl:py-8">
          <div className="grid overflow-hidden border border-zinc-500/70 xl:grid-cols-[minmax(0,1fr)_500px]">
            <CollectionMap
              selectedCollection={selectedCollection}
              onSelect={countryId => selectCountry(countryId)}
            />

            <div className="hidden h-[350px] overflow-hidden bg-[#deddd8] px-7 py-5 text-zinc-900 xl:block">
              <div className="flex items-end justify-between border-b border-zinc-500/50 pb-3">
                <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                  Visited countries
                </p>
                <p className="text-[9px] text-zinc-500">
                  {String(countryCollections.length).padStart(2, "0")}
                </p>
              </div>

              <div className="mt-3 divide-y divide-zinc-500/50">
                {continentCollections.map(group => (
                  <div
                    key={group.continent}
                    className="grid min-h-[52px] grid-cols-[92px_1fr] items-center gap-3 py-2"
                  >
                    <p className="text-[8px] uppercase tracking-[0.14em] text-zinc-500">
                      {group.continent}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      {group.countries.map(collection => {
                        const isSelected = collection.countryId === selectedCountryId;

                        return (
                          <button
                            type="button"
                            key={collection.countryId}
                            onClick={() => selectCountry(collection.countryId)}
                            title={collection.country}
                            aria-label={`Open the ${collection.country} collection`}
                            aria-pressed={isSelected}
                            className="group"
                          >
                            <img
                              src={collection.flag}
                              alt={`${collection.country} flag`}
                              className={cn(
                                "h-6 w-8 object-cover shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition duration-200 group-hover:brightness-110",
                                isSelected
                                  ? "ring-2 ring-primary ring-offset-2 ring-offset-[#deddd8]"
                                  : "opacity-70 group-hover:opacity-100",
                              )}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={archiveRef}
          aria-label="Country collections"
          className="travel-postcard-wall relative min-h-[calc(100vh-470px)] border-y border-zinc-700/80 px-6 py-8 lg:px-10 xl:px-14"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
            {countryCollections.map((collection, index) => (
              <CountryCover
                key={collection.countryId}
                collection={collection}
                index={index}
                isSelected={selectedCountryId === collection.countryId && isArchiveOpen}
                onSelect={() => selectCountry(collection.countryId)}
              />
            ))}
          </div>

          {isArchiveOpen && (
            <div className="fixed inset-y-0 left-0 right-0 z-40 flex items-center justify-center bg-[linear-gradient(180deg,rgba(92,77,107,0.16),rgba(214,207,198,0.28))] p-4 backdrop-blur-2xl sm:p-6 lg:left-[300px] lg:p-8 xl:p-10">
              <section
                aria-label={`${selectedCollection.country} photographic collection`}
                className="travel-collection-reveal flex w-[min(74vw,700px)] flex-col overflow-hidden rounded-[28px] border border-[rgba(132,116,142,0.26)] bg-[linear-gradient(180deg,rgba(249,246,241,0.94),rgba(232,226,221,0.9))] shadow-[0_28px_90px_rgba(52,45,58,0.18),inset_0_1px_0_rgba(255,255,255,0.65)]"
              >
                <div className="border-b border-[rgba(132,116,142,0.18)] bg-[rgba(255,250,245,0.42)] px-5 py-3 lg:px-7 xl:px-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[8px] uppercase tracking-[0.16em] text-primary/90">
                        Collection / {String(selectedCollectionIndex + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-0.5 text-lg font-semibold leading-none md:text-2xl xl:text-[1.6rem]">
                        {selectedCollection.country}
                      </h2>
                      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[8px] uppercase tracking-[0.08em] text-zinc-600/80">
                        <span>{collectionYears}</span>
                        <span>{selectedCollection.photoCount} images</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={closeCollection}
                      className="rounded-full border border-[rgba(132,116,142,0.22)] bg-white/35 p-1.5 text-zinc-600 transition-colors hover:border-primary hover:text-zinc-900"
                      aria-label="Close collection"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1 border-t border-[rgba(132,116,142,0.14)] pt-2">
                    {selectedCollection.places.map(place => (
                      <button
                        type="button"
                        key={place.id}
                        onClick={() => {
                          setActivePlaceId(place.id);
                          setActivePhotoIndex(0);
                        }}
                        className={cn(
                          "border px-2 py-1 text-left text-[8px] uppercase tracking-[0.08em] transition-colors",
                          activePlace.id === place.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-[rgba(132,116,142,0.18)] bg-white/25 text-zinc-600 hover:border-[rgba(110,96,123,0.42)] hover:bg-white/40 hover:text-zinc-900",
                        )}
                      >
                        {place.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden px-5 py-4 lg:px-7 xl:px-8 xl:py-4">
                  <article key={activePlace.id} className="mx-auto flex w-full max-w-[640px] flex-col">
                    <header className="mb-4 grid gap-3 border-b border-[rgba(132,116,142,0.22)] pb-3 md:grid-cols-[1fr_auto] md:items-end">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.16em] text-zinc-500">
                          Location {String(activePlaceIndex + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 text-xl font-semibold leading-tight md:text-[1.7rem] xl:text-[1.85rem]">
                          {activePlace.label}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[9px] uppercase tracking-[0.1em] text-zinc-600/90 md:justify-end">
                        <span>{activePlace.period}</span>
                        <span className="flex items-center gap-2">
                          <MapPin className="size-3 text-primary" />
                          {activePlace.markers.map(marker => marker.label).join(" / ")}
                        </span>
                        <span className="flex items-center gap-2">
                          <Camera className="size-3 text-primary" />
                          {activePlace.photos.length} photographs
                        </span>
                      </div>
                    </header>

                    {activePlace.photos.length > 0 ? (
                      <div className="mx-auto w-full max-w-[620px]">
                        <div className="mb-3 flex items-center justify-between gap-3 border-b border-[rgba(132,116,142,0.16)] pb-2 text-[9px] uppercase tracking-[0.1em] text-zinc-600/90">
                          <span>
                            Frame {String(activePhotoIndex + 1).padStart(3, "0")} / {String(activePlace.photos.length).padStart(3, "0")}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setActivePhotoIndex(index => Math.max(0, index - 1))
                              }
                              disabled={activePhotoIndex === 0}
                              className="rounded-full border border-[rgba(132,116,142,0.18)] bg-white/35 p-1.5 text-zinc-700 transition-colors hover:border-primary hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-35"
                              aria-label="Previous photograph"
                            >
                              <ChevronLeft className="size-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setActivePhotoIndex(index =>
                                  Math.min(activePlace.photos.length - 1, index + 1),
                                )
                              }
                              disabled={activePhotoIndex === activePlace.photos.length - 1}
                              className="rounded-full border border-[rgba(132,116,142,0.18)] bg-white/35 p-1.5 text-zinc-700 transition-colors hover:border-primary hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-35"
                              aria-label="Next photograph"
                            >
                              <ChevronRight className="size-3.5" />
                            </button>
                          </div>
                        </div>

                        <figure key={activePhoto} className="flex flex-col">
                          <div className="aspect-[4/3] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(214,209,202,0.9),rgba(194,189,184,0.92))] shadow-[0_16px_36px_rgba(52,45,58,0.12)]">
                            <img
                              src={activePhoto}
                              alt={`${activePlace.label} travel photograph ${activePhotoIndex + 1}`}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover saturate-[0.92] transition duration-500 hover:saturate-100"
                            />
                          </div>
                          <figcaption className="mt-2 flex justify-between border-t border-[rgba(132,116,142,0.18)] pt-2 text-[8px] uppercase tracking-[0.1em] text-zinc-500">
                            <span>{activePlace.id.replaceAll("-", " ")}</span>
                            <span>{String(activePhotoIndex + 1).padStart(3, "0")}</span>
                          </figcaption>
                        </figure>
                      </div>
                    ) : (
                      <div className="flex min-h-52 items-center justify-center border border-dashed border-zinc-400 bg-[#e7e5df] text-center">
                        <div>
                          <Archive className="mx-auto size-6 text-zinc-500" />
                          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
                            No photographs in the current selection
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                </div>
              </section>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
