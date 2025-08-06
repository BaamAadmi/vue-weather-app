const API_KEY = 'bf9ff572fd59ca8f641e3b87d7512ede';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchCurrentWeather(lat: string, lon: string) {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}

export async function fetchWeatherForecast(lat: string, lon: string) {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}
