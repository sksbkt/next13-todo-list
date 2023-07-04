//? NEXT FEATURE
//? CLIENT SIDE
"use client"

interface todoComponentProps {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}
export function TodoItem({ id, title, complete, toggleTodo }: todoComponentProps) {
    return <li className="flex gap-1 items-center">
        <input
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label
            htmlFor={id}
            className="peer-checked:line-through"
        >{title}</label>
    </li>
}