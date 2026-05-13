import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // May 2026

  const events = [
    { id: 1, title: "Meeting với khách hàng", date: "2026-05-12", time: "09:00", type: "meeting" },
    { id: 2, title: "Deadline dự án A", date: "2026-05-15", time: "17:00", type: "deadline" },
    { id: 3, title: "Review code", date: "2026-05-14", time: "14:00", type: "meeting" },
    { id: 4, title: "Họp team", date: "2026-05-20", time: "10:00", type: "meeting" },
    { id: 5, title: "Training nhân viên mới", date: "2026-05-22", time: "13:00", type: "training" },
  ];

  const monthNames = [
    "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
  ];

  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const getEventsForDay = (day: number | null) => {
    if (!day) return [];
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "meeting": return "bg-blue-500";
      case "deadline": return "bg-red-500";
      case "training": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const days = getDaysInMonth(currentDate);
  const today = new Date();
  const isToday = (day: number | null) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lịch</h1>
          <p className="text-gray-500 mt-2">Quản lý lịch meeting và công việc</p>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Thêm sự kiện
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Day names */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              const dayEvents = getEventsForDay(day);
              return (
                <div
                  key={index}
                  className={`min-h-24 p-2 border rounded-lg ${
                    day ? "bg-white hover:bg-gray-50 cursor-pointer" : "bg-gray-50"
                  } ${isToday(day) ? "border-blue-900 border-2" : "border-gray-200"}`}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-medium mb-1 ${isToday(day) ? "text-blue-900" : "text-gray-900"}`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs text-white px-1 py-0.5 rounded truncate ${getEventColor(event.type)}`}
                            title={event.title}
                          >
                            {event.time} {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">+{dayEvents.length - 2} khác</div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sự Kiện Sắp Tới</h3>
          <div className="space-y-3">
            {events
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((event) => (
                <div key={event.id} className="border-l-4 border-blue-900 pl-3 py-2">
                  <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(event.date).toLocaleDateString('vi-VN', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })} - {event.time}
                  </p>
                  <span className={`inline-block mt-2 text-xs text-white px-2 py-0.5 rounded ${getEventColor(event.type)}`}>
                    {event.type === "meeting" ? "Meeting" : event.type === "deadline" ? "Deadline" : "Training"}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
