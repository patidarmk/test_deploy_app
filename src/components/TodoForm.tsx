import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {;
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1"
      />
      <Button type="submit">Add</Button>
    </form>
  );
}