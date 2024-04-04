import { AppRouter } from "app/providers/RouterProvider";
import { classNames } from "shared/lib";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss'
import {AppHeader} from "widgets/AppHeader";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppHeader />

            <AppRouter />
        </div>
    );
};

export default App;