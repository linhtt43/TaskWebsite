import { ChevronDown, Search, BookOpen, HelpCircle, FileText, Video } from "lucide-react";
import { useState } from "react";

export default function Help() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Làm thế nào để tạo công việc mới?",
      answer: "Để tạo công việc mới, bạn vào trang 'Danh Sách Công Việc' và nhấn nút 'Thêm Công Việc' ở góc trên bên phải. Điền đầy đủ thông tin như tên công việc, mô tả, người thực hiện, độ ưu tiên và ngày cuối, sau đó nhấn 'Lưu'."
    },
    {
      question: "Làm cách nào để phân công công việc cho thành viên?",
      answer: "Khi tạo hoặc chỉnh sửa công việc, bạn có thể chọn người thực hiện từ danh sách dropdown 'Người thực hiện'. Hệ thống sẽ tự động gửi thông báo cho người được phân công."
    },
    {
      question: "Tôi có thể xem công việc theo dạng Kanban không?",
      answer: "Có, tại trang 'Danh Sách Công Việc', bạn có thể chuyển đổi giữa chế độ xem List và Kanban bằng cách nhấn vào nút toggle ở góc trên bên phải của bảng lọc."
    },
    {
      question: "Làm thế nào để thêm thành viên mới vào hệ thống?",
      answer: "Vào trang 'Quản Lý Thành Viên', nhấn nút 'Thêm Thành Viên'. Điền thông tin cần thiết như họ tên, email, số điện thoại, phòng ban và chức vụ. Sau khi lưu, thành viên mới sẽ nhận được email kích hoạt tài khoản."
    },
    {
      question: "Tôi có thể tạo phòng ban mới như thế nào?",
      answer: "Tại trang 'Quản Lý Phòng Ban', nhấn 'Tạo Phòng Ban'. Nhập tên phòng ban, mô tả, chọn trưởng phòng và xác nhận. Phòng ban mới sẽ được tạo và bạn có thể bắt đầu thêm thành viên vào."
    },
    {
      question: "Làm sao để đặt lịch họp hoặc sự kiện?",
      answer: "Vào trang 'Lịch', nhấn nút 'Thêm Sự Kiện'. Chọn loại sự kiện (meeting, deadline, training), nhập tiêu đề, chọn ngày giờ và thêm người tham gia nếu cần. Hệ thống sẽ gửi thông báo nhắc nhở trước khi sự kiện diễn ra."
    },
    {
      question: "Tôi có thể lọc công việc theo tiêu chí nào?",
      answer: "Bạn có thể lọc công việc theo: Trạng thái (Đã hoàn thành, Đang thực hiện, Đã quá hạn), Thành viên thực hiện, và Độ ưu tiên (Cao, Trung bình, Thấp). Ngoài ra còn có chức năng tìm kiếm theo tên công việc."
    },
    {
      question: "Dashboard hiển thị những thông tin gì?",
      answer: "Dashboard hiển thị tổng quan về: Tổng số công việc, Số công việc đang thực hiện, Số công việc đã hoàn thành, Số công việc đã quá hạn. Ngoài ra còn có bảng danh sách công việc gần đây để theo dõi."
    },
    {
      question: "Làm thế nào để thay đổi thông tin cá nhân?",
      answer: "Vào trang 'Cài Đặt', chọn mục 'Thông tin cá nhân'. Tại đây bạn có thể cập nhật ảnh đại diện, họ tên, email, số điện thoại, phòng ban và chức vụ. Nhớ nhấn 'Lưu thay đổi' để cập nhật."
    },
    {
      question: "Tôi quên mật khẩu, phải làm sao?",
      answer: "Tại trang đăng nhập, nhấn vào 'Quên mật khẩu?'. Nhập email đăng ký của bạn và làm theo hướng dẫn được gửi qua email để đặt lại mật khẩu mới."
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Tài liệu hướng dẫn",
      description: "Hướng dẫn chi tiết về các tính năng",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Video,
      title: "Video tutorial",
      description: "Xem video hướng dẫn sử dụng",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Tài liệu tích hợp API",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: HelpCircle,
      title: "Liên hệ hỗ trợ",
      description: "Gửi yêu cầu hỗ trợ kỹ thuật",
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trợ Giúp</h1>
        <p className="text-gray-500 mt-2">Tìm câu trả lời cho câu hỏi của bạn</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center mb-4`}>
              <resource.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-sm text-gray-600">{resource.description}</p>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Không tìm thấy câu trả lời?</h3>
            <p className="text-gray-700 mb-4">
              Liên hệ với đội ngũ hỗ trợ của chúng tôi để được giải đáp nhanh chóng.
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Gửi yêu cầu hỗ trợ
              </button>
              <button className="px-4 py-2 border border-blue-300 bg-white text-blue-700 rounded-lg hover:bg-blue-50">
                Email: support@taskflow.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
