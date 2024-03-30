import RouterComponent from "./components/RouterComponent";
import {Link} from "react-router-dom";
import './styles/index.scss'
import useTheme from "./Theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Go Home</Link>
            <Link to={'/about'}>Go About</Link>
            <button onClick={toggleTheme}>Change Theme</button>

            <RouterComponent />
        </div>
    );
};

export default App;