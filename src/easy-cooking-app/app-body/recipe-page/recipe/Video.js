import React from "react";
import YouTube from "react-youtube";
import { getYoutubeVideoId } from "../../../../utils/videoCalculations";

export default class Video extends React.Component {
  render() {
    console.log("this.props.url", this.props.url);

    //check if it is a youtube url
    const videoId = getYoutubeVideoId(this.props.url);
    if (!videoId) {
      return null;
    }

    const opts = {
      height: "190",
      width: "320",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <React.Fragment>
        <YouTube videoId="videoId" opts={opts} onReady={this._onReady} />
        <p>{this.props.url}</p>
        <p>{videoId}</p>
      </React.Fragment>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}