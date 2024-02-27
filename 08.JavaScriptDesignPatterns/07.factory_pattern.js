const createTransport = ({ name, track, route }) => ({
  name,
  track,
  route,
});

const roadTransport = createTransport({
  name: "vehicle",
  route: "road",
  track: () => "In transit on road",
});

const seaTransport = createTransport({
  name: "ship",
  route: "sea",
  track: () => "In dock",
});
