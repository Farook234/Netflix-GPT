import useNowPlayingMovies from "../hooks/usenowplaying";
import Header from "./Header";
import MainContainer from "./maincontainer";
import SecondaryContainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
   const showGptSearch = useSelector(store => store.gpt.showGptSearch)
   useNowPlayingMovies();
   usePopularMovies();

  return (
    <div className="overflow-hidden">
      <Header/>
      {
        showGptSearch ? <GptSearch/> : <> <MainContainer />
      <SecondaryContainer /></>
      }
    </div>
  );
};

export default Browse