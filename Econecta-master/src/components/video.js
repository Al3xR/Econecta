import React from 'react';
import PropTypes from 'prop-types'

class Video extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div className="videoSection relative">
          <video className="videoBackground" autoPlay="autoplay" muted="muted" loop="loop" playsInline="playsinline" preload="metadata" data-aos="fade-up" >
        <source id="mp4" src={this.props.video} type="video/mp4"/>
           </video>
           <div className="titleHolder alignRightPad alignLeftPad marginAuto">
             <h1 className="videoTitle textCenter colorWhite fontSizeXXBig "> {this.props.text}</h1>
           </div>
      </div>

    );
  }
}

Video.propTypes = {
  video: PropTypes.string,
  text: PropTypes.string
};

export default Video;