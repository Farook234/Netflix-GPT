import { useSelector } from "react-redux";
import VideoBackground from "./videoBackground";
import VideoTitle from "./videotitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!movies) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen bg-black">
      <VideoBackground movieId={id} />

      <div className="absolute z-20">
        <VideoTitle
          title={original_title}
          overview={overview}
        />
      </div>
    </div>
  );
};

export default MainContainer;