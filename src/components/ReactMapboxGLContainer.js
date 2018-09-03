import React from "react";
import { observer, inject } from "mobx-react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

const circlePaint = {
  "circle-color": "red",
  "circle-opacity": 0.5
};

@inject("store", "uiStore")
@observer
export default class ReactMapboxGLContainer extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Map
        // eslint-disable-next-line
        style={"mapbox://styles/mapbox/streets-v9"}
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
        center={store.center}
        zoom={[store.zoom]}
      >
        <Layer type="circle" paint={circlePaint}>
          {store.filteredData.features.map((d, index) => (
            <Feature key={index} coordinates={d.geometry.coordinates} />
          ))}
        </Layer>
      </Map>
    );
  }
}
