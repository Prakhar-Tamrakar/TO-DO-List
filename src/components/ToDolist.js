import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDolist.css'

const ToDolist = () => {
    let [task, setTask] = useState("");  // array destructuring
    let [taskArray, setTaskArray] = useState([]);
    let clickHandler = () => {
        setTaskArray([...taskArray, task]);
        setTask("");
    }

    let onChangeHandler = (event) => {
        setTask(event.target.value);
    }
    let onKeyDownHandler = (event) => {
        if (event.key === "Enter") {
            clickHandler();
        }
    }

    return (
        <div className="container">
        <h1> Welcome to My To-Do-list APP</h1>

            
            <div className="mb-6">
                <label htmlFor="" className="form-label">Task</label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                    value={task}
                    onKeyDown={onKeyDownHandler}
                />
            </div>
            
            <button onClick={clickHandler}>Add Task</button>
            <ol>
                {
                    taskArray.map((elem, index) => (
                        <li key={index}>{index+1}. {elem}</li>
                    ))
                }
            </ol>
        </div>
       
    );
}

export default ToDolist;

// import { useState } from "react";
// import './ToDolist.css';

// const ToDolist = () => {
//     let [task, setTask] = useState("");  // array destructuring
//     let [taskArray, setTaskArray] = useState([]);

//     let clickHandler = () => {
//         if (task.trim() !== "") {
//             setTaskArray([...taskArray, task]);
//             setTask("");
//         }
//     }

//     let onChangeHandler = (event) => {
//         setTask(event.target.value);
//     }

//     let onKeyDownHandler = (event) => {
//         if (event.key === "Enter") {
//             clickHandler();
//         }
//     }

//     return (
//         <div className="container-wrapper">
//             <div className="container">
//                 <h1> Welcome to My To-Do-list APP</h1>
//                 <div className="mb-6">
//                     <label htmlFor="taskInput" className="form-label">Task</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="taskInput"
//                         aria-describedby="helpId"
//                         placeholder=""
//                         onChange={onChangeHandler}
//                         value={task}
//                         onKeyDown={onKeyDownHandler}
//                     />
//                 </div>
//                 <button onClick={clickHandler}>Add Task</button>
//                 <ol>
//                     {
//                         taskArray.map((elem, index) => (
//                             <li key={index}>{index + 1}. {elem}</li>
//                         ))
//                     }
//                 </ol>
//             </div>
//         </div>
//     );
// }

// export default ToDolist;
