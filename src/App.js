import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import ReactMapboxGLContainer from "./components/ReactMapboxGLContainer";
import MapboxContainer from "./components/MapboxContainer";
import "./style/app.css";

@inject("store", "uiStore")
@observer
class App extends Component {
  componentDidMount() {
    this.props.store.loadData();
  }

  renderMap() {
    const { uiStore } = this.props;
    switch (uiStore.mapboxRenderer) {
      case "core":
        return <MapboxContainer />;
      default:
        return <ReactMapboxGLContainer />;
    }
  }

  render() {
    const { store } = this.props;
    return (
      <div className="app">
        <Sidebar />
        {this.renderMap()}
        {store.isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
