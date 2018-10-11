import React, { Component } from "react";
import UserLayout from "../../../hoc/User";

import FormField from "../../utils/Form/FormField";
import {
  populateOptionFields,
  update,
  generateData,
  isFormValid
} from "../../utils/Form/FormActions";

import { connect } from "react-redux";
import { getBrands, getWoods } from "../../../store/actions/product_actions";

class AddProduct extends Component {
  state = {
    formError: false,
    formSucces: false,
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Product name",
          name: "name_input",
          type: "text",
          placeholder: "Product name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      description: {
        element: "textarea",
        value: "",
        config: {
          label: "Product description",
          name: "description_input",
          type: "text",
          placeholder: "Product description"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      price: {
        element: "input",
        value: "",
        config: {
          label: "Product price",
          name: "price_input",
          type: "number",
          placeholder: "Product price"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      brand: {
        element: "select",
        value: "",
        config: {
          label: "Product brand",
          name: "shipping_input",
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      shipping: {
        element: "select",
        value: "",
        config: {
          label: "Product shipping",
          name: "shipping_input",
          options: [{ key: true, value: "Yes" }, { key: false, value: "No" }]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      available: {
        element: "select",
        value: "",
        config: {
          label: "Available, in stock",
          name: "available_input",
          options: [{ key: true, value: "Yes" }, { key: false, value: "No" }]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      wood: {
        element: "select",
        value: "",
        config: {
          label: "Wood material",
          name: "wood_input",
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      frets: {
        element: "select",
        value: "",
        config: {
          label: "Frets",
          name: "frets_input",
          options: [
            { key: 20, value: 20 },
            { key: 21, value: 21 },
            { key: 22, value: 22 },
            { key: 24, value: 24 }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      publish: {
        element: "select",
        value: "",
        config: {
          label: "Publish",
          name: "publish_input",
          options: [
            { key: true, value: "Public" },
            { key: false, value: "Hidden" }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      }
    }
  };

  componentDidMount = () => {
    const formdata = this.state.formdata;

    this.props.dispatch(getBrands()).then(response => {
      const newFormdata = populateOptionFields(
        formdata,
        this.props.products.brands,
        "brand"
      );
      this.updateFields(newFormdata);
    });

    this.props.dispatch(getWoods()).then(response => {
      const newFormdata = populateOptionFields(
        formdata,
        this.props.products.woods,
        "wood"
      );
      this.updateFields(newFormdata);
    });
  };

  updateFields = newFormdata => {
    this.setState({
      formdata: newFormdata
    });
  };

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "register");
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = () => {};

  render() {
    return (
      <UserLayout>
        <div>
          <h1>Add Product</h1>
          <form onSubmit={this.submitForm}>
            <FormField
              id="name"
              formdata={this.state.formdata.name}
              change={() => console.log("change")}
            />
            <FormField
              id="description"
              formdata={this.state.formdata.description}
              change={element => this.updateForm(element)}
            />
            <FormField
              id="price"
              formdata={this.state.formdata.price}
              change={element => this.updateForm(element)}
            />

            <div className="form_devider" />
            <FormField
              id="brand"
              formdata={this.state.formdata.brand}
              change={element => this.updateForm(element)}
            />
            <FormField
              id="shipping"
              formdata={this.state.formdata.shipping}
              change={element => this.updateForm(element)}
            />
            <FormField
              id="available"
              formdata={this.state.formdata.available}
              change={element => this.updateForm(element)}
            />
            <div className="form_devider" />

            <FormField
              id="wood"
              formdata={this.state.formdata.wood}
              change={element => this.updateForm(element)}
            />

            <FormField
              id="frets"
              formdata={this.state.formdata.frets}
              change={element => this.updateForm(element)}
            />

            <div className="form_devider" />
            <FormField
              id="publish"
              formdata={this.state.formdata.publish}
              change={element => this.updateForm(element)}
            />
            {this.state.formSucces ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}

            <button onClick={this.submitForm}>Add product</button>
          </form>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(AddProduct);
