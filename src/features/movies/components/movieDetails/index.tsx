import BackButton from "@/components/backButton";
import {
  formatCurrency,
  getMoviePosterPath,
  makeApiRequest,
} from "@/utils/index";
import "./styles.scss";
import { IMovieDetails, IMovieDetailsProps } from "./types";

async function MovieDetails({ movieId }: IMovieDetailsProps) {
  const { error, result } = await makeApiRequest(`/movie/${movieId}`);

  if (error) {
    return <div>Something went wrong</div>;
  }

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    homepage,
    original_language,
    spoken_languages,
    revenue,
    budget,
  } = result as IMovieDetails;

  const backDropImage = backdrop_path
    ? getMoviePosterPath(backdrop_path, "original")
    : "";

  const posterImage = poster_path
    ? getMoviePosterPath(poster_path, "w500")
    : "";

  return (
    <div className="movie-details">
      <div
        className="back-drop"
        style={{ backgroundImage: `url(${backDropImage}` }}
      />
      <div className="details-body">
        <BackButton />
        <div
          className="movie-poster"
          style={{ backgroundImage: `url(${posterImage}` }}
        />

        <h1>{title}</h1>
        <div className="flex-row">
          <p className="label">Released :</p>
          <p className="value">{release_date}</p>
        </div>
        <div className="flex-row">
          <p className="label">Genres :</p>
          <p className="value">
            {genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className="flex-row">
          <p className="label">Runtime :</p>
          <p className="value">{runtime}</p>
        </div>
        {homepage && (
          <div className="flex-row">
            <p className="label">Website :</p>
            <p className="value">
              <a href={homepage} target="_blank" rel="noreferrer">
                {homepage}
              </a>
            </p>
          </div>
        )}

        <div className="flex-row">
          <p className="label">Original language :</p>
          <p className="value">{original_language}</p>
        </div>
        <div className="flex-row">
          <p className="label">Spoken language :</p>
          <p className="value">
            {spoken_languages.map((language) => language.name).join(", ")}
          </p>
        </div>
        <div className="flex-row">
          <p className="label">Revenue :</p>
          <p className="value">{formatCurrency(revenue, "USD")}</p>
        </div>
        <div className="flex-row">
          <p className="label">Budget :</p>
          <p className="value">{formatCurrency(budget, "USD")}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
