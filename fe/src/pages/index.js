import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  // console.log(name);
  const createData = async () => {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => response.json());
    setData(response);
  };
  const addData = () => {
    createData();
  };
  // const fetchData = async () => {
  //   await fetch('http://localhost:3000/user').then(())
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div>
      <p>Heloo</p>
      <input
        onChange={(event) => setForm({ name: event.target.value })}
        placeholder="Ner"
      ></input>
      {/* <input
        onChange={(event) => setForm([...form, { age: event.target.value }])}
        placeholder="Nas"
      ></input> */}
      <button onClick={addData}>submit</button>
      <ul>
        {data?.map((element) => (
          <li>{element.name}</li>
        ))}
      </ul>
      {/* input - UserName */}
      {/* input - nas  */}
    </div>
  );
}
