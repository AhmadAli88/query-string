import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

function UpdateQueryStringExample() {
  const navigate = useNavigate(); // useNavigate hook instead of useHistory
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  const updateQueryParams = () => {
    const newParams = { page, filter };
    const stringified = queryString.stringify(newParams);
    navigate(`?${stringified}`); // Use navigate instead of history.push
  };

  return (
    <div>
      <h1>Update Query Parameters</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter filter"
      />
      <input
        type="number"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
        placeholder="Enter page number"
      />
      <button onClick={updateQueryParams}>Update URL</button>
    </div>
  );
}

export default UpdateQueryStringExample;
