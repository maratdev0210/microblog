import { useContext, type SyntheticEvent } from "react";
import { PageContext } from "../../../context/blog/PageContext";

// there can't be more than 5 pages displayed at the same time
function displayPages(currentPage: number): (number | string)[] {
  switch (currentPage) {
    case 1:
    case 20:
      return [1, 2, "...", 10, "...", 19, 20];
    case 2:
      return [1, 2, 3, "...", 10, "...", 20];
    case 19:
      return [1, "...", 10, "...", 18, 19, 20];
    default:
      return [1, currentPage - 1, currentPage, currentPage + 1, 20];
  }
}

export default function Paginate({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number | string>>;
}) {
  const currentPage = useContext(PageContext);
  const pages: (number | string)[] = displayPages(currentPage);

  return (
    <>
      <div className="flex gap-4">
        {pages.map((page) => {
          return (
            <span
              onClick={(event: React.MouseEvent) => {
                if (event.currentTarget.innerHTML === "...") {
                  // do not set the page in this case
                  return;
                }

                setPage(page);
              }}
              className={`border-gray-300 pt-0.5 pr-2 pl-2 pb-0.5 text-gray-700 cursor-pointer ${
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
