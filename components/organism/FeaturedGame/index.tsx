/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  useEffect(async() => {
    const response = await axios.get("https://mernstack-storegg.herokuapp.com/api/v1/players/landingpage");
    console.log("data", response.data);
    setGameList(response.data.data);
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {" "}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {
            gameList.map((item) => (
              <GameItem key={item._id} title={item.name} category={item.category.name} thumbnail={`https://mernstack-storegg.herokuapp.com/uploads/${item.thumbnail}`} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
