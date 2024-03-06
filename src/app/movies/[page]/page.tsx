import Navbar from "@/components/navBar";
import MoviesList from "@/features/movies/components/moviesList";
import { Suspense } from "react";
import "./styles.scss";
import { IPageProps } from "./types";

export default function Movies({ params, searchParams }: IPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <div className="main-inner">
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesList
              page={Number(params?.page) || 1}
              searchTerm={searchParams?.search}
            />
          </Suspense>
        </div>
      </main>
    </>
  );
}
