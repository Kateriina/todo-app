import TodoInput from "./TodoInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faTrash, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({list, remove, done }) => {
    return(
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    {list.map((entry) => (
                        <div className="todo">
                            <li key={entry.id} className={ !entry.status ? "completed" : ''}> {entry.title}</li>

                            <button className="delete-button"
                                    /*onClick={() => {remove(entry)*/
                                    onClick={() => {remove(entry.id)
                            }}
                            ><FontAwesomeIcon icon={faTrash}/>
                            </button>
                            <button className="delete-button"
                                    onClick={() => {done(entry.id)
                            }}
                            >{
                                entry.status ? <FontAwesomeIcon icon={faLockOpen}/> : <FontAwesomeIcon icon={faLock}/>
                            }
                            </button>
                        </div>)) }
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </>
    )
}

export default TodoList;