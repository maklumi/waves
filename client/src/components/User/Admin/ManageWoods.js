import React, { Component } from "react";

import FormField from "../../utils/Form/FormField";
import {
  update,
  generateData,
  resetFields,
  isFormValid
} from "../../utils/Form/FormActions";

import { connect } from "react-redux";
import { getWoods, addWood } from "../../../store/actions/product_actions";

class ManageWoods extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Wood name",
          name: "wood_input",
          type: "text",
          placeholder: "Enter the wood"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  componentDidMount = () => {
    this.props.dispatch(getWoods());
  };

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "woods");
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  resetFieldHandler = () => {
    const newFormdata = resetFields(this.state.formdata, "woods");

    this.setState({
      formdata: newFormdata,
      formSuccess: true
    });

    setTimeout(() => {
      this.setState({
        formSuccess: false
      });
    }, 2000);
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "woods");
    let formIsValid = isFormValid(this.state.formdata, "woods");
    let existingWoods = this.props.products.woods;

    if (formIsValid) {
      this.props
        .dispatch(addWood(dataToSubmit, existingWoods))
        .then(response => {
          if (response.payload.success) {
            this.resetFieldHandler();
          } else {
            this.setState({ formError: true });
          }
        });
    } else {
      this.setState({ formError: true });
    }
  };

  showCategoryItems = () =>
    this.props.products.woods
      ? this.props.products.woods.map((item, i) => (
          <div className="category_item" key={item._id}>
            {item.name}
          </div>
        ))
      : null;

  render() {
    return (
      <div className="admin_category_wrapper">
        <h1>Woods</h1>
        <div className="admin_two_column">
          <div className="left">
            <div className="brands_container">{this.showCategoryItems()}</div>
          </div>
          <div className="right">
            <form onSubmit={this.submitForm}>
              <FormField
                id="name"
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />
              {this.state.formSuccess ? (
                <div className="form_success">Success</div>
              ) : null}
              {this.state.formError ? (
                <div className="error_label">Please check your data</div>
              ) : null}

              <button onClick={this.submitForm}>Add wood</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ManageWoods);
