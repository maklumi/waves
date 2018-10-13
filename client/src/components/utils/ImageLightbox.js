import React, { Component } from "react";
import Lightbox from "react-images";

class ImageLightbox extends Component {
  state = {
    lightboxIsOpen: true,
    currentImage: this.props.pos,
    images: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.images) {
      const images = [];
      nextProps.images.forEach(element => {
        images.push({ src: `${element}` });
      });
      return (prevState = {
        images
      });
    }
    return false;
  }

  gotoPrevious = () => {
    this.setState({ currentImage: this.state.currentImage - 1 });
  };

  gotoNext = () => {
    this.setState({ currentImage: this.state.currentImage + 1 });
  };

  closeLightbox = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.state.images}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}

export default ImageLightbox;
