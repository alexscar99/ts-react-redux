import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

/*
    If using the constructor method of initializing state object, create an interface
    defining the pieces of state and their type. This can be passed as a second generic
    argument to 'React.Component' (see type definition file).

    Since a 'state' property already exists on 'React.Component' and it is the parent class
    of the component, initializing state as a property on the component will override the
    existing type definition of the property.

    Either way is fine as long as you stay consistent.

1) Constructor approach:

interface AppState {
    counter: number;
}

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = { counter: 0 };
    }
*/

// 2) Property approach:
class App extends React.Component<AppProps> {
    state = { counter: 0 };

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    };

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.state.counter}
            </div>
        );
    }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
