import { useState } from 'react';

type AddTaskProps = {
    onAddTask: (task: string) => void;
};

export default function AddTask({ onAddTask }: AddTaskProps) {
    const [text, setText] = useState<string>('');
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    );
}
