import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar as CalendarIcon,
  Users,
  Building2,
  Settings as SettingsIcon,
  HelpCircle,
  User,
  LogOut,
  ChevronDown,
  Bell
} from "lucide-react";

export default function Layout() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationCount = 5;

  const workManagementItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard tổng quan", exact: true },
    { path: "/tasks", icon: CheckSquare, label: "Danh sách công việc" },
    { path: "/calendar", icon: CalendarIcon, label: "Lịch" },
    { path: "/members", icon: Users, label: "Quản lý thành viên" },
    { path: "/departments", icon: Building2, label: "Quản lý phòng ban" },
  ];

  const otherItems = [
    { path: "/settings", icon: SettingsIcon, label: "Cài đặt" },
    { path: "/help", icon: HelpCircle, label: "Trợ giúp" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-b border-blue-800">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left: System Title */}
          <div className="flex-1">
            <h1 className="text-xl font-bold">Hệ thống quản lý công việc</h1>
            <p className="text-xs text-blue-100 mt-0.5">Theo dõi tiến độ - Realtime</p>
          </div>

          {/* Right: Notifications & Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Bell className="w-6 h-6 text-white" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowNotifications(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">Thông báo</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {[
                        { id: 1, title: "Công việc mới được giao", message: "Bạn có 3 công việc mới", time: "5 phút trước" },
                        { id: 2, title: "Deadline sắp đến", message: "Công việc 'Thiết kế giao diện' sẽ hết hạn trong 2 ngày", time: "1 giờ trước" },
                        { id: 3, title: "Hoàn thành công việc", message: "Trần Thị B đã hoàn thành 'Phát triển API'", time: "2 giờ trước" },
                        { id: 4, title: "Meeting nhắc nhở", message: "Meeting với khách hàng lúc 14:00", time: "3 giờ trước" },
                        { id: 5, title: "Công việc quá hạn", message: "Bạn có 2 công việc đã quá hạn", time: "5 giờ trước" },
                      ].map((notif) => (
                        <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                          <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                          <p className="text-xs text-gray-600 mt-1">{notif.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-gray-200 text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Xem tất cả thông báo
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-blue-700 font-medium">NV</span>
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-sm font-medium text-white">Nguyễn Văn A</p>
                  <p className="text-xs text-blue-100">admin@company.com</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-white transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {showProfileMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowProfileMenu(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        window.location.href = '/settings';
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <span>Thông tin cá nhân</span>
                    </button>
                    <div className="border-t border-gray-200 my-2"></div>
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        alert('Đăng xuất thành công');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <nav className="flex-1 p-3 overflow-y-auto pt-4">
          {/* Quản lý công việc */}
          <div className="mb-6">
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Quản lý công việc
            </h3>
            <div className="space-y-1">
              {workManagementItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Khác */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Khác
            </h3>
            <div className="space-y-1">
              {otherItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
