import {Link} from "react-router-dom";

import { AppRouter } from "app/providers/RouterProvider";
import { classNames } from "shared/lib";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss'
import {RoutePaths} from "shared/config/routeConfig/routeConfig";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={RoutePaths.home}>Go Home</Link>
            <Link to={RoutePaths.about}>Go About</Link>
            <button onClick={toggleTheme}>Change Theme</button>

            <AppRouter />
        </div>
    );
};

export default App;