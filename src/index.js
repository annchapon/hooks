import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello, World">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);

  return <p>{value}</p>;
};

ReactDOM.render(<App />, document.getElementById('root'));