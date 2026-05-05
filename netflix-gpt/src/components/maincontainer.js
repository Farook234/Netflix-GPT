import { useSelector } from "react-redux"
import VideoTitle from "./videotitle";
import VideoBackground from "./videoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowplayingmovies);
    if (movies === null) return null;

    const mainmovies = movies[0];
    const {original_title, overview, id} = mainmovies;

  return (
    <div>
        <VideoTitle title={original_title}  overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer