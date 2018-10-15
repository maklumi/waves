import React, { Component } from "react";

import FormField from "../../utils/Form/FormField";
import {
  update,
  generateData,
  populateFields,
  isFormValid
} from "../../utils/Form/FormActions";

import { connect } from "react-redux";
import { getSiteData } from "../../../store/actions/site_actions";

class UpdateSiteInfo extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      address: {
        element: "input",
        value: "",
        config: {
          label: "Address",
          name: "address_input",
          type: "text",
          placeholder: "Enter your site address"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      hours: {
        element: "input",
        value: "",
        config: {
          label: "Working hours",
          name: "hours_input",
          type: "text",
          placeholder: "Enter your site working hours"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      phone: {
        element: "input",
        value: "",
        config: {
          label: "Phone number",
          name: "phone_input",
          type: "text",
          placeholder: "Enter the phone number"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      },
      email: {
        element: "input",
        value: "",
        config: {
          label: "Shop email",
          name: "email_input",
          type: "email",
          placeholder: "Enter your shop email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true
      }
    }
  };

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "update_site");
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, "update_site");
    let formIsValid = isFormValid(this.state.formdata, "update_site");

    if (formIsValid) {
      console.log(dataToSubmit);
    } else {
      this.setState({ formError: true });
    }
  };

  componentDidMount = () => {
    this.props.dispatch(getSiteData()).then(() => {
      console.log(this.props.site.siteData[0]);
      const newFormdata = populateFields(
        this.state.formdata,
        this.props.site.siteData[0]
      );
      this.setState({
        formdata: newFormdata
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h1>Site info</h1>
          <FormField
            id="address"
            formdata={this.state.formdata.address}
            change={this.updateForm}
          />
          <FormField
            id="hours"
            formdata={this.state.formdata.hours}
            change={this.updateForm}
          />
          <FormField
            id="phone"
            formdata={this.state.formdata.phone}
            change={this.updateForm}
          />
          <FormField
            id="email"
            formdata={this.state.formdata.email}
            change={this.updateForm}
          />

          <div>
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}

            <button onClick={this.submitForm}>Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  site: state.site
});

export default connect(mapStateToProps)(UpdateSiteInfo);
