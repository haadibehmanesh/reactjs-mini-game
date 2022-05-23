import { Component, createContext } from "react";

const MyContext = createContext();

class MyProvider extends Component {
    state = {
        stage: 1,
        players: [],
        result: ''
    }
    addPlayerHandler = (name) => {

        this.setState((prevState) => ({
            players: [...prevState.players, name]
        })
        )

    }
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler
            }}>
                {this.props.children}
            </MyContext.Provider>

        );
    }
}
export { MyContext, MyProvider }

export default MyProvider;