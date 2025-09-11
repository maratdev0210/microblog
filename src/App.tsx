import Blog from "./features/blog";
import { PageContext } from "./context/blog/PageContext";
import Pagination from "./features/pagination";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  return (
    <PageContext value={page}>
      <div className="*:font-mono">
        <Blog />
        <Pagination setPage={setPage} />
      </div>
    </PageContext>
  );
}

export default App;
