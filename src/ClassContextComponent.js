import React, { Component } from "react";
import { ThemeContext } from "./App";

class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      height: "30px",
      width: "100vw",
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <div style={this.themeStyles(darkTheme)}>
              I change based on theme
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
