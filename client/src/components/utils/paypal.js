import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      //   console.log(JSON.stringify(payment));
      this.props.onSuccess(payment);
    };

    const onCancel = data => {
      console.log(JSON.stringify(data));
    };

    const onError = err => {
      console.log(JSON.stringify(err));
    };

    let env = "sandbox";
    let currency = "MYR";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "AVeL0Mr_RrTZ2ZNvTjg6-9Lk_EoHYZ3vMPWb6yEAgvJKyqGLkO5veREnI8AK5_j43-SR8Rd_mtMuuzV3",
      production: ""
    };

    const sampleResponse = {
      paid: true,
      cancelled: false,
      payerID: "ZDHU95TMXZXVS",
      paymentID: "PAY-8HR824390X202600KLPB5YUI",
      paymentToken: "EC-6C9805039E667535V",
      returnUrl:
        "https://www.sandbox.paypal.com/?paymentId=PAY-8HR824390X202600KLPB5YUI&token=EC-6C9805039E667535V&PayerID=ZDHU95TMXZXVS",
      address: {
        recipient_name: "test buyer",
        line1: "Level 01, No 1, First Avenue Bandar Utama",
        city: "Petaling Jaya",
        state: "Selangor",
        postal_code: "47800",
        country_code: "MY"
      },
      email: "maklumi-buyer@yahoo.com"
    };

    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            shape: "rect",
            label: "checkout"
          }}
        />
      </div>
    );
  }
}
