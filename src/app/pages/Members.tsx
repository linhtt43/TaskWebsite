import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("");

  const members = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@company.com",
      phone: "0901234567",
      department: "Phát triển",
      role: "Senior Developer",
      status: "active",
      avatar: "NVA"
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranthib@company.com",
      phone: "0902345678",
      department: "Thiết kế",
      role: "UI/UX Designer",
      status: "active",
      avatar: "TTB"
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "levanc@company.com",
      phone: "0903456789",
      department: "Phát triển",
      role: "Backend Developer",
      status: "active",
      avatar: "LVC"
    },
    {
      id: 4,
      name: "Phạm Thị D",
      email: "phamthid@company.com",
      phone: "0904567890",
      department: "Kiểm thử",
      role: "QA Engineer",
      status: "inactive",
      avatar: "PTD"
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      email: "hoangvane@company.com",
      phone: "0905678901",
      department: "DevOps",
      role: "DevOps Engineer",
      status: "active",
      avatar: "HVE"
    },
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    if (status === "active") {
      return (
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Hoạt động
        </span>
      );
    }
    return (
      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
        Không hoạt động
      </span>
    );
  };

  const getAvatarColor = (index: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500"
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý thành viên</h1>
          <p className="text-gray-500 mt-2">Quản lý danh sách thành viên trong tổ chức</p>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Thêm Thành Viên
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, email hoặc phòng ban..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
      </div>

      {/* Members List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thành Viên
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Điện Thoại
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phòng Ban
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chức Vụ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tình Trạng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao Tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map((member, index) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${getAvatarColor(index)} flex items-center justify-center text-white font-medium`}>
                        {member.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(member.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button className="text-green-600 hover:text-green-900 p-2 hover:bg-green-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Không tìm thấy thành viên nào</p>
          </div>
        )}
      </div>
    </div>
  );
}
