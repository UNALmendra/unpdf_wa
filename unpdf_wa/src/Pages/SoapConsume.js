import { useState } from "react";

export default function SoapConsume() {
  const axios_ = require("axios");

  const [twoBData, setTwoBData] = useState([]);

  const getTwoBData = async () => {
    let url = "http://35.239.72.193:3002/2B";
    const response = await axios_.get(url);
    return response.data;
  };

  const data = async () => {
    var { user } = await getTwoBData();
    setTwoBData(user);
    console.log(user);
  };

  return (
    <>
      <h2>Consume 2B</h2>
      <button onClick={data}>Mostrar 2B</button>

      {twoBData && (
        <ul>
          <li>Id: {twoBData.id}</li>
          <li>Name: {twoBData.name}</li>
          <li>Email: {twoBData.email}</li>
        </ul>
      )}
    </>
  );
}
