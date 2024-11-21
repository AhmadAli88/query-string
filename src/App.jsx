import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import QueryStringExample from './components/QueryStringExample';
import UpdateQueryStringExample from './components/UpdateQueryStringExample';
import FilterList from './components/FilterList';
import Pagination from './components/Pagination';
import NestedQueryParams from './components/NestedQueryParams';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/?name=John&age=30'>Go to query string example</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Define the route using `element` to specify the component */}
          <Route path='/' element={<QueryStringExample />} />
        </Routes>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to='/update-query'>Go to Update Query String Example</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Define the route for UpdateQueryStringExample */}
          <Route path='/update-query' element={<UpdateQueryStringExample />} />
        </Routes>
      </div>



      <div>
        <nav>
          <ul>
            <li>
              <Link to="/filters">Go to Filter List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Define the route for FilterList */}
          <Route path="/filters" element={<FilterList />} />
        </Routes>
      </div>


      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pagination">Go to Pagination Example</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Define the route for Pagination */}
          <Route path="/pagination" element={<Pagination />} />
        </Routes>
      </div>


      <div>
        <nav>
          <ul>
            <li>
              <Link to="/nested-query">Go to Nested Query Params Example</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Define the route for NestedQueryParams */}
          <Route path="/nested-query" element={<NestedQueryParams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
