import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ value, setValue ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>
          +
        </button>
        <button onClick={() => setVisible(false)}>
          Hide
        </button>
        <ClassCounter value={value} />
        <HookCounter value={value} />
        <Notification />
      </div>      
    );
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>
  }
};

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('useEffect');
    return () => console.log('clear');
  }, [ value ]);

  return <p>{ value }</p>;
};

const Notification = () => {
  const [ visible, setVisible ] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div>
      { visible && <p>Notification</p> }
    </div>
  );
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class: componentDidMount');
  }

  componentDidUpdate() {
    console.log('class: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('class: componentWillUnmount');
  }

  render() {
    return <p>{ this.props.value }</p>;
  }
} 

ReactDOM.render(<App />, document.getElementById('root'));