import React, {useRef} from 'react'

interface TodoFormProps {
  addTodo: (todoText: string) => void
}

const TodoForm = ({addTodo}: TodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const todoText = inputRef.current!.value.trim()
    if (todoText) { addTodo(todoText) }
    inputRef.current!.value = ''
  }

  return <form onSubmit={handleFormSubmit}>
    <label htmlFor="todo-input"></label>
    <input type="text" id="todo-input" placeholder="What needs to be done?" ref={inputRef}/>
    <button type="submit">Add Todo</button>
  </form>
}

export { TodoForm }