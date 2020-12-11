import React from "react";

interface VideoProps {}

interface VideoState {}

export default class Video extends React.Component<VideoProps, VideoState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={"video"}>HERE IS A VIDEO</div>;
  }
}
