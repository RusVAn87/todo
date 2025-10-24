import { ChangeEvent, FormEvent, useState } from 'react'
import './Form.scss'

type Props = {
    createNewToDo: (text: string) => void,
    // updateNewToDo: (text: string) => void,
    // deleteNewToDo: (text: string) => void,
}

//export const Form = (props = { createNewToDo: Function }) => {
export const Form = (props: Props) => {
    // useState - хук, хранит состояние, text - переменная для хранения состояние и метод его изменения
    const [text, setText] = useState<string>('')



    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (text) {
            props.createNewToDo(text)
            setText('') // Чтобы почистить поле
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={text}
                        type="text"
                        onChange={(event) => { setText(event.target.value) }}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}