import { useState, useEffect } from 'react';
import queryString from 'query-string';

function FilterList() {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    // Parse query string to get filter values (as array)
    const parsed = queryString.parse(window.location.search);
    if (parsed.filters) {
      setFilters(parsed.filters.split(','));
    }
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    let updatedFilters = [...filters];

    if (updatedFilters.includes(value)) {
      updatedFilters = updatedFilters.filter((item) => item !== value);
    } else {
      updatedFilters.push(value);
    }

    const newParams = { filters: updatedFilters.join(',') };
    const stringified = queryString.stringify(newParams);
    window.history.pushState(null, '', `?${stringified}`);
    setFilters(updatedFilters);
  };

  return (
    <div>
      <h1>Available Filters</h1>
      <label>
        <input
          type="checkbox"
          value="active"
          checked={filters.includes('active')}
          onChange={handleFilterChange}
        />
        Active
      </label>
      <label>
        <input
          type="checkbox"
          value="inactive"
          checked={filters.includes('inactive')}
          onChange={handleFilterChange}
        />
        Inactive
      </label>
      <h2>Applied Filters</h2>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}

export default FilterList;
