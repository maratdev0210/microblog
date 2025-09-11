import Paginate from "./components/Paginate";

export default function Pagination({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="w-full flex justify-center">
      <Paginate setPage={setPage} totalPages={20} />
    </div>
  );
}
