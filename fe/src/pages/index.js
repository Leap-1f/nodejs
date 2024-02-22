import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState({ name: "hel" });
  // console.log(name);
  const createData = async () => {
    await fetch("http://localhost:3000/user", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a: 7, str: "hello" }),
    });
  };
  const addData = () => {
    console.log(name);
    createData();
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      <p>Heloo</p>
      <input
        onChange={(event) => setName({ name: event.target.value })}
      ></input>
      <button onClick={addData}>submit</button>
      {/* input - UserName */}
      {/* input - nas  */}
    </div>
  );
}
