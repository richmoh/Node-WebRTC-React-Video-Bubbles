import React from "react";
import Video from "./Video";

interface VideoGridProps {}

interface VideoGridState {
  videos: any;
}

export default class VideoGrid extends React.Component<
  VideoGridProps,
  VideoGridState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  render() {
    return (
      <div className={"video-grid"}>
        {this.state.videos.map(() => {
          return <Video></Video>;
        })}
      </div>
    );
  }
}
