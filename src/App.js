import React, { useEffect } from "react";
import Tmdb from "./Tmdb";

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      console.log(list);
    };

    loadAll();
  }, []);

  return (
    <div>
      <h1>Hello mundão</h1>
    </div>
  );
};
