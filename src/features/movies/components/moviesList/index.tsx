import Pagination from "@/components/pagination";
import MovieCard from "../movieCard";
import "./styles.scss";
import { IMoviesListProps } from "./types";
import { getMovies } from "./utils";

async function MoviesList({ page, searchTerm }: IMoviesListProps) {
  const movies = await getMovies(page, searchTerm);

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Pagination currentPage={Number(page) || 1} />
    </div>
  );
}

export default MoviesList;
