import { useContext } from "react";
import { PageContext } from "../../../context/blog/PageContext";

export default function Paginate({
  totalPages,
  setPage,
}: {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pages: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentPage = useContext(PageContext);

  return (
    <>
      <div className="flex gap-1">
        {pages.map((page) => {
          return (
            <span
              onClick={() => {
                setPage(page);
              }}
              className={`border-1 pt-0.5 pr-2 pl-2 pb-0.5 text-gray-700 cursor-pointer ${
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
