import { makeApiRequest } from "@/utils/index";
import { IMovieResponse } from "./types";

const getMovies = async (page: number, searchTerm?: string) => {
  if (searchTerm) {
    const { error, result } = await makeApiRequest(
      `/search/movie?query=${searchTerm}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
    );

    if (error) {
      return [];
    }

    const { results: movies } = result as IMovieResponse;

    return movies;
  }

  const { error, result } = await makeApiRequest(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
  );

  if (error) {
    return [];
  }

  const { results: movies } = result as IMovieResponse;

  return movies;
};

export { getMovies };
