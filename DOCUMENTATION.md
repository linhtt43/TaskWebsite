# Hệ Thống Quản Lý Công Việc

## Tổng Quan

Hệ thống quản lý công việc toàn diện, giúp tổ chức theo dõi, phân công và quản lý công việc hiệu quả. Hệ thống được xây dựng với React, TypeScript, Tailwind CSS và React Router.

---
## Giao Diện Tổng Thể

### Header Top (Cố định)
- **Background:** Trắng (bg-white)
- **Border:** border-b border-gray-200
- **Chiều cao:** py-4 (padding vertical)
- **Nội dung:**
  - **Bên trái:** 
    - Tiêu đề: "Hệ thống quản lý công việc" (text-xl, font-bold, text-blue-700)
    - Sub-text: "Theo dõi tiến độ - Realtime" (text-xs, text-gray-500)
  - **Bên phải:**
    - 🔔 **Icon Chuông Thông Báo:** 
      - Icon màu xanh (text-blue-700)
      - Hover: bg-gray-100
      - Badge đỏ hiển thị số lượng (5)
      - Click hiển thị dropdown 320px
      - Danh sách 5 thông báo gần nhất
      - Nút "Xem tất cả thông báo"
    - 👤 **Avatar & Profile Menu:**
      - Avatar tròn bg-blue-100 với chữ viết tắt màu xanh
      - Tên: Nguyễn Văn A (text-blue-700)
      - Email: admin@company.com (text-gray-500)
      - Icon ChevronDown màu xanh (text-blue-700)
      - Hover: bg-gray-100
      - Dropdown menu:
        - "Thông tin cá nhân"
        - Divider
        - "Đăng xuất" (màu đỏ)

### Sidebar Menu (Bên trái)
- **Chiều rộng:** 224px (w-56)
- **Background:** Trắng
- **Cấu trúc:** Chia 2 block

#### Block 1: Quản lý công việc
- 📊 Dashboard tổng quan (/)
- ✅ Danh sách công việc (/tasks)
- 📅 Lịch (/calendar)
- 👥 Quản lý thành viên (/members)
- 🏢 Quản lý phòng ban (/departments)

#### Block 2: Khác
- ⚙️ Cài đặt (/settings)
- ❓ Trợ giúp (/help)

**Styling:**
- Block header: text-xs, font-semibold, uppercase, text-gray-500
- Menu items: text-sm, px-3, py-2.5
- Active state: bg-blue-50, text-blue-700, font-medium
- Hover: bg-gray-50
- Icons: w-4, h-4

---

## Cấu Trúc Hệ Thống

### Thư Mục 1: Quản Lý Công Việc

#### 1. Dashboard Tổng Quan

**Mục đích:** Hiển thị tổng quan tình hình công việc của toàn tổ chức

**Đường dẫn:** `/`

**Layout:** Grid 3 cột (lg:grid-cols-3), gap-4

**Các chỉ số thống kê (6 cards):**

1. **Tổng số công việc**
   - Giá trị: 156
   - Icon: ListTodo (blue)
   - Change: "+12% so với tuần trước" ✓
   - Màu: blue-500/blue-50

2. **Công việc cần làm**
   - Giá trị: 58
   - Icon: ClipboardList (purple)
   - Change: "+8% so với tuần trước" ✓
   - Màu: purple-500/purple-50

3. **Đang thực hiện**
   - Giá trị: 42
   - Icon: Clock (yellow)
   - Change: "+5% so với tuần trước" ✓
   - Màu: yellow-500/yellow-50

4. **Đã hoàn thành**
   - Giá trị: 98
   - Icon: CheckCircle2 (green)
   - Change: "+15% so với tuần trước" ✓
   - Màu: green-500/green-50

5. **Đã quá hạn**
   - Giá trị: 16
   - Icon: AlertCircle (red)
   - Change: "-3% so với tuần trước" ✗
   - Màu: red-500/red-50

