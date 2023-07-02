interface todoComponentProps {
    id: string,
    title: string,
    complete: Boolean
}
export default function TodoItem({ id, title, complete }: todoComponentProps) {
    return <li className="flex gap-1 items-center">
        <input
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
        />
        <label
            htmlFor={id}
            className="peer-checked:line-through"
        >{title}</label>
    </li>
}