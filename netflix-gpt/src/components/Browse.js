import useNowPlayingMovies from "../hooks/usenowplaying";
import Header from "./Header";
import MainContainer from "./maincontainer";
import SecondaryContainer from "./Secondarycontainer";

const Browse = () => {
   useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse