import { City } from "../model/city";
import { reactive } from "vue";

const state = reactive({
  cities: [
    {
      id: 1,
      name: "Mumbai",
      country: "India",
      lat: "19.076090",
      lon: "72.877426",
      locale: "en-IN"
    },
    {
      id: 2,
      name: "London",
      country: "United Kingdom",
      lat: "51.509865",
      lon: "-0.118092",
      locale: "en-GB"
    },
    {
      id: 3,
      name: "Tokyo",
      country: "Japan",
      lat: "35.6895",
      lon: "139.6917",
      locale: "ja-JP"
    },
    {
      id: 4,
      name: "Kuala Lumpur",
      country: "Malaysia",
      lat: "3.140853",
      lon: "101.693207",
      locale: "ms-MY"
    }
  ] as City[]
});

export function useCityStore() {
  return state;
}
