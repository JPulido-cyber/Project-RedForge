const markers = [
  "node-one",
  "node-two",
  "node-three",
  "node-four",
  "node-five",
  "node-six",
  "node-seven",
  "node-eight",
  "node-nine",
  "node-ten",
] as const;

export function LocationMarkers() {
  return markers.map((marker) => (
    <span className={`network-node ${marker}`} key={marker} />
  ));
}
