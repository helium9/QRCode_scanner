import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function MainPage() {
  const [recorded, setRecorded] = useState();
  axios
    .get("http://127.0.0.1:8000/")
    .then((res) => {
      setRecorded(res.data);
    })
    .catch((res) => window.alert("server error"));
  console.log(recorded);
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <p className="font-bold mx-4">{recorded && `QRCode value: ${recorded}`}</p>
      <button className="bg-blue-400 w-28 text-white h-10 shadow-xl rounded">
        <Link to="/scan">Scan</Link>
      </button>
    </div>
  );
}
