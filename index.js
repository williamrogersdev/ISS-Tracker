//making map and tiles
const map = L.map("issMap").setView([0, 0], 1);

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(map);

// Making a marker with a custom icon
const issIcon = L.icon({
  iconUrl: "iss200.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  const { latitude, longitude } = data;

  // L.marker([latitude, longitude]).addTo(map);
  marker.setLatLng([latitude, longitude]);

  document.getElementById("lat").textContent = latitude;
  document.getElementById("long").textContent = longitude;
}
getISS();
