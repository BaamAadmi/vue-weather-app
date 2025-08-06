import { ref } from 'vue';
import { LocalStorageService } from '../../../common/services/local-storage.service';
import { City } from '../model/city';
import { WeatherBasic } from '../model/weather';
import { fetchCurrentWeather } from '../services/weather.service';

export function useWeatherBasic(city: City) {
  const weather = ref<WeatherBasic | null>(null);
  const loading = ref(false);

  async function loadWeather(forceRefresh = false) {
    loading.value = true;

    const cacheKey = `weather-${city.id}`;
    const cached = LocalStorageService.getItem(cacheKey);

    if (cached && !forceRefresh) {
      weather.value = cached;
      loading.value = false;
      return;
    }

    try {
      const data = await fetchCurrentWeather(city.lat, city.lon);
      if (data && !data.error) {
        weather.value = data as WeatherBasic;
        LocalStorageService.setItem(cacheKey, data, 3600);
      } else {
        console.warn('Weather fetch failed or incomplete data; not caching');
        weather.value = null;
      }
    } catch (err) {
      console.error('Fetch failed:', err);
      weather.value = null;
    } finally {
      loading.value = false;
    }
  }

  loadWeather();

  return {
    weather,
    loading,
    loadWeather,
  };
}
