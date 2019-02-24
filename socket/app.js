import db from "./firebaseInit";

const http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { "Context-Type": "text/plane" });
  response.write("Here is some data");
  response.end();
}
http.createServer(onRequest).listen(3000);
console.log("Server is now running...");

db.collection("cities")
  .doc("new-city-id")
  .set({ id: 1 });
