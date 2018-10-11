import React from "react";
import Card from "./Card";

const CardBlock = props => {
  const renderCards = () =>
    props.list
      ? props.list.map((card, i) => (
          <div key={i}>
            <Card {...card} />
          </div>
        ))
      : null;

  return (
    <div className="card_block">
      <div className="container">
        {props.title ? <div className="title">{props.title}</div> : null}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {renderCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
