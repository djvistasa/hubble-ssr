"use client";

import { getMoviePosterPath } from "@/utils/index";
import { useRouter } from "next/navigation";
import "./styles.scss";
import { IMovieCardProps } from "./types";

function MovieCard({ movie: { poster_path, title, id } }: IMovieCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <a
      className="movie-card"
      data-testid="movie-card"
      style={{
        backgroundImage: `url(${getMoviePosterPath(poster_path, "w500")})`,
      }}
      onClick={handleClick}
    >
      <span className="mask" />
      <p className="info-wrapper">{title}</p>
    </a>
  );
}

export default MovieCard;
