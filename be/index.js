import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const user = [{ id: 1, name: "Bill" }, {}];

app.get("/user", (request, response) => {
  response.json("Hello Bilguundul");
});
app.post("/user", (request, response) => {
  console.log(request.body);
  // arr.push({ name: "hello", id: 2 });
  response.send("name");
});
app.patch("/", (request, response) => {
  arr.push([
    { name: "hello", id: 2 },
    { name: "hello", id: 2 },
  ]);
});
app.listen(3000, () => {
  console.log(`3000 hello`);
});
