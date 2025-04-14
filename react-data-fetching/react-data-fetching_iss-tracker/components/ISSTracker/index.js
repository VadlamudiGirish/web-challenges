import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  async function fetcher(url) {
    return fetch(url).then((response) => response.json());
  }

  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
    fallbackData: { longitude: 0, latitude: 0 },
  });

  return (
    <main>
      {isLoading && <div>Loading ISS coordinates...</div>}
      {error && <div>Error: {error.message}</div>}
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
