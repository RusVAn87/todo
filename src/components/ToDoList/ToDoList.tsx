import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { ToDoListContainer, ToDoListUl } from "./ToDoList.styled"



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }


    return (
        <ToDoListContainer>
            <ToDoListUl className="failed">
                {checkedList()}
            </ToDoListUl>
            <ToDoListUl className="completed">
                {unCheckedList()}
            </ToDoListUl>
        </ToDoListContainer>
    )
}