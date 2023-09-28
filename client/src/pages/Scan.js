import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

export default function Scan() {
  const [data, setData] = useState("No result");

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="h-80 w-80 sm:h-96 sm:w-96 border-8 my-5">
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
                console.log(result?.text);
                if (result?.text !== "No result") {
                  axios
                    .post("http://127.0.0.1:8000/scan", { data: result?.text })
                    .then((res) => {
                      window.open("/", "_self");
                    })
                    .catch((res) => window.alert("server error"));
                }
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
        </div>
        <p>{data}</p>
      </div>
    </>
  );
}
