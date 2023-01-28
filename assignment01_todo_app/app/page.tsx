'use client';
import { useState } from 'react'
import { NextPage } from 'next'

interface Todo {
  id: number
  text: string
  done: boolean
}

const TodoApp: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setText('')
  }

  const handleToggle = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.done ? 'line-through' : 'none'
              }}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default function Home() {
  return (
    <main>
     <TodoApp />
    </main>
  )
}


