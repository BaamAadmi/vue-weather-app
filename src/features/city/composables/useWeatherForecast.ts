/* eslint-disable */

import { ref } from 'vue';
import { LocalStorageService } from '../../../common/services/local-storage.service';
import { City } from '../model/city';
import { fetchWeatherForecast } from '../services/weather.service';

export function useWeatherForecast(city: City) {
  const forecast = ref<any>(null); // TODO: create forecast interface, use it in localStorageService
  const loading = ref(false);

  async function loadForecast(forceRefresh = false) {
    loading.value = true;
    const cacheKey = `forecast-${city.id}`;
    const cached = LocalStorageService.getItem(cacheKey);

    if (cached && !forceRefresh) {
      forecast.value = cached;
      loading.value = false;
      return;
    }

    try {
      const data = await fetchWeatherForecast(city.lat, city.lon);

      if (data && !data.error) {
        forecast.value = data;
        LocalStorageService.setItem(cacheKey, data, 10800); // Cache for 3 hours
      } else {
        console.warn('Forecast fetch failed or invalid data; not caching');
        forecast.value = null;
      }
    } catch (error) {
      console.error('Forecast fetch error:', error);
      forecast.value = null;
    } finally {
      loading.value = false;
    }
  }

  loadForecast();

  return {
    forecast,
    loading,
    loadForecast,
  };
}
