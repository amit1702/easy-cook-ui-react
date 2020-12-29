import React from "react";
import { getYoutubeVideoId } from "../../../../utils/videoCalculations";
import MyYoutubePlayer from "./MyYoutubePlayer";
import classes from "./Source.module.scss";
import RecipeSource from "../../../model/RecipeSource.model";

interface SourceInterface {
  source: RecipeSource;
}

const Source: React.FC<SourceInterface> = (props) => {
  console.log("props.source.url", props?.source?.url);

  const youtubeVideoId = getYoutubeVideoId(props.source.url);

  if (youtubeVideoId) {
    return (
      <div>
        <MyYoutubePlayer youtubeVideoId={youtubeVideoId}></MyYoutubePlayer>
      </div>
    );
  } else {
    return (
      <div className={classes.nonVideoSourceBox}>
        {/*url*/}
        {props.source?.url ? (
          <div>
            <span className={classes.title}>Url: </span>
            <a
              href={props.source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to recipe source
            </a>
          </div>
        ) : null}
        {/*author*/}
        {props.source?.cook ? (
          <div>
            <span className={classes.title}>Cook: </span>
            <span>{props.source?.cook}</span>
          </div>
        ) : null}
        {/*book*/}
        {props.source?.book ? (
          <div>
            <span className={classes.title}>Book: </span>
            <span>{props.source?.book}</span>
          </div>
        ) : null}
        {/*page*/}
        {props.source?.page ? (
          <div>
            <span className={classes.title}>Page No.: </span>
            <span>{props.source?.page}</span>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Source;