import MovieDetails from "@/features/movies/components/movieDetails";

export default function Movie({ params }: IPageProps) {
  return <div>{params?.id && <MovieDetails movieId={params?.id} />}</div>;
}
