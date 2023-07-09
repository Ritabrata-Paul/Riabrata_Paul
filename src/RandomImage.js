import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton,FacebookIcon, TwitterIcon, WhatsappIcon  } from 'react-share';
import './RandomImage.css';

class RandomImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
    };
  }

  componentDidMount() {
    this.fetchRandomImage();
  }

  fetchRandomImage = () => {
    // Use any free API or library to fetch a random image
    // Here, we'll use the "picsum.photos" library
    fetch('https://picsum.photos/500')
      .then((response) => {
        this.setState({ imageUrl: response.url });
      })
      .catch((error) => {
        console.error('Error fetching random image:', error);
      });
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="random-image-container">
        <img className="random-image" src={imageUrl} alt="Random" />

        <div className="share-buttons">
          <FacebookShareButton url={window.location.href} quote="Check out this random image!">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} title="Check out this random image!">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href} title="Check out this random image!">
            <WhatsappIcon size={32} round/>
          </WhatsappShareButton>
        </div>
      </div>
    );
  }
}

export default RandomImage;