6. **Thành viên nhóm**
   - Giá trị: 48
   - Icon: Users (indigo)
   - Change: "+2 thành viên mới" ✓
   - Màu: indigo-500/indigo-50

**Cấu trúc mỗi Card:**
- Padding: p-4 (giảm từ p-6)
- Title: text-xs, font-medium, text-gray-600
- Value: text-2xl, font-bold (giảm từ text-3xl)
- Change indicator:
  - Icon TrendingUp (w-3 h-3)
  - Text: text-xs
  - Color: green-600 (positive) / red-600 (negative)
- Icon background: p-2.5, rounded-lg
- Icon size: w-5 h-5
- **Không có progress bar** (đã bỏ)

---

#### Công Việc Sắp Quá Hạn

**Mục đích:** Theo dõi công việc sắp đến deadline để push tiến độ

**Tiêu chí lọc:** Deadline trong vòng 3 ngày tới, chưa hoàn thành

**Bộ lọc:**

1. **Tìm kiếm:**
   - Icon Search bên trái
   - Placeholder: "Tìm kiếm công việc..."
   - Real-time filtering

2. **Lọc độ ưu tiên:**
   - Dropdown với icon ChevronDown
   - Options: Tất cả / Cao / Trung bình / Thấp
   - Position: right-3 top-1/2

3. **Lọc theo ngày:**
   - Icon Calendar
   - Input "Từ ngày" (date picker)
   - Input "Đến ngày" (date picker)
   - Nút "Xóa bộ lọc" (hiện khi có filter)

**Hiển thị:**
- **Default:** 5 dòng/trang (itemsPerPage = 5)
- **Phân trang:**
  - Hiển thị: "Hiển thị X đến Y trong tổng số Z công việc"
  - Nút "Trước" / "Sau"
  - Số trang (1, 2, 3...)
  - Active page: bg-blue-600 text-white

**Bảng dữ liệu:**
- Tên công việc
- Người thực hiện
- Độ ưu tiên (badge màu)
- Trạng thái (badge màu)
- Ngày cuối (YYYY-MM-DD)

**Empty state:**
- "Không có công việc sắp quá hạn trong khoảng thời gian này"

---

#### 2. Danh Sách Công Việc

**Mục đích:** Quản lý và theo dõi chi tiết các công việc

**Đường dẫn:** `/tasks`

##### Bộ lọc (2 hàng)

**Hàng 1:**
- **Tìm kiếm:** Icon Search, full-width input
- **Dropdown Trạng Thái:**
  - Tất cả trạng thái
  - Đã hoàn thành
  - Đang thực hiện
  - Đã quá hạn
  - Chưa thực hiện
  - Icon ChevronDown inside

- **Dropdown Thành Viên:**
  - Tất cả thành viên
  - Danh sách thành viên
  - Icon ChevronDown inside

- **Dropdown Độ Ưu Tiên:**
  - Tất cả độ ưu tiên
  - Cao / Trung bình / Thấp
  - Icon ChevronDown inside

- **Toggle View Mode:**
  - 📋 List view
  - 🎯 Kanban view
  - Background: gray-100
  - Active: white with shadow

**Hàng 2: Tìm kiếm nâng cao (Date Range)**
- Border top: border-t border-gray-200
- Icon Calendar
- Input "Từ ngày"
- Input "Đến ngày"
- Nút "Xóa lọc ngày" (conditional)

##### 2.1 Dạng List (Bảng)

**Các cột:**
- Tên công việc
- Độ ưu tiên (badge)
- Trạng thái (badge)
- Người thực hiện
- Ngày cuối
- Thao tác (Eye / Edit / Trash icons)

**Phân trang:**
- 10 items/page
- Full pagination controls
- Reset về page 1 khi thay đổi filter

##### 2.2 Dạng Bảng Kanban

**Layout:** Grid 4 cột (lg:grid-cols-4)

