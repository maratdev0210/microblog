import Paginate from "./components/Paginate";

export default function Pagination({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="w-full flex justify-center mt-8 mb-8">
      <Paginate setPage={setPage} />
    </div>
  );
}
