export interface SWeather {
  title: string;
  location_type: string;
  woeid: string;
  latt_long: string;
  consolidated_weather: {
    id: string;
    weather_state_name: string;
    weather_state_abbr: string;
    wind_direction_compass: string;
    created: string;
    applicable_date: string;
    air_pressure: string;
    humidity: string;
    max_temp: string;
    min_temp: string;
    predictability: string
    the_temp: string
    visibility: string;
    wind_direction: string
    wind_speed: string;
  };
  parent: {
    title: string;
    location_type: string;
    woeid: string;
    latt_long: string;
  };
  sources: {
    crawl_rate: string;
    slug: string;
    title: string;
    url: string;
  };
  sun_rise: string;
  sun_set: string;
  time: string;
  timezone: string;
  timezone_name: string;
}
