import React from 'react';

class ImageCard extends React.Component {
  //react refs
  constructor(props){
    super(props);

    this.state = { spans:0 };

    this.imageRef = React.createRef();
  }

  componentDidMount(){
    //callback bound
    this.imageRef.current.addEventListener('load', this.setSpans);


    //console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () => {
    //console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 );

    this.setState({ spans });
  }

  render(){
    //destructure this this.props
    const { description, urls } = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img
          // alt={description}
          // src={urls.regular}
          ref={this.imageRef} alt={description} src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
