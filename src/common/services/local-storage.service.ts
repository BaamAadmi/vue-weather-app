import { WeatherBasic } from "../../features/city/model/weather";

export class LocalStorageService {
  static readonly getItem = (key: string) => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    const parsed = JSON.parse(item);
    if (parsed.expiry < Date.now()) {
      localStorage.removeItem(key);
      return null;
    }
    return parsed.value;
  };

  

  static readonly setItem = (key: string, value: WeatherBasic | unknown, ttlSeconds: number) => {
    const expiry = Date.now() + ttlSeconds * 1000;
    const item = { value, expiry };
    localStorage.setItem(key, JSON.stringify(item));
  };
}
