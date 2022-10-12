import toths from "./toths";

const api = toths.api;

api.get("/", (req ,res) => {
  res.status(200).send();
});

api.listen(3333, () => console.log("server running in localhost:3333"))
