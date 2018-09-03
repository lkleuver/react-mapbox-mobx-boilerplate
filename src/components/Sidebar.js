import React from "react";
import { observer, inject } from "mobx-react";

@inject("store", "uiStore")
@observer
export default class Sidebar extends React.Component {
  render() {
    const { store, uiStore } = this.props;
    return (
      <div className="sidebar">
        <h2>Filters</h2>
        <ul className="filters">
          {store.filters.map(f => (
            <li
              key={f}
              className={store.filter === f ? "active" : "inactive"}
              onClick={e => {
                store.filter = f;
              }}
            >
              {f}
            </li>
          ))}
          <li
            key="clear"
            onClick={e => {
              store.filter = "";
            }}
          >
            clear
          </li>
        </ul>

        <h2>Mapbox renderer</h2>
        <p>
          Using mapbox lib direcly (core) vs a 3rd party react wrapper
          (react-mapbox-gl)
        </p>
        <p>click to switch</p>

        <button
          onClick={() => {
            uiStore.toggleMapRenderer();
          }}
        >
          current: {uiStore.mapboxRenderer}
        </button>
      </div>
    );
  }
}
