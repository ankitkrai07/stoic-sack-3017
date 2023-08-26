import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { AspectRatio } from "@chakra-ui/react";

const YoutubeEmbed = ({ embedId }) => (
  <DIV className="video-responsive">
    <AspectRatio>
      <iframe
        width="500"
        height="250"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </AspectRatio>
  </DIV>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

const DIV = styled.div`
  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: relative;
  }
`;
