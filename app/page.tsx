import React from "react";
import Header from "./components/Header";
import Image from "next/image";

const page = () => {
  return (
    <div className = "min-h-screen max-w-xl">
      <Header />
      <div className = "pt-8 px-6 flex flex-row justify-around">
        <Image src = "/static/header.svg" width = {100} height = {100} alt = "header" />
        <div className = "flex flex-col">
          <p>Mt. San Antonio College</p>
          <p>Computer Science Club</p>
        </div>
      </div>
    </div>
  );
};

export default page;
