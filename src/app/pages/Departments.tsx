import { Plus, Edit, Trash2, Users } from "lucide-react";

export default function Departments() {
  const departments = [
    {
      id: 1,
      name: "Phát triển",
      description: "Phòng ban phát triển sản phẩm và công nghệ",
      manager: "Nguyễn Văn A",
      memberCount: 15,
      createdDate: "2025-01-10"
    },
    {
      id: 2,
      name: "Thiết kế",
      description: "Phòng ban thiết kế UI/UX và đồ họa",
      manager: "Trần Thị B",
      memberCount: 8,
      createdDate: "2025-01-15"
    },
    {
      id: 3,
      name: "Kiểm thử",
      description: "Phòng ban đảm bảo chất lượng sản phẩm",
      manager: "Phạm Thị D",
      memberCount: 6,
      createdDate: "2025-02-01"
    },
    {
      id: 4,
      name: "DevOps",
      description: "Phòng ban vận hành và triển khai hệ thống",
      manager: "Hoàng Văn E",
      memberCount: 5,
      createdDate: "2025-02-15"
    },
    {
      id: 5,
      name: "Marketing",
      description: "Phòng ban marketing và truyền thông",
      manager: "Lê Thị F",
      memberCount: 10,
      createdDate: "2025-03-01"
    },
    {
      id: 6,
      name: "Nhân sự",
      description: "Phòng ban quản lý nguồn nhân lực",
      manager: "Vũ Văn G",
      memberCount: 4,
      createdDate: "2025-01-05"
    },
  ];

  const getDepartmentColor = (index: number) => {
    const colors = [
      { bg: "bg-blue-50", border: "border-blue-200", icon: "text-blue-900" },
      { bg: "bg-green-50", border: "border-green-200", icon: "text-green-600" },
      { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600" },
      { bg: "bg-yellow-50", border: "border-yellow-200", icon: "text-yellow-600" },
      { bg: "bg-pink-50", border: "border-pink-200", icon: "text-pink-600" },
      { bg: "bg-indigo-50", border: "border-indigo-200", icon: "text-indigo-600" },
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý phòng ban</h1>
          <p className="text-gray-500 mt-2">Quản lý các phòng ban trong tổ chức</p>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Tạo Phòng Ban
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Tổng Phòng Ban</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{departments.length}</p>
            </div>
            <div className="bg-blue-50 p-2.5 rounded-lg">
              <Users className="w-5 h-5 text-blue-900" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Tổng Thành Viên</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {departments.reduce((sum, dept) => sum + dept.memberCount, 0)}
              </p>
            </div>
            <div className="bg-green-50 p-2.5 rounded-lg">
              <Users className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Trung Bình/Phòng</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {Math.round(departments.reduce((sum, dept) => sum + dept.memberCount, 0) / departments.length)}
              </p>
            </div>
            <div className="bg-purple-50 p-2.5 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, index) => {
          const colors = getDepartmentColor(index);
          return (
            <div
              key={dept.id}
              className={`${colors.bg} rounded-lg border ${colors.border} p-4 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg bg-white`}>
                    <Users className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{dept.name}</h3>
                    <p className="text-xs text-gray-500">{dept.memberCount} thành viên</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-white rounded transition-colors">
                    <Edit className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-white rounded transition-colors">
                    <Trash2 className="w-3.5 h-3.5 text-red-600" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-600 mb-3">{dept.description}</p>

              <div className="border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="text-gray-500">Trưởng phòng</p>
                    <p className="font-medium text-gray-900">{dept.manager}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Ngày tạo</p>
                    <p className="font-medium text-gray-900">
                      {new Date(dept.createdDate).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Department List Table */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Danh Sách Chi Tiết</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên Phòng Ban
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mô Tả
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trưởng Phòng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Số Thành Viên
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày Tạo
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {departments.map((dept) => (
                <tr key={dept.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{dept.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{dept.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{dept.manager}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{dept.memberCount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(dept.createdDate).toLocaleDateString('vi-VN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