**Các cột:**
1. Chưa thực hiện (border-gray-300)
2. Đang thực hiện (border-blue-300)
3. Đã hoàn thành (border-green-300)
4. Đã quá hạn (border-red-300)

**Mỗi thẻ công việc:**
- Tên công việc
- Chấm tròn màu (độ ưu tiên)
- Icon User + Người thực hiện
- Icon Calendar + Ngày cuối
- Label độ ưu tiên

---

#### 3. Lịch

**Mục đích:** Quản lý lịch họp, meeting và công việc theo thời gian

**Đường dẫn:** `/calendar`

**Layout:** Grid 2 cột (sidebar + calendar)

**Tính năng:**

**1. Calendar Grid:**
- Grid 7x6 (tuần x ngày)
- Header: Tháng + Năm + Navigation (Previous/Next)
- Today highlight: border-blue-500 border-2
- Mỗi ô ngày:
  - Min height: 96px
  - Số ngày
  - Tối đa 2 events
  - "+X khác" nếu nhiều hơn

**2. Loại sự kiện:**
- **Meeting:** bg-blue-500
- **Deadline:** bg-red-500
- **Training:** bg-green-500

**3. Sidebar Events:**
- Width: 1/3
- Title: "Sự kiện sắp tới"
- Sort by date ascending
- Border-left colored
- Display: title, date, time, type badge

---

### Thư Mục 2: Quản Trị Hệ Thống

#### 1. Quản Lý Thành Viên

**Mục đích:** Quản lý danh sách nhân viên/thành viên

**Đường dẫn:** `/members`

**Bộ lọc:**

1. **Tìm kiếm:**
   - Icon Search
   - Placeholder: "Tìm kiếm theo tên, email hoặc phòng ban..."
   - Flex-1 (full width available)

2. **Lọc Phòng Ban:**
   - Dropdown với ChevronDown
   - Options:
     - Tất cả phòng ban
     - Phát triển
     - Thiết kế
     - Kiểm thử
     - DevOps

3. **Lọc Tình Trạng:**
   - Dropdown với ChevronDown
   - Options:
     - Tất cả tình trạng
     - Hoạt động
     - Không hoạt động

**Layout:** Flex gap-4 (search full-width, 2 dropdowns fixed-width)

**Bảng dữ liệu:**

| Cột | Mô tả |
|-----|-------|
| Thành viên | Avatar + Tên (màu ngẫu nhiên) |
| Email | Địa chỉ email |
| Điện thoại | Số điện thoại |
| Phòng ban | Tên phòng ban |
| Chức vụ | Vai trò/position |
| Tình trạng | Badge: Hoạt động (green) / Không hoạt động (gray) |
| Thao tác | Edit (green) / Delete (red) icons |

**Avatar colors (xoay vòng):**
- blue-500, green-500, yellow-500, purple-500, pink-500, indigo-500

---

#### 2. Quản Lý Phòng Ban

**Mục đích:** Quản lý cơ cấu tổ chức và các phòng ban

**Đường dẫn:** `/departments`

**Thống kê tổng quan (3 cards):**

1. **Tổng phòng ban**
   - Icon: Users (blue)
   - Value: 6
   - Padding: p-4

2. **Tổng thành viên**
   - Icon: Users (green)
   - Sum of all members

3. **Trung bình/phòng**
   - Icon: Users (purple)
   - Average members

**Card styling:**
- p-4 (giảm từ p-6)
- text-xs title (giảm từ text-sm)
- text-2xl value (giảm từ text-3xl)
- Icon: w-5 h-5 (giảm từ w-6)
- Icon bg: p-2.5 (giảm từ p-3)

**Departments Grid:**
- Grid 3 cột (lg:grid-cols-3)
- Gap: gap-4

