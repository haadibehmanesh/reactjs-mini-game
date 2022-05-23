import { useContext, useRef, useState } from "react";
import { Button, Alert, Form } from "react-bootstrap";
import { MyContext } from "../context";


const Stage1 = () => {
    const TextInput = useRef();
    const context = useContext(MyContext);
    const [error, setError] = useState([false, '']);
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = TextInput.current.value;
        const validate = validateInput(value);

        if (validate) {
            setError([false, '']);
            context.addPlayer(value);
            TextInput.current.value = '';
        }


    }
    const validateInput = (value) => {
        if (value === "") {
            setError([true, 'sorry you need to add something'])
            return false
        }
        if (value.length <= 2) {
            setError([true, 'sorry , you need 3 chars at least'])
            return false

        }
        return true;

    }
    const handleRemovePlayer = (index) => {

        context.removePlayer(index);
        context.toast("The player has removed");

    }
    return (

        <>

            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control type="text" placeholder="Add Player Name" name="player" ref={TextInput} />
                </Form.Group>
                {
                    error[0] ? <Alert className="mt-2" key='danger' variant='danger'>
                        {error[1]}
                    </Alert> : null
                }


                <Button className="mt-2" variant="primary" type="submit">Add player</Button>
            </Form>
            {context.state.players && context.state.players.length > 0 ?

                <>
                    <hr />
                    <ul className="list-group">
                        {
                            context.state.players.map((item, index) => (
                                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={index} >
                                    {item}
                                    < span onClick={() => handleRemovePlayer(index)} className="badge badge-pill badge-danger" > X</span>
                                </li>
                            )
                            )
                        }



                    </ul>
                    <div onClick={context.next} className="action_button">
                        Next
                    </div>

                </>


                : null
            }

        </>
    );
}

export default Stage1;