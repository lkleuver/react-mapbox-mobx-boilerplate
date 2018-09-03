import { observable, computed, action } from "mobx";

export default class Store {
  @observable
  loadCount = 0;

  @observable
  center = [4.3179471977028925, 51.844431749813396];
  @observable
  zoom = 12.5;

  filters = ["a", "b"];
  @observable
  filter = "";

  @observable
  data = {
    type: "FeatureCollection",
    features: []
  };

  @computed
  get isLoading() {
    return this.loadCount > 0;
  }

  @computed
  get filteredData() {
    if (this.filter === "") return this.data;
    return {
      type: "FeatureCollection",
      features: this.data.features.filter(
        f => f.properties.testType === this.filter
      )
    };
  }

  @action //Action processes all operations before triggering reactions
  loadData() {
    this.loadCount++;
    setTimeout(() => {
      this.loadCount--;
      this.data.features.push({
        type: "Feature",
        properties: { testType: "a" },
        geometry: {
          type: "Point",
          coordinates: [4.3179471977028925, 51.844431749813396]
        }
      });
      this.data.features.push({
        type: "Feature",
        properties: { testType: "b" },
        geometry: {
          type: "Point",
          coordinates: [4.3199671977028925, 51.844431749813396]
        }
      });
    }, 3000);
  }
}
