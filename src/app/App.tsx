import {Link} from "react-router-dom";

import {classNames} from "shared/lib";
import {useTheme} from "app/providers/ThemeProvider";

import RouterComponent from "./components/RouterComponent";

import './styles/index.scss'

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