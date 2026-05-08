import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store) => store.movies?.trailerVideo
  );

  useMovieTrailer(movieId);

  const embedUrl = trailerVideo?.key
    ? `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${trailerVideo.key}`
    : null;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

      {trailerVideo?.key && (
        <iframe
          className="w-full h-full scale-150"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default VideoBackground;