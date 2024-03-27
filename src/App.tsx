import Counter from "./components/Counter";
import RouterComponent from "./components/RouterComponent";
import {Link} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Link to={'/'}>Go Home</Link>
            <Link to={'/about'}>Go About</Link>

            <RouterComponent />

            <div>
                Hello! It's App component!
            </div>
            <Counter initial={1} />
        </div>
    );
};

export default App;