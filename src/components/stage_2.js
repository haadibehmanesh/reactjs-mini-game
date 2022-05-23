import { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () => {
    const context = useContext(MyContext);

    return (
        <>
            <div className="result_wrapper">
                <h3>
                    The Looser is :
                </h3>
                {context.state.result}
            </div>

            <div onClick={context.resetGame} className="action_button">Start Over</div>
            <div onClick={context.getNewLooser} className="action_button btn_2">Get New Looser</div>
        </>
    );
}

export default Stage2;