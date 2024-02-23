import fs from "fs";

// {age: 18, name: "Bilguundul"}
// const data = fs.readFileSync("text.txt");
// fs.readFile("text.txt", (err, data) => console.log(data.toString()));
//
const data = { age: 18, name: "Bilguundul2" };
fs.writeFileSync("db.json", JSON.stringify(data));

const stringify = JSON.stringify(data);
const parse = JSON.parse(stringify);
console.log(stringify, "===", parse);
//
fs.writeFile("writefile.txt", "writefile", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("amjillttai uuslee");
  }
});

// folder uusgej bga
//
// fs.mkdir("test1", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Amjilttai uusglee");
//   }
// });
