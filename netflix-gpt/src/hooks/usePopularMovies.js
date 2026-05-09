import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieslice";
import { API_OPTIONS } from '../utils/constants';

export default function usePopularMovies() {
  const dispatch = useDispatch();

    const PopularMovies = useSelector((store) => store.movies.PopularMovies);


  async function getPopularMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, [dispatch]);
}
