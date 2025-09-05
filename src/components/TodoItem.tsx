import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg">
      <Checkbox
        checked={completed}
        onCheckedChange={() => onToggle(id)}
      />
      <span className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}>
        {text}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};