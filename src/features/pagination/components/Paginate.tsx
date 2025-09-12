import { useContext } from "react";
import { PageContext } from "../../../context/blog/PageContext";

// there can't be more than 5 pages displayed at the same time
function displayPages(currentPage: number): number[] {
  // special cases for first and last pages
  if (currentPage == 1 || currentPage == 20) {
    return [1, 2, 10, 19, 20];
  }
  if (currentPage == 2) {
    return [1, 2, 3, 10, 20];
  }
  if (currentPage == 19) {
    return [1, 10, 18, 19, 20];
  }
  return [1, currentPage - 1, currentPage, currentPage + 1, 20];
}

export default function Paginate({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const currentPage = useContext(PageContext);
  const pages: number[] = displayPages(currentPage);

  return (
    <>
      <div className="flex gap-4">
        {pages.map((page) => {
          return (
            <span
              onClick={() => {
                setPage(page);
              }}
              className={`border-gray-300  border-1 pt-0.5 pr-2 pl-2 pb-0.5 text-gray-700 cursor-pointer ${
                page == currentPage ? "bg-blue-300" : ""
              }`}
            >
              {page}
            </span>
          );
        })}
      </div>
    </>
  );
}
