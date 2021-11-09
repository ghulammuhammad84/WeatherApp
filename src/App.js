import { useEffect, useState } from 'react'

const App = () => {
  const [weatherState, setWeatherState] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      let weatherApi = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
      let jsonApi = await weatherApi.json();
      setWeatherState(jsonApi.dataseries);
      }
    FetchApi();
  }, []);
    console.log(weatherState);
  return (
    <div>

    </div>
  )
}
export default App
