import React, { Component } from "react";
import Card from "../utils/Card";

export default class CardBlockShop extends Component {
  renderCards() {
    return this.props.list
      ? this.props.list.map(card => (
          <Card key={card._id} {...card} grid={this.props.grid} />
        ))
      : null;
  }

  render() {
    const props = this.props;
    return (
      <div className="card_block_shop">
        <div>
          <div>
            {props.list ? (
              props.list.length === 0 ? (
                <div className="no_result">Sorry, no results</div>
              ) : null
            ) : null}
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}
