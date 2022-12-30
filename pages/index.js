import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch, BsInfoCircleFill } from "react-icons/bs";
import CachedIcon from "@mui/icons-material/Cached";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
import Background from "../components/Background";
import Default from "../components/Default";
import Input from "@mui/material/Input";
import Greeting from "../components/Greeting";
import Modal from "../components/Modal";
import Error from "../components/Error";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Creating a URL with my API key to fetch information
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  // Creating a function to fetch the data
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    // Fetching the data
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
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
  } else if (error) {
    return <Error />;
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
        <div className="relative bg-black/50 rounded-md items-center max-w-[650px] w-full mx-auto mt-10 p-8 text-white z-10 ">
          <form
            onSubmit={fetchWeather}
            className="flex justify-center items-center w-full m-auto py-3 px-4 bg-transparent border-none text-white rounded-2xl"
          >
            <div>
              <Input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-white focus:outline-none text-sm sm:text-2xl"
                type="text"
                color="primary"
                placeholder="Enter a City"
              />
            </div>
            <button
              onClick={fetchWeather}
              aria-label="Search Button"
              className="px-4"
            >
              <BsSearch size={20} />
            </button>
            <button
              className="relative pl-4"
              aria-label="Refresh Button"
              onClick={refresh}
            >
              <CachedIcon size={10} />
            </button>
          </form>

          {/* Displaying the Weather */}
          {weather.main ? <Weather weather={weather} /> : <Greeting />}

          <button
            onClick={() => setShowModal(true)}
            className="absolute right-[15px]"
            aria-label="More Information Button"
          >
            <BsInfoCircleFill size={20} />
          </button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title={"About the Weather App"}
          >
            <h3 className="my-4">
              <b>Tools Used:</b> <em>Next, Axios, Tailwind</em>
            </h3>
            <p className="my-4">
              This web application utilizes OpenWeatherMap&apos;s API key to to
              fetch short-term forecasts for over 200,000 known cities in the
              world. All you have to do is enter the name of the city you are
              looking for and it will return some information regarding the
              current weather.
            </p>
            <p>
              It will also display the Sunrise and Sunset times in relation to
              Pacific Standard Time (currently I am working on a solution to
              render the Sunrise and Sunset times so that they are dependent on
              location).
            </p>
          </Modal>
        </div>
      </div>
    );
  }
}
