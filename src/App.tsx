import { useState } from "react";
import "./App.css";

const items = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  name: `Item ${index + 1}`,
}));


const PaginationChallenge = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  const handleNext = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="pagination-challenge">
      <h1>Pagination Challenge</h1>
      <div className="item-list">
        <ul>
          {currentItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <p>{`Page ${currentPage} of ${totalPages}`}</p>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <div className="items-per-page">
        <label>Items per Page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value="5">{itemsPerPage === 5 ? "✔ 5" : "5"}</option>
          <option value="10">{itemsPerPage === 10 ? "✔ 10" : "10"}</option>
          <option value="20">{itemsPerPage === 20 ? "✔ 20" : "20"}</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationChallenge;
