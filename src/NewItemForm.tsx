import { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";    

type TNewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: TNewItemFormProps) => {
    const [text, setText] = useState('');
    const inputRef = useFocus();

    const handleAddText = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Enter') {
            onAdd(text);
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={(e) => setText(e.target.value)} ref={inputRef} placeholder="New task"
                onKeyDown={handleAddText}/>
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}