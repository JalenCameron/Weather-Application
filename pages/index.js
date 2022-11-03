import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import CachedIcon from "@mui/icons-material/Cached";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
import Background from "../components/Background";
import Default from "../components/Default";
import Input from "@mui/material/Input";
import Greeting from "../components/Greeting";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  // Creating a URL with my API key to fetch information
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  // Creating a function to fetch the data
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    // Fetching the data
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    // Resetting the search query and loading
    setCity("");
    setLoading(false);
  };

  // Creating a function to reset the Page
  const refresh = () => {
    window.location.reload();
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="m-4">
        <Head>
          <title>Weather App</title>
          <meta
            name="description"
            content="A Web Application that gives you current weather information depending on which city you input. This has been done through fetching data with an API key"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Image overlay to reduce sharpness */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />

        {/* Background Image pulled from Unsplash */}
        {weather.main ? <Background weather={weather} /> : <Default />}

        {/* Input for Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 ">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border-none text-white rounded-2xl"
          >
            <div>
              <Input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
                type="text"
                color="primary"
                placeholder="Search for a City"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
          <button className="relative p-2" onClick={refresh}>
            <CachedIcon size={10} />
          </button>
        </div>

        {/* Displaying the Weather */}
        {weather.main ? <Weather weather={weather} /> : <Greeting />}
      </div>
    );
  }
}
