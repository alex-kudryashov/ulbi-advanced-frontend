import Counter from "./components/Counter";

const App = () => {
    return (
        <div>
            <div>
                Hello! It's App component!
            </div>
            <Counter initial={1} />
        </div>
    );
};

export default App;