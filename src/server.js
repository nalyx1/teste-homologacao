import server from "./app.js";

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
