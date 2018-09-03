import { observable } from "mobx";

export default class UIStore {
  @observable
  mapboxRenderer = "core";

  toggleMapRenderer() {
    if (this.mapboxRenderer === "react-mapbox-gl") {
      this.mapboxRenderer = "core";
    } else {
      this.mapboxRenderer = "react-mapbox-gl";
    }
  }
}
