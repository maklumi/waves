import React from "react";
import MyButton from "../utils/Button";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTruck, faCheck, faTimes } from "@fortawesome/fontawesome-free-solid";

const ProdNfo = props => {
  const showProdTags = detail => (
    <div className="product_tags">
      {detail.shipping ? (
        <div className="tag">
          <div>
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <div className="tag_text">
            <div>Free shipping</div>
            <div>and return</div>
          </div>
        </div>
      ) : null}
      {detail.available ? (
        <div className="tag">
          <div>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="tag_text">
            <div>Available</div>
            <div>in store</div>
          </div>
        </div>
      ) : (
        <div className="tag">
          <div>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="tag_text">
            <div>Not Available</div>
            <div>Preorder only</div>
          </div>
        </div>
      )}
    </div>
  );

  const showProdActions = detail => (
    <div className="product_actions">
      <div className="price">RM {detail.price}</div>
      <div className="cart">
        <MyButton
          type="add_to_cart_link"
          runAction={() => {
            console.log("add");
          }}
        />
      </div>
    </div>
  );

  const showProdSpecs = detail => (
    <div className="product_specifications">
      <h2>Specs:</h2>
      <div>
        <div className="item">
          <strong>Frets:</strong>
          {detail.frets}
        </div>
        <div className="item">
          <strong>Wood:</strong>
          {detail.wood.name}
        </div>
      </div>
    </div>
  );

  const detail = props.detail;

  return (
    <div>
      <h1>
        {detail.brand.name} {detail.name}
      </h1>
      <p>{detail.description}</p>
      {showProdTags(detail)}
      {showProdActions(detail)}
      {showProdSpecs(detail)}
    </div>
  );
};

export default ProdNfo;