import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

library.add(fas);

export default class App extends React.Component {
  state = {
    color: "light",
  };

  componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.color);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.color !== this.state.color) {
      document.documentElement.setAttribute("data-theme", this.state.color);
    }
  }
  switchTheme = () => {
    this.setState((prev) => ({
      color: prev.color === "light" ? "dark" : "light",
    }));
  };
  render() {
    return <Sidebar color={this.state.color} toggleTheme={this.switchTheme} />;
  }
}
