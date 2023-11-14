function createTemperatureGetter() {
  const temperatureData = {
    "New York": 20,
    "London": 18,
    "Paris": 22,
    "Tokyo": 25,
    "Sydney": 28,
  };

  const temperatureCache = {};

  return function getTemperatureForCity(city) {
    // Check if the temperature is already in the cache
    if (temperatureCache[city] !== undefined) {
      console.log(`Temperature for ${city} retrieved from cache.`);
      return temperatureCache[city];
    }

    // If not in cache, fetch from the hardcoded data
    if (temperatureData.hasOwnProperty(city)) {
      const temperature = temperatureData[city];

      // Store the result in the cache
      temperatureCache[city] = temperature;

      console.log(`Temperature for ${city} retrieved from API.`);
      return temperature;
    } else {
      console.log(`Temperature data not available for ${city}.`);
      return undefined; // Or you can throw an error, depending on your use case
    }
  };
}

// Example usage:
const getTemperatureForCity = createTemperatureGetter();

const temperature1 = getTemperatureForCity("New York");
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache)
