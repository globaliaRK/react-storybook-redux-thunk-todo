import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Hr, Table, TodoStyle } from './todo';
import { toggleTodo, addTodoList } from '../../Store/Actions';
import "./style.css"

const Todo = ({ todos, ...props }) => {

    const dispatch = useDispatch();
    todos = useSelector((store) => store.todos);

    const [todoData, setTodoData] = useState(todos);
    const [type, setType] = useState("all");
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        onClick(type === "all" && "all");
    }, [todos]);

    const onClick = (value) => {
        setType(value);
        if (value === "all") {
            setTodoData([...todos]);
        } else {
            let filterData = todos.filter((val) => {
                if (val.status === value) {
                    return val
                }
            });
            setTodoData([...filterData]);
        }
    }

    const onChecked = (value) => {
        dispatch(toggleTodo(value));
        setTodoData([...todos]);
        onClick(type === "all" ? "all" : type);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        inputValue && dispatch(addTodoList({ id: todoData.length, value: inputValue, status: "pending" }));
        setInputValue("");
    }

    return (
        <TodoStyle className="col-6 mx-auto m-5" {...props}>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="inputValue"> -: Value Box :- </label>
                <input type="text" name="value" value={inputValue} id="inputValue" className="col-10  mx-auto form-control" onChange={(e) => setInputValue(e.target.value)} placeholder="Enter Value Here" />
            </form>
            <Table border="1" className="col-10 mx-auto">
                <thead>

                    <tr>
                        <th scope="col">check</th>
                        <th scope="col">id</th>
                        <th scope="col">Value</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <Hr width="360%" />
                <tbody>
                    {
                        todoData.map((value) => (
                            <tr key={value.id}>
                                {/* custom-control custom-checkbox checkbox-xl 
                                custom-control-input
                                custom-control-label
                                */}
                                <th className="">
                                    <input defaultChecked={value.status === "completed" && "true"} className="" id="btn-check-2-outlined" onClick={() => onChecked(value)} type="checkbox" name="check" />
                                    <label className="" htmlFor="btn-check-2-outlined"></label>
                                </th>
                                <td>{value.id}</td>
                                <td>{value.value}</td>
                                <td>{value.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <p>{todoData.length + " Items "}</p>

            <button className="btn btn-primary m-3" onClick={() => onClick("all")}>All</button>
            <button className="btn btn-primary m-3" onClick={() => onClick("pending")} >Pending</button>
            <button className="btn btn-primary m-3" onClick={() => onClick("completed")} >completed</button>

        </TodoStyle>
    );
};

const mapStateToProps = (state) => {
    // console.log(state.todos);
    return { todos: state.todos };
}

export default connect(null, { toggleTodo, addTodoList })(Todo);

// export default Todo;