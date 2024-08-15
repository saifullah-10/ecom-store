import { useState } from "react";

export default function Pagination() {
  const totalProduct = 41;
  const productPerPage = 10;
  const totalPages = Math.ceil(totalProduct / productPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  console.log(currentPage);
  return (
    <div>
      <div className=" flex gap-8 text-lg font-medium">
        <button onClick={() => handlePageChange(currentPage - 1)}>
          {" "}
          Previous
        </button>
        <div className=" flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <>
              <button
                className={`px-4 py-1 ${
                  currentPage === i + 1 ? "bg-orange-600 text-white" : ""
                } rounded-full transition-all `}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            </>
          ))}
        </div>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}
