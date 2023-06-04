import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { notFound } = useSelector((store) => store.core.contents);

  if (notFound) {
    return (
      <div className="h-screen w-screen bg-purpleHearth dark:bg-bunting flex flex-col gap-y-5 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-sulu font-bold text-5xl pb-5">{notFound[0]}</span>
          <span className="text-bilobaFlower text-2xl pb-3">{notFound[1]}</span>
          <span className="text-malibu text-lg">{notFound[2]}</span>
        </div>
        <Link to="/" className="py-3 px-5 rounded-xl font-bold bg-white dark:bg-balticSea text-purpleHearth dark:text-white">
          {notFound[3]}
        </Link>
      </div>
    );
  }
};

export default NotFound;
