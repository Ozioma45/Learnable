/* Factory Pattern: This pattern is like a factory that produces different types of products based on certain 
specifications. You tell the factory what kind of product you need, and 
it produces it for you. */

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
