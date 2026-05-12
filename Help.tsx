import { Calendar, User } from "lucide-react";

interface Task {
  id: number;
  name: string;
  priority: string;
  status: string;
  assignee: string;
  dueDate: string;
}

interface KanbanViewProps {
  tasks: Task[];
}

export default function KanbanView({ tasks }: KanbanViewProps) {
  const columns = [
    { id: "todo", title: "Chưa Thực Hiện", color: "border-gray-300" },
    { id: "in-progress", title: "Đang Thực Hiện", color: "border-blue-300" },
    { id: "completed", title: "Đã Hoàn Thành", color: "border-green-300" },
    { id: "overdue", title: "Đã Quá Hạn", color: "border-red-300" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Cao": return "bg-red-500";
      case "Trung bình": return "bg-yellow-500";
      case "Thấp": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => {
        const columnTasks = tasks.filter(task => task.status === column.id);

        return (
          <div key={column.id} className="bg-gray-50 rounded-lg p-4">
            <div className={`border-l-4 ${column.color} pl-3 mb-4`}>
              <h3 className="font-semibold text-gray-900">{column.title}</h3>
              <p className="text-sm text-gray-500">{columnTasks.length} công việc</p>
            </div>

            <div className="space-y-3">
              {columnTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-gray-900 text-sm flex-1">{task.name}</h4>
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)} ml-2 mt-1`}></div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <User className="w-3 h-3" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{task.dueDate}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Độ ưu tiên: {task.priority}</span>
                  </div>
                </div>
              ))}

              {columnTasks.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  Không có công việc
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
