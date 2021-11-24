import { useEffect, useState } from 'react'
import Tvseries from './components/Tvseries';

const App = () => {
  const [weatherState, setWeatherState] = useState([]);
  useEffect(() => {
    async function FetchApi() {
      let weatherApi = await fetch('https://api.jikan.moe/v3/search/anime?q=naruto');
      let jsonApi = await weatherApi.json();
      setWeatherState(jsonApi.results);
      }
    FetchApi();
  }, []);
    console.log(weatherState);
  return (
    <div>
<Tvseries tvseries={weatherState}/>
    </div>
  )
}
export default App
