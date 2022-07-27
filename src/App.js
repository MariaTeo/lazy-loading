import './index.css';
import Home from './component/home-page';
import TabPage from './component/tab-page';
import { Router, Link } from '@reach/router';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tab-page">Tabs page</Link>
          </li>
        </ul>
      </nav>

      <Router>
        <Home path="/" />
        <TabPage path="/tab-page" />
      </Router>
    </div>
  );
};

export default App;
