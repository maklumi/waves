import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/fontawesome-free-solid";
import { CircularProgress } from "@material-ui/core";

export default class FileUpload extends Component {
  state = {
    uploadedFiles: [],
    uploading: false
  };

  onDrop = files => {
    this.setState({ uploading: true });
    let formdata = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    formdata.append("file", files[0]);

    axios.post("/api/users/uploadimage", formdata, config).then(response => {
      this.setState(
        {
          uploading: false,
          uploadedFiles: [...this.state.uploadedFiles, response.data]
        },
        () => {
          this.props.imagesHandler(this.state.uploadedFiles);
        }
      );
    });
  };

  onRemove = () => {};

  showUploadedImages = () =>
    this.state.uploadedFiles.map(item => (
      <div
        className="dropzone_box"
        key={item.public_id}
        onClick={() => this.onRemove(item.public_id)}
      >
        <div
          className="wrap"
          style={{ background: `url(${item.url}) no-repeat` }}
        />
      </div>
    ));

  render() {
    return (
      <div>
        <section>
          <div className="dropzone clear">
            <Dropzone
              onDrop={this.onDrop}
              multiple={false}
              className="dropzone_box"
            >
              <div className="wrap">
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
            </Dropzone>
            {this.showUploadedImages()}
            {this.state.uploading ? (
              <div
                className="dropzone_box"
                style={{
                  textAlign: "center",
                  paddingTop: "60px"
                }}
              >
                <CircularProgress
                  style={{
                    color: "#00bcd4"
                  }}
                  thickness={7}
                />
              </div>
            ) : null}
          </div>
        </section>
      </div>
    );
  }
}
