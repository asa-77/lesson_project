import React from "react";
import PageWrapper from "../Common/Wrappers/PageWrapper";
import Content from "./Content";

class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <PageWrapper>
        <Content />
      </PageWrapper>
    );
  }
}

export default MainPage;
