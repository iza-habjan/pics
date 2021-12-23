import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const imageHeight = this.imageRef.current.clientHeight;
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

// Let the ImageCard render itself and its image
// Reach into the DOM and figure out the height of the image
// Set image height on the state to get the component to rerender
// When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space
