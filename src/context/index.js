import { Component, createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    removePlayerHandler = (index) => {
        let newArray = this.state.players;
        newArray.splice(index, 1);
        this.setState({
            players: newArray

        })
    }
    nextHandler = () => {
        const { players } = this.state;
        if (players.length < 2) {
            toast.error('You need more than one player!', {
                position: toast.POSITION.TOP_LEFT
            })
        } else {

            this.setState({
                stage: 2
            }, () => {
                setTimeout(() => {
                    this.generateLooser();
                }, 1000)
            })

        }

    }
    generateLooser = () => {
        const { players } = this.state;
        this.setState({

            result: players[Math.floor(Math.random() * players.length)]
        })
    }
    resetGame = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ''
        })
    }
    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
                    next: this.nextHandler,
                    getNewLooser: this.generateLooser,
                    resetGame: this.resetGame
                }}>
                    {this.props.children}
                </MyContext.Provider>
                <ToastContainer />
            </>


        );
    }
}
export { MyContext, MyProvider }

export default MyProvider;