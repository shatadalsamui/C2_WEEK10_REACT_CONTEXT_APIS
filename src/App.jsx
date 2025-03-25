import {createContext, useContext, useState} from "react"; // Importing necessary hooks and functions from React

const CountContext = createContext(); // Creating a context object to hold the shared state

function CountContextProvider({children}) {
    const [count, setCount] = useState(0); // Using useState to manage the shared state `count` and its updater function `setCount`

    return (
        <CountContext.Provider value={{count, setCount
        }}> {/*// Wrapping children components with CountContext.Provider and passing the state and updater function as value*/}
            {children} {/*// Rendering child components inside the provider*/}
        </CountContext.Provider>
    );
}

function Parent() {
    return (
        <CountContextProvider> {/*// Wrapping child components with CountContextProvider to provide shared state*/}
            <Increase/> {/*{// Rendering Increase component}*/}
            <Decrease/> {/*{ // Rendering Decrease component}*/}
            <Value/> {/*{// Rendering Value component}*/}
        </CountContextProvider>
    );
}

function Decrease() {
    const {count, setCount} = useContext(CountContext); // Accessing `count` and `setCount` from CountContext using useContext

    return <button onClick={() => setCount(count - 1)}>Decrease</button>; // Button that decreases the count by 1 when clicked
}

function Increase() {
    const {count, setCount} = useContext(CountContext); // Accessing `count` and `setCount` from CountContext using useContext

    return <button onClick={() => setCount(count + 1)}>Increase</button>; // Button that increases the count by 1 when clicked
}

function Value() {
    const {count} = useContext(CountContext); // Accessing only `count` from CountContext using useContext

    return <p>Count: {count}</p>; // Displaying the current count value in a paragraph element
}

const App = () => {
    return (
        <div> {/* Main container div */}
            <Parent/> {/* Rendering Parent component */}
        </div>
    );
};

export default App; // Exporting App as default so it can be used in other files
