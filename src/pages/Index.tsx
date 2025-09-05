import { useState } from "react";
import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { Todo } from "@/types/todo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Simple Todo App</h1>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>My Todos</span>
              <span className="text-sm font-normal text-gray-500">
                {completedCount} / {totalCount} completed
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <TodoForm onAdd={addTodo} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;