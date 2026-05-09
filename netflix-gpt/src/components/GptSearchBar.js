import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { groq } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json =  await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "act as a movie recommendation engine and suggest movies based on the following query: " +
      searchText.current.value +
      ".only give me name of 5 movies, comma seperated like the example result given ahead. Example result: movie1, movie2, movie3, movie4, movie5";

    const gptResult = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    if (!gptResult.choices) {
      //todo : show error to user
    }
    console.log(gptResult.choices[0].message.content);
    const gptMovies = gptResult.choices[0].message.content.split(", ");

    const promisArray = gptMovies.map(movies => searchMovieTMDB(movies));
    const tmdbResults = await Promise.all(promisArray);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
