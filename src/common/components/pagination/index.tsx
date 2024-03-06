"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../button";
import "./styles.scss";
import { IPaginationProps } from "./types";

function Pagination({ currentPage }: IPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const handleNext = () => {
    router.push(`/movies/${currentPage + 1}?${params.toString()}`);
  };

  const handlePrevious = () => {
    router.push(`/movies/${currentPage - 1}?${params.toString()}`);
  };
  return (
    <div className="pagination">
      <Button
        title="Previous"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      />
      <Button title="Next" onClick={handleNext} disabled={false} />
    </div>
  );
}

export default Pagination;
