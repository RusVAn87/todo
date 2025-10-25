import { ChangeEvent, FormEvent, useState } from 'react'
// import './Form.scss'

import plusIcon from "../../assets/images/plus.png"
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.styled'

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={text}
                        type="text"
                        onChange={(event) => { setText(event.target.value) }}
                    />
                    <FormControl icon={plusIcon}></FormControl>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}