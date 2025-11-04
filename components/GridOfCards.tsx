"use client";

import { IMovie } from "@/interface/movie";
import SquareCard from "./SquareCard";
import { useEffect, useState } from "react";
import SearchBar from "@/ui/SearchBar";

interface GridOfCardsProps {
  link: string;
  pathApi: string;
}

const GridOfCards = ({ link, pathApi }: GridOfCardsProps) => {
  const [cardData, setCardData] = useState<IMovie | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const res = await fetch(`${pathApi}/populer?page=${currentPage}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data: IMovie = await res.json();
        setCardData(data);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error(String(error));
        }
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [currentPage, pathApi]);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${pathApi}/search?query=${query}`);
      if (!res.ok) throw new Error("Failed to fetch search results");
      const data = await res.json();
      setCardData(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (currentPage < (cardData?.total_pages || 1)) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-2 gap-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              style={{
                contain: "layout paint",
                contentVisibility: "auto",
              }}
            >
              <div className="animate-pulse bg-secondary rounded aspect-[500/749] mb-3" />
              <div className="animate-pulse bg-secondary rounded h-4 w-28 sm:w-48" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-2 gap-y-4 mb-4">
            {cardData?.results.map((item) => (
              <SquareCard key={item.id} item={item} link={link} />
            ))}
          </div>

          <div className="mx-auto w-fit">
            <p className="text-sm text-center mb-2">
              Page {currentPage} of {cardData?.total_pages}
            </p>
            <div className="space-x-2">
              <button
                className="bg-secondary hover:bg-primary active:bg-primary active:scale-95 duration-200 rounded px-4 py-2 text-title-text/90 disabled:bg-secondary/80 disabled:text-foreground disabled:cursor-not-allowed"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className="bg-secondary hover:bg-primary active:bg-primary active:scale-95 duration-200 rounded px-4 py-2 text-title-text/90 disabled:bg-secondary/80 disabled:text-foreground disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={currentPage === cardData?.total_pages}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GridOfCards;
