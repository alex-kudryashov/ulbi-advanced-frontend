import Counter from "./components/Counter";
import RouterComponent from "./components/RouterComponent";
import {Link} from "react-router-dom";
import './styles/index.scss'
import useTheme from "./Theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Go Home</Link>
            <Link to={'/about'}>Go About</Link>
            <button onClick={toggleTheme}>Change Theme</button>

            <RouterComponent />

            <div>
                <h1>Hello!</h1>
                <p>It's App component!</p>
            </div>
            <Counter initial={1} />
        </div>
    );
};

export default App;