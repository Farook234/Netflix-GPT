import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieslice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS,
      );
      const json = await data.json();

      const trailers = json.results?.filter((video) => video.type === "Trailer") || [];

      dispatch(addTrailerVideo(trailers[0]));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, [movieId, trailerVideo]);
};

export default useMovieTrailer;
