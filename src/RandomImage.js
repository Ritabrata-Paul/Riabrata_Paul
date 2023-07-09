import React from 'react';
import { FacebookIcon, TwitterIcon, WhatsappIcon  } from 'react-share';
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

  shareOnFacebook = () => {
    const { imageUrl } = this.state;
    const shareUrl = `https://riabrata-paul-ritabrata-paul.vercel.app/`;
    const quote = `Check out this random image!`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(quote)}&picture=${encodeURIComponent(imageUrl)}`;
    window.open(facebookShareUrl, '_blank');
  };

  shareOnTwitter = () => {
    const { imageUrl } = this.state;
    const shareUrl = `https://riabrata-paul-ritabrata-paul.vercel.app/`;
    const message = `Check out this random image! ${shareUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(message)}&picture=${encodeURIComponent(imageUrl)}`;
    window.open(twitterShareUrl, '_blank');
  };

  shareOnWhatsApp = () => {
    const { imageUrl } = this.state;
    const shareUrl = `https://riabrata-paul-ritabrata-paul.vercel.app/`;
    const message = `Check out this random image! ${shareUrl}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)} ${encodeURIComponent(imageUrl)}`;
    window.open(whatsappShareUrl, '_blank');
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="random-image-container">
        <img className="random-image" src={imageUrl} alt="Random" />

        <div className="share-buttons">
          <button onClick={this.shareOnFacebook}>
            <FacebookIcon size={32} round />
          </button>
          <button onClick={this.shareOnTwitter}>
            <TwitterIcon size={32} round />
          </button>
          <button onClick={this.shareOnWhatsApp}>
            <WhatsappIcon size={32} round />
          </button>
        </div>
      </div>
    );
  }
}

export default RandomImage;
