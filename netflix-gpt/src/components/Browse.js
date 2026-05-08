import useNowPlayingMovies from "../hooks/usenowplaying";
import Header from "./Header";
import MainContainer from "./maincontainer";
import SecondaryContainer from "./Secondarycontainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
   useNowPlayingMovies();
   usePopularMovies();

  return (
    <div className="overflow-hidden">
      <Header/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse