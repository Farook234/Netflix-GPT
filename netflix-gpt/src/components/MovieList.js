import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {

    console.log(movies)
    if (!movies || movies.length === 0) {
        return null;
    }

    return (
        <div className="px-6">
            <h1 className="text-4xl font-bold py-4 text-white">{title}</h1>
            <div className="flex overflow-x-auto scrollbar-hide space-x-4">
                {movies.map(movie => (
                    <div key={movie.id} className="flex-shrink-0 w-48">
                        <MovieCard posterPath={movie.poster_path} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;