import { useEffect, useState } from 'react';
import queryString from 'query-string';

function NestedQueryParams() {
  const [userInfo, setUserInfo] = useState({ name: '', age: '' });

  useEffect(() => {
    // Parse query parameters from the URL and handle nested objects
    const parsed = queryString.parse(window.location.search, { parseBooleans: true, parseNumbers: true });

    // Check if the 'user' key is an object with nested properties
    if (parsed.user) {
      setUserInfo({ name: parsed.user.name, age: parsed.user.age });
    }
  }, []);

  return (
    <div>
      <h1>User Info</h1>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </div>
  );
}

export default NestedQueryParams;
