import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../utils/movieslice";
import { API_OPTIONS } from '../utils/constants';

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();

  async function getNowPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addnowplayingmovies(json.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}