import { useState } from "react";
import { CheckCircle2, Clock, AlertCircle, ListTodo, ClipboardList, Users, TrendingUp, Calendar } from "lucide-react";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const itemsPerPage = 10;

  const stats = [
    {
      title: "Tổng Số Công Việc",
      value: "156",
      change: "+12% so với tuần trước",
      icon: ListTodo,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      changePositive: true
    },
    {
      title: "Công Việc Cần Làm",
      value: "58",
      change: "+8% so với tuần trước",
      icon: ClipboardList,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      changePositive: true
    },
    {
      title: "Đang Thực Hiện",
      value: "42",
      change: "+5% so với tuần trước",
      icon: Clock,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      changePositive: true
    },
    {
      title: "Đã Hoàn Thành",
      value: "98",
      change: "+15% so với tuần trước",
      icon: CheckCircle2,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      changePositive: true
    },
    {
      title: "Đã Quá Hạn",
      value: "16",
      change: "-3% so với tuần trước",
      icon: AlertCircle,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      changePositive: false
    },
    {
      title: "Thành Viên Nhóm",
      value: "48",
      change: "+2 thành viên mới",
      icon: Users,
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700",
      changePositive: true
    }
  ];

  const allTasks = [
    { id: 1, name: "Thiết kế giao diện trang chủ", assignee: "Nguyễn Văn A", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-15" },
    { id: 2, name: "Phát triển API đăng nhập", assignee: "Trần Thị B", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-14" },
    { id: 3, name: "Viết tài liệu hướng dẫn", assignee: "Lê Văn C", status: "Đã hoàn thành", priority: "Thấp", dueDate: "2026-05-10" },
    { id: 4, name: "Test chức năng thanh toán", assignee: "Phạm Thị D", status: "Đã quá hạn", priority: "Cao", dueDate: "2026-05-08" },
    { id: 5, name: "Tối ưu database", assignee: "Hoàng Văn E", status: "Đang thực hiện", priority: "Trung bình", dueDate: "2026-05-20" },
    { id: 6, name: "Cập nhật giao diện mobile", assignee: "Nguyễn Văn A", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-18" },
    { id: 7, name: "Sửa lỗi thanh toán", assignee: "Trần Thị B", status: "Đã hoàn thành", priority: "Cao", dueDate: "2026-05-09" },
    { id: 8, name: "Viết unit test", assignee: "Lê Văn C", status: "Đang thực hiện", priority: "Trung bình", dueDate: "2026-05-13" },
    { id: 9, name: "Review code module A", assignee: "Phạm Thị D", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-14" },
    { id: 10, name: "Deploy production", assignee: "Hoàng Văn E", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-16" },
    { id: 11, name: "Backup dữ liệu", assignee: "Nguyễn Văn A", status: "Đang thực hiện", priority: "Trung bình", dueDate: "2026-05-12" },
    { id: 12, name: "Training nhân viên mới", assignee: "Trần Thị B", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-13" },
    { id: 13, name: "Cải thiện performance", assignee: "Lê Văn C", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-15" },
    { id: 14, name: "Setup CI/CD", assignee: "Phạm Thị D", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-14" },
    { id: 15, name: "Nghiên cứu công nghệ mới", assignee: "Hoàng Văn E", status: "Đang thực hiện", priority: "Thấp", dueDate: "2026-05-30" },
    { id: 16, name: "Xây dựng module báo cáo", assignee: "Nguyễn Văn A", status: "Đang thực hiện", priority: "Cao", dueDate: "2026-05-15" },
    { id: 17, name: "Tối ưu tốc độ tải trang", assignee: "Trần Thị B", status: "Đang thực hiện", priority: "Trung bình", dueDate: "2026-05-13" },
    { id: 18, name: "Cập nhật documentation", assignee: "Lê Văn C", status: "Đang thực hiện", priority: "Thấp", dueDate: "2026-05-16" },
  ];

  // Lọc công việc sắp quá hạn (deadline trong vòng 3 ngày)
  const today = new Date("2026-05-12");
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);

  let filteredTasks = allTasks.filter(task => {
    const taskDate = new Date(task.dueDate);
    const isUpcoming = taskDate >= today && taskDate <= threeDaysLater;
    const notCompleted = task.status !== "Đã hoàn thành";
    return isUpcoming && notCompleted;
  });

  // Lọc theo date range nếu có
  if (fromDate || toDate) {
    filteredTasks = filteredTasks.filter(task => {
      const taskDate = new Date(task.dueDate);
      const from = fromDate ? new Date(fromDate) : null;
      const to = toDate ? new Date(toDate) : null;

      if (from && to) {
        return taskDate >= from && taskDate <= to;
      } else if (from) {
        return taskDate >= from;
      } else if (to) {
        return taskDate <= to;
      }
      return true;
    });
  }

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const upcomingTasks = filteredTasks.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Đã hoàn thành": return "bg-green-100 text-green-800";
      case "Đang thực hiện": return "bg-blue-100 text-blue-800";
      case "Đã quá hạn": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Cao": return "bg-red-100 text-red-800";
      case "Trung bình": return "bg-yellow-100 text-yellow-800";
      case "Thấp": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Tổng Quan</h1>
        <p className="text-gray-500 mt-2">Theo dõi tình hình công việc tổng thể</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <TrendingUp className={`w-3 h-3 ${stat.changePositive ? 'text-green-500' : 'text-red-500'}`} />
                  <p className={`text-xs ${stat.changePositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </p>
                </div>
              </div>
              <div className={`${stat.bgColor} p-2.5 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Deadline Tasks */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Công Việc Sắp Quá Hạn</h2>
            <p className="text-sm text-gray-500">Deadline trong vòng 3 ngày tới</p>
          </div>

          {/* Date Range Filter */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <label className="text-sm text-gray-600">Từ ngày:</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Đến ngày:</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => {
                  setToDate(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {(fromDate || toDate) && (
              <button
                onClick={() => {
                  setFromDate("");
                  setToDate("");
                  setCurrentPage(1);
                }}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên Công Việc
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Người Thực Hiện
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Độ Ưu Tiên
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng Thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày Cuối
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingTasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{task.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{task.assignee}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredTasks.length > 0 ? (
          totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Hiển thị <span className="font-medium">{startIndex + 1}</span> đến{' '}
                <span className="font-medium">{Math.min(endIndex, filteredTasks.length)}</span> trong tổng số{' '}
                <span className="font-medium">{filteredTasks.length}</span> công việc
              </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Trước
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Sau
              </button>
            </div>
            </div>
          )
        ) : (
          <div className="px-6 py-4 border-t border-gray-200 text-center text-gray-500">
            Không có công việc sắp quá hạn trong khoảng thời gian này
          </div>
        )}
      </div>
    </div>
  );
}
