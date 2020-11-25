<template>
  <div id="app">
    <l-map
      :center="[46.71109, 1.7191036]"
      :zoom="6"
      style="height: 600px; width: 100%"
      :options="mapOptions"
    >
      <l-choropleth-layer
        :data="RegionsData"
        titleKey="department_name"
        idKey="department_id"
        :value="value"
        :extraValues="extraValues"
        geojsonIdKey="code"
        :geojson="franceGeoJSON"
        :colorScale="colorScale"
      >
        <div slot-scope="props">
          <l-info-control
            :item="props.currentItem"
            :unit="props.unit"
            title="Region"
            placeholder="Hover over a region"
          />
          <l-reference-chart
            title="Medium price of motorbikes for each region"
            :colorScale="colorScale"
            :min="props.min"
            :max="props.max"
            position="topright"
          />
        </div>
      </l-choropleth-layer>
    </l-map>
    <button v-on:click="getOutPut" />
  </div>
</template>
<script>
import axios from "axios";
import franceGeoJSON from "./data/franceGeo.json";
import { ChoroplethLayer, ReferenceChart, InfoControl } from "vue-choropleth";
import { RegionsData } from "./data/test";
import { geojson } from "./data/dataFranceGeoJSON";

export default {
  name: "app",
  components: {
    "l-choropleth-layer": ChoroplethLayer,
    "l-reference-chart": ReferenceChart,
    "l-info-control": InfoControl,
  },
  data: function() {
    return {
      RegionsData,
      franceGeoJSON,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "amount_w",
        metric: "% diesel",
      },
      key: "department_id",
      extraValues: [
        {
          key: "amount_m",
          metric: "% essence",
        },
      ],
      mapOptions: {
        attributionControl: false,
      },
      idKey: null,
      title: null,
      currentStrokeColor: "3d3213",
    };
  },
  methods: {
    getOutPut: function() {
      console.log(this.RegionsData);
    },
  },
  created() {
    for (let i = 0; i < this.RegionsData.length; i++) {
      console.log(this.RegionsData[i].department_name);
      this.title = this.RegionsData[i].department_name;
      this.idKey = this.RegionsData[i].department_id;
      console.log("title", this.title);
      console.log("id", this.idKey);
    }
  },
};
</script>
<style scoped>
@import "../node_modules/leaflet/dist/leaflet.css";
</style>
