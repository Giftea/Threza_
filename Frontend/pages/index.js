import Hero from "../components/HomePage/Hero";
import InfinitePhotos from "../components/InfinitePhotos";
import Navbar from "../components/Layout/Navbar";
import getStorageProvider, { getWalletInstance } from "../arcana_utils";
import { useEffect, useState } from "react";
import { ethers } from 'ethers';

export default function Home() {
  const handler = async () => {
    const provider = await getWalletInstance();
    provider.on("connect", async () => {
      const sp = await getStorageProvider(provider);
      await sp.login();
      this.setState({
        loggedIn: true,
      });
    });
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className=" body">
      <Navbar />
      <Hero />
      <InfinitePhotos />
    </div>
  );
}
