import { AppRouter } from "app/providers/RouterProvider";
import { classNames } from "shared/lib";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss'
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Change Theme</button>

            <AppRouter />
        </div>
    );
};

export default App;