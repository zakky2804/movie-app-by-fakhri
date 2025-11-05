"use client";

import { IMovie } from "@/interface/movie";
import SquareCard from "./SquareCard";
import { useEffect, useRef, useState } from "react";
import SearchBar from "@/ui/SearchBar";
import FallbackNotFound from "./FallbackNotFound";

interface GridOfCardsProps {
  link: string;
  pathApi: string;
  initialData: IMovie;
}

const GridOfCards = ({ link, pathApi, initialData }: GridOfCardsProps) => {
  const [cardData, setCardData] = useState<IMovie>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState(`${pathApi}/populer?`);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function getMovies() {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}page=${currentPage}`);
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
  }, [apiUrl, currentPage]);

  const handleSearch = (query: string) => {
    setCurrentPage(1);
    setApiUrl(`${pathApi}/search?query=${query}&`);
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
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-2 gap-y-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              style={{
                contain: "layout paint",
                contentVisibility: "auto",
              }}
            >
              <div className="animate-pulse bg-secondary rounded aspect-[500/749] mb-1" />
              <div className="animate-pulse bg-secondary rounded h-4 w-28 sm:w-48" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {cardData?.results.length === 0 ? (
            <FallbackNotFound
              title="No results"
              message="We couldn't find any results matching your search.
Please double-check the spelling of the title or try different keywords."
            />
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
      )}
    </>
  );
};

export default GridOfCards;
