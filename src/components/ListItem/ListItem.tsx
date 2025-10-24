import { NavLink } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import classes from "./ListItem.module.scss"

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <NavLink
            className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            to={`/list/${todo.id}`}
            rel="noreferrer"
        >{todo.text}</NavLink>
    )
}