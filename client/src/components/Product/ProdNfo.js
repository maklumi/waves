import React from "react";
import MyButton from "../utils/Button";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTruck, faCheck, faTimes } from "@fortawesome/fontawesome-free-solid";

const ProdNfo = props => {
  const detail = props.detail;
  return (
    <div>
      <h1>
        {detail.brand.name} {detail.name}
      </h1>
      <div>{detail.description}</div>
    </div>
  );
};

export default ProdNfo;
