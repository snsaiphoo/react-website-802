import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, width, height, className  }) => (
  <div className={`video-responsive ${className}`}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired, // Specify width prop type as number
  height: PropTypes.number.isRequired, // Specify height prop type as number
  className: PropTypes.string // Allow custom CSS class
};

YoutubeEmbed.defaultProps = {
  width: 400, // Default width
  height: 225, // Default height
};

export default YoutubeEmbed;