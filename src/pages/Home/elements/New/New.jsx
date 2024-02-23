import React from "react";
import "./_new.scss";
import { Card } from "./templates/Card";
import cardData from "./templates/data/card-data";

export const New = () => {
  return (
    <section className="new">
      <div className="container">
        <h2 className="new__title title-2">
          НОВИНКИ
          <div className="new__subtitle">
            <h2 className="subtitle">НОВИНКИ</h2>
          </div>
        </h2>
      </div>

      <div className="new__catalog">
        {cardData.map((value, index) => {
          return <Card {...value} key={value.id} />;
        })}
      </div>
      <div className="new__btn">
        <a href="#!" className="new__btn-link">
          СМОТРЕТЬ ВСЕ
        </a>
      </div>
    </section>
  );
};
