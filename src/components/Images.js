import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class Images extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: null,
    };
  }

  componentDidMount() {
    const images = this.props.imgArry ? this.props.imgArry : [];
    this.setState({ images });
  }

  render() {
    const ImageSm = styled.img`
      width: 10em;
      margin: 0 auto;
      display: inline-block;`
    ;

    const RedPara = styled.p`
      color: red;
      font-size: 3em;`
    ;

    const { images } = this.state;

    return (
      <div>
        {
          !!images && images.length > 0 ?
            images.map((imageDoc) =>
                (
                    <div>
                        <ImageSm src={imageDoc.urls.thumb} alt={imageDoc.caption} />
                        <p>{JSON.stringify(imageDoc)}</p>
                    </div>
                )
            )
          : <RedPara>Images Component not receiving images</RedPara>
        }
      </div>
    );
  }
}
