import React from 'react';
import Counter from "../../components/Counter";

const HomeView = () => {
    return (
        <div>
            <h1>Home</h1>
            <Counter initial={1} />
        </div>
    );
};

export default HomeView;