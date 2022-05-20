import { Component, createContext } from "react";

const MyContext = createContext();

class MyProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>

        );
    }
}
export { MyContext, MyProvider }

export default MyProvider;