import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Images from './Images';

export default class HomePage extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      images: null,
    };
  }

  componentDidMount() {
    this.fetchAllImages();
    console.log('DONE FETCHING IMAGES***');
  }

  fetchAllImages() {
    console.log('FETCHING IMAGES***');
    axios.get('http://localhost:3001/images').then((response) => {
      console.log(response.data.payload);
      this.setState({ images: response.data.payload });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const MainHeader = styled.header`
      position: fixed;
      top: 0;
      width: 100%;`
    ;

    const MainTitle = styled.h1`
      font-size: 1.5em;
      text-align: left;
      margin-left: 1em;`
    ;

    const FullPageHR = styled.hr`
      width: 100%;
      height: 1px;
      color: black;
      border-style: solid`
    ;

    const ImagesWrapper = styled.div`
      margin-top: 4.4em;
      `
    ;

    const { images } = this.state;
    // Should make a header component that's reusable to wrap the title in.

    return (
      <div>
        <MainHeader>
          <MainTitle>
            <h1>luke.photo</h1>
          </MainTitle>
          <FullPageHR />
        </MainHeader>
        <ImagesWrapper>
          {
            !!images && images.length > 0 ?
              <Images imgArry={images} />
            : <p>No Images</p>
          }
        </ImagesWrapper>
      </div>
    );
  }
}