**Mỗi card phòng ban:**
- Background pastel colors
- Padding: p-4 (giảm từ p-6)
- Icon Users trong box trắng (w-5 h-5)
- Tên phòng ban (text-sm, font-semibold)
- Số thành viên (text-xs)
- Mô tả (text-xs, giảm từ text-sm)
- Thông tin:
  - Trưởng phòng
  - Ngày tạo (dd/mm/yyyy)
- Actions: Edit / Delete (w-3.5 h-3.5)

**Bảng chi tiết:**
- Header: "Danh sách chi tiết"
- Các cột: Tên / Mô tả / Trưởng phòng / Số thành viên / Ngày tạo

---

### Thư Mục 3: Khác

#### 1. Cài Đặt

**Mục đích:** Quản lý cài đặt hệ thống và tài khoản

**Đường dẫn:** `/settings`

**Layout:** Grid 2 cột (1/3 sidebar + 2/3 content)

**Sidebar Menu:**
1. 👤 Thông tin cá nhân (active)
2. 🔒 Bảo mật
3. 🔔 Thông báo
4. 🌐 Ngôn ngữ & Khu vực
5. 🌙 Giao diện
6. 📧 Email

**Tab: Thông tin cá nhân**

Form fields:
- Avatar (80x80px, bg-blue-100)
- Họ và tên (input text)
- Email (input email)
- Số điện thoại (input tel)
- Phòng ban (select dropdown)
- Chức vụ (input text)

Actions:
- "Lưu thay đổi" (blue-600)
- "Hủy" (border-gray-300)

---

#### 2. Trợ Giúp

**Mục đích:** Hỗ trợ người dùng sử dụng hệ thống

**Đường dẫn:** `/help`

**Tìm kiếm:**
- Icon Search
- Placeholder: "Tìm kiếm câu hỏi..."
- Full-width input

**Tài nguyên hỗ trợ (4 cards):**

1. 📚 Tài liệu hướng dẫn (blue)
2. 🎥 Video tutorial (green)
3. 📄 API Documentation (purple)
4. ❓ Liên hệ hỗ trợ (yellow)

**FAQ (10 câu hỏi):**

1. Làm thế nào để tạo công việc mới?
2. Làm cách nào để phân công công việc cho thành viên?
3. Tôi có thể xem công việc theo dạng Kanban không?
4. Làm thế nào để thêm thành viên mới vào hệ thống?
5. Tôi có thể tạo phòng ban mới như thế nào?
6. Làm sao để đặt lịch họp hoặc sự kiện?
7. Tôi có thể lọc công việc theo tiêu chí nào?
8. Dashboard hiển thị những thông tin gì?
9. Làm thế nào để thay đổi thông tin cá nhân?
10. Tôi quên mật khẩu, phải làm sao?

**Cấu trúc FAQ:**
- Accordion/Collapsible
- Icon ChevronDown (rotate on open)
- Border: border-gray-200
- Active background: bg-gray-50

**Liên hệ hỗ trợ:**
- Background: blue-50
- Icon HelpCircle
- Email: support@taskflow.com
- Nút "Gửi yêu cầu hỗ trợ"

---

## Quy Tắc Viết Hoa

### Nguyên tắc chung:
**Viết hoa chữ cái đầu tiên, còn lại viết thường**

### Áp dụng cho:

**Header:**
- "Hệ thống quản lý công việc"

**Sidebar:**
- "Dashboard tổng quan"
- "Danh sách công việc"
- "Quản lý thành viên"
- "Quản lý phòng ban"
- "Cài đặt"
- "Trợ giúp"

**Page Titles:**
- "Dashboard tổng quan"
- "Danh sách công việc"
- "Quản lý thành viên"
- "Quản lý phòng ban"
- "Cài đặt"
- "Trợ giúp"

**Buttons:**
- "Thêm công việc"
- "Thêm thành viên"
- "Tạo phòng ban"
- "Thêm sự kiện"
- "Lưu thay đổi"
- "Xóa bộ lọc"

**Section Headers:**
- "Công việc sắp quá hạn"
- "Sự kiện sắp tới"
- "Danh sách chi tiết"
- "Thông tin cá nhân"
- "Câu hỏi thường gặp"

