import { useNavigate } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-900">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">Không tìm thấy trang</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-950"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}
