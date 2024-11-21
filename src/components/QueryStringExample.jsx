// QueryStringExample.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function QueryStringExample() {
  const [queryParams, setQueryParams] = useState({});
  const location = useLocation();

  useEffect(() => {
    // Parse the query string whenever the location changes
    const parsed = queryString.parse(location.search);
    setQueryParams(parsed);
  }, [location]);

  return (
    <div>
      <h1>Query String Parameters</h1>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
    </div>
  );
}

export default QueryStringExample;
