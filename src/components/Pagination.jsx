import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Changed to useNavigate
import queryString from 'query-string';

function Pagination() {
  const navigate = useNavigate();  // useNavigate hook
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // Parse query parameters from the URL
    const parsed = queryString.parse(window.location.search);
    if (parsed.page) {
      setPage(Number(parsed.page));
    }
    if (parsed.pageSize) {
      setPageSize(Number(parsed.pageSize));
    }
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    updateUrl(newPage, pageSize);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    updateUrl(page, newSize);
  };

  const updateUrl = (newPage, newSize) => {
    const newParams = { page: newPage, pageSize: newSize };
    const stringified = queryString.stringify(newParams);
    navigate(`?${stringified}`);  // Using navigate instead of history.push
  };

  return (
    <div>
      <h1>Pagination</h1>
      <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <span>{` Page ${page} `}</span>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
      <h2>Page Size</h2>
      <select value={pageSize} onChange={(e) => handlePageSizeChange(Number(e.target.value))}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
}

export default Pagination;