**Dropdowns:**
- "Tất cả trạng thái"
- "Tất cả độ ưu tiên"
- "Tất cả phòng ban"
- "Tất cả tình trạng"

---

## Mã Màu Hệ Thống

### Trạng thái công việc:
- **Đã hoàn thành:** 🟢 bg-green-100 text-green-800
- **Đang thực hiện:** 🔵 bg-blue-100 text-blue-800
- **Đã quá hạn:** 🔴 bg-red-100 text-red-800
- **Chưa thực hiện:** ⚪ bg-gray-100 text-gray-800

### Độ ưu tiên:
- **Cao:** 🔴 bg-red-100 text-red-800
- **Trung bình:** 🟡 bg-yellow-100 text-yellow-800
- **Thấp:** 🟢 bg-green-100 text-green-800

### Loại sự kiện:
- **Meeting:** 🔵 bg-blue-500
- **Deadline:** 🔴 bg-red-500
- **Training:** 🟢 bg-green-500

### Tình trạng thành viên:
- **Hoạt động:** 🟢 bg-green-100 text-green-800
- **Không hoạt động:** ⚪ bg-gray-100 text-gray-800

### Stats cards:
- **Blue:** blue-500/blue-50/blue-700
- **Purple:** purple-500/purple-50/purple-700
- **Yellow:** yellow-500/yellow-50/yellow-700
- **Green:** green-500/green-50/green-700
- **Red:** red-500/red-50/red-700
- **Indigo:** indigo-500/indigo-50/indigo-700

### Primary colors:
- **Primary:** blue-600
- **Hover:** blue-700
- **Light:** blue-50
- **Border:** blue-200

### Header colors:
- **Background:** white
- **Text:** blue-700
- **Sub-text:** gray-500
- **Icons:** blue-700
- **Hover:** gray-100
- **Border:** gray-200

---

## Kích Thước & Spacing

### Header:
- Background: bg-white (đổi từ gradient blue)
- Border: border-b border-gray-200
- Padding: px-6 py-4 (giảm từ px-8 py-6)
- Title: text-xl, text-blue-700 (giảm từ text-2xl)
- Sub-text: text-xs, text-gray-500 (giảm từ text-sm)
- Icons: w-6 h-6, text-blue-700
- Avatar: bg-blue-100, text-blue-700
- Hover: bg-gray-100

### Sidebar:
- Width: w-56 (224px, giảm từ w-64)
- Padding: p-3 (giảm từ p-4)
- Menu items: px-3 py-2.5, text-sm
- Icons: w-4 h-4 (giảm từ w-5)
- Gap: gap-2 (giảm từ gap-3)

### Cards:
- Padding: p-4 (giảm từ p-6)
- Gap: gap-4 (giảm từ gap-6)
- Title: text-xs (giảm từ text-sm)
- Value: text-2xl (giảm từ text-3xl)
- Icons: w-5 h-5 (giảm từ w-6)

### Buttons:
- Padding: px-4 py-2
- Text: base size
- Icons: w-5 h-5

### Form inputs:
- Padding: px-3 py-1.5 (date inputs)
- Padding: px-4 py-2 (text inputs, selects)
- Border: border-gray-300
- Rounded: rounded-lg
- Focus: ring-2 ring-blue-500

---

## Công Nghệ Sử Dụng

- **Framework:** React 18.3.1
- **Language:** TypeScript
- **Routing:** React Router 7.13.0
- **Styling:** Tailwind CSS 4.1.12
- **Icons:** Lucide React 0.487.0
- **Build Tool:** Vite 6.3.5
- **UI Components:** Material UI 7.3.5
- **Date Handling:** date-fns 3.6.0
- **Charts:** Recharts 2.15.2
- **Forms:** React Hook Form 7.55.0
- **Drag & Drop:** react-dnd 16.0.1

---

## Cấu Trúc Thư Mục

```
src/
├── app/
│   ├── components/
│   │   ├── Layout.tsx              # Layout với header + sidebar (2 blocks)
│   │   └── KanbanView.tsx          # Kanban board component
│   ├── pages/
│   │   ├── Dashboard.tsx           # Dashboard + Công việc sắp quá hạn
│   │   ├── TaskList.tsx            # Danh sách CV (List + Kanban + Date filter)
│   │   ├── Calendar.tsx            # Lịch
│   │   ├── Members.tsx             # Quản lý thành viên (+ Phòng ban, Tình trạng filter)
│   │   ├── Departments.tsx         # Quản lý phòng ban
│   │   ├── Settings.tsx            # Cài đặt
│   │   ├── Help.tsx                # Trợ giúp + FAQ
│   │   └── NotFound.tsx            # 404 page
│   ├── routes.tsx                  # Route configuration
│   └── App.tsx                     # Root component
└── styles/
    ├── fonts.css                   # Font imports
    └── theme.css                   # Theme variables
```

---

## Tính Năng Đã Triển Khai

### ✅ Version 1.0 (Hiện tại)

**UI/UX:**
- [x] Header cố định với notification + profile dropdown
- [x] Sidebar 2 blocks: "Quản lý công việc" + "Khác"
- [x] Responsive design
- [x] Consistent sizing (giảm padding, font size)
- [x] Viết hoa chữ cái đầu cho tất cả text

**Dashboard:**
- [x] 6 cards thống kê với % thay đổi
- [x] Bỏ progress bars
- [x] "Công việc sắp quá hạn" (thay vì "Công việc gần đây")
- [x] Tìm kiếm công việc
- [x] Lọc độ ưu tiên
- [x] Date range filter (Từ ngày - Đến ngày)
- [x] Default 5 dòng/trang
- [x] Phân trang đầy đủ

**Danh sách công việc:**
- [x] Bộ lọc: Tìm kiếm, Trạng thái, Thành viên, Độ ưu tiên
- [x] Date range filter (Từ ngày - Đến ngày)
- [x] Toggle List/Kanban view
- [x] Phân trang 10 items/page
- [x] ChevronDown icons trong dropdowns

**Quản lý thành viên:**
- [x] Tìm kiếm theo tên/email/phòng ban
- [x] Lọc theo Phòng ban
- [x] Lọc theo Tình trạng (Hoạt động/Không hoạt động)
- [x] Avatar màu sắc đa dạng

**Quản lý phòng ban:**
- [x] 3 cards thống kê
- [x] Grid view với cards
- [x] Table view chi tiết

**Lịch:**
- [x] Calendar tháng với events
- [x] Sidebar sự kiện sắp tới
- [x] 3 loại sự kiện (Meeting, Deadline, Training)

**Khác:**
- [x] Trang Cài đặt với sidebar menu
- [x] Trang Trợ giúp với 10 FAQs
- [x] Notification dropdown
- [x] Profile menu

---

## Roadmap

### 📋 Phase 2 - CRUD Operations
- [ ] Modal thêm/sửa công việc
- [ ] Modal thêm/sửa thành viên
- [ ] Modal thêm/sửa phòng ban
- [ ] Modal thêm sự kiện lịch
- [ ] Confirmation dialogs
- [ ] Form validation
- [ ] Toast notifications

### 🔄 Phase 3 - Backend Integration
- [ ] Supabase integration
- [ ] Real-time updates
- [ ] Authentication (Login/Logout)
- [ ] JWT tokens
- [ ] Role-based access control
- [ ] Persistent data storage
- [ ] Avatar upload

### 🚀 Phase 4 - Advanced Features
- [ ] Drag & drop trong Kanban
- [ ] Multiple assignees per task
- [ ] Comments & discussions
- [ ] File attachments
- [ ] Export data (Excel, PDF, CSV)
- [ ] Timeline/Gantt chart
- [ ] Reports & analytics
- [ ] Email notifications
- [ ] Push notifications
- [ ] Dark mode
- [ ] Multi-language (i18n)

### 🔌 Phase 5 - Integrations
- [ ] Slack integration
- [ ] Microsoft Teams
- [ ] Google Calendar sync
- [ ] Outlook Calendar sync
- [ ] REST API
- [ ] Webhooks
- [ ] Mobile app

---

## Cấu Trúc Dữ Liệu

### Task (Công việc)
```typescript
interface Task {
  id: number;
  name: string;
  priority: "Cao" | "Trung bình" | "Thấp";
  status: "completed" | "in-progress" | "overdue" | "todo";
  assignee: string;
  dueDate: string; // YYYY-MM-DD
}
```

### Member (Thành viên)
```typescript
interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  status: "active" | "inactive";
  avatar: string; // Initials
}
```

### Department (Phòng ban)
```typescript
interface Department {
  id: number;
  name: string;
  description: string;
  manager: string;
  memberCount: number;
  createdDate: string; // YYYY-MM-DD
}
```

### Event (Sự kiện)
```typescript
interface Event {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  type: "meeting" | "deadline" | "training";
}
```

### Notification (Thông báo)
```typescript
interface Notification {
  id: number;
  title: string;
  message: string;
  time: string; // relative time
}
```

---

## Best Practices

### 1. Coding Standards
- TypeScript strict mode
- Component naming: PascalCase
- Props interface: `ComponentNameProps`
- Utility-first Tailwind CSS
- No inline styles

### 2. State Management
- useState for local state
- Props drilling minimized
- URL params for filter state
- Reset page when filters change

### 3. Performance
- Lazy loading routes (future)
- Memoization for expensive operations
- Virtual scrolling for long lists (future)
- Image optimization

### 4. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast WCAG AA

### 5. UI/UX
- Consistent spacing
- Viết hoa chữ cái đầu
- Icons inside dropdowns
- Clear empty states
- Loading states (future)
- Error states (future)

---

## Hướng Dẫn Sử Dụng

### Cài đặt:
```bash
cd project-folder
pnpm install
```

### Development:
```bash
pnpm run dev
```

### Build:
```bash
pnpm run build
```

### Preview:
```bash
pnpm preview
```

---

## Liên Hệ & Hỗ Trợ

- **Email:** support@taskflow.com
- **Hotline:** 1900-xxxx
- **Giờ hỗ trợ:** 24/7
- **Response time:** < 2 giờ

---

## Changelog

### Version 1.0.2 (12/05/2026)
- 🎨 Thay đổi màu header: nền trắng với chữ xanh (text-blue-700)
- 🔔 Icons notification và profile chuyển sang màu xanh
- ✨ Hover states chuyển từ bg-blue-600 sang bg-gray-100

### Version 1.0.1 (12/05/2026)
- 🎨 UI improvements: giảm padding, font sizes
- ✅ "Công việc sắp quá hạn" với filters đầy đủ
- 📅 Date range filters cho Dashboard & Tasks
- 🔍 Bộ lọc Phòng ban & Tình trạng cho Members
- 📂 Sidebar chia 2 blocks: "Quản lý công việc" + "Khác"
- ✏️ Viết hoa chữ cái đầu cho tất cả text
- 🗑️ Bỏ progress bars
- 📊 Default 5 dòng cho công việc sắp quá hạn
- 🎯 ChevronDown icons trong tất cả dropdowns

### Version 1.0.0 (11/05/2026)
- 🎉 Initial release
- ✅ Tất cả tính năng cơ bản
- 📊 Dashboard với 6 cards
- 🔔 Notification system
- 👤 Profile management
- 📱 Responsive design

---

**Phiên bản:** 1.0.2  
**Ngày cập nhật:** 12/05/2026  
**Tác giả:** Development Team  
**License:** Proprietary
