const server = require("./server.js");

const PORT = 5000;
if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`\n** Server is on port: http://localhost:${PORT} **\n`);
  });
}
