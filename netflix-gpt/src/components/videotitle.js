import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black via-black/70 to-transparent text-white z-20">

      <div className="pt-40 px-24 max-w-xl md:max-w-2xl">

        <h1 className="text-4xl w-80 w-max-content font-bold">
          {title}
        </h1>

        <p className="py-2 text-lg w-80 w-max-content text-gray-200">
          {overview}
        </p>

        <div className="flex gap-2">

          <button className="bg-blue-500 hover:bg-blue-700 text-nowrap text-white font-bold py-2 px-14 rounded">
            <PlayArrowIcon /> Play
          </button>

          <button className="bg-blue-800 hover:bg-blue-700 w-max-content text-nowrap text-white font-bold text-sm py-2 px-14 rounded">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;