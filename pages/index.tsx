/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organism/Navbar";
import MainBanner from "../components/organism/MainBanner";
import TransactionStep from "../components/organism/TransactionStep";
import FeaturedGame from "../components/organism/FeaturedGame";
import Reached from "../components/organism/Reached";
import Story from "../components/organism/Story";
import Footer from "../components/organism/Footer";
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>

  );
}
