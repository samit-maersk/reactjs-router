import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <main>
      <aside>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/contacts/1">Contact</Link>
              </li>
            </ul>
        </nav>
      </aside>
      <article>
        <Outlet/>
      </article>
    </main>
  );
}

export default App;
