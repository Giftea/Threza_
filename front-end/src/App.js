/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
// import { HelloWorld } from './components/HelloWorld'
import getStorageProvider, { getWalletInstance } from "./lib/storageProvider";

import "./App.css";
import { UploadFile } from "./components/UploadFile";
import StorageService from "./lib/utils";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [file, setfile] = useState("");

  async function handler() {
    const provider = await getWalletInstance();
    const sp = await getStorageProvider(provider);
    console.log(sp);
    provider.on("connect", async () => {
      const sp = await getStorageProvider(provider);
      console.log(sp);
      await sp.login();
      setIsLoggedIn(true);
    });
  }

  useEffect(() => {
    handler();
  }, []);

  async function handleOnSubmit(e) {
    e.preventDefault();
    function onSuccess(){
      console.log('SUCCESSFUL')
    }
    try {
     await StorageService.upload(file);
      alert("Uploaded");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        {" "}
        <input
          type="file"
          value={file}
          onChange={(e) => setfile(e.target.value)}
        />{" "}
        <button type="submit">go</button>
      <UploadFile />
      </form>
    </>
  );
}
