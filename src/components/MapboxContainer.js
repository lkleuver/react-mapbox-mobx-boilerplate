import React from "react";
import mapboxgl from "mapbox-gl";
import { observer, inject } from "mobx-react";

mapboxgl.accessToken = process.env.REACT_APP_ACCESS_TOKEN;

@inject("store", "uiStore")
@observer
export default class MapboxContainer extends React.Component {
  map;
  mapLoaded = false;

  componentDidUpdate() {
    this.updateMap();
  }

  componentDidMount() {
    const { store } = this.props;
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: store.center,
      zoom: store.zoom
    });

    this.map.on("load", () => {
      this.mapLoaded = true;
      this.map.addLayer({
        id: "testLayer",
        type: "circle",
        source: {
          type: "geojson",
          data: this.props.store.data
        },
        paint: {
          "circle-color": "red",
          "circle-opacity": 0.5
        }
      });
      this.updateMap();
    });
  }

  updateMap() {
    if (this.mapLoaded) {
      const data = this.props.store.filteredData;
      this.map.getSource("testLayer").setData(data);
    }
  }

  render() {
    return (
      <div ref={el => (this.mapContainer = el)} className="mapbox-container">
        <div style={{ display: "none" }}>
          {this.props.store.filteredData.features.length}
        </div>
      </div>
    );
  }
}
