import { AppRouter } from "app/providers/RouterProvider";
import { classNames } from "shared/lib";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss'
import {AppHeader} from "widgets/AppHeader";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppHeader />

            <div className={'app-content'}>
                <Sidebar />

                <div className={'page-wrapper'}>
                    <AppRouter />
                </div>
            </div>
        </div>
    );
};

export default App;