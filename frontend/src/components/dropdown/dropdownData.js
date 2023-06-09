import { FaEdit, FaUserLock, FaSignOutAlt } from "react-icons/fa";

export const dropdownData = [
  {
    title: "Sửa thông tin",
    icon: <FaEdit />,
    path: "/userEdit",
  },
  {
    title: "Đặt lại mật khẩu",
    icon: <FaUserLock />,
    path: "/passwordReset",
  },
  {
    title: "Đăng xuất",
    icon: <FaSignOutAlt />,
    path: "/signIn",
  },
];
