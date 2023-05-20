import React from "react";
import {
    FaCalendarWeek,
    FaSearch,
    FaAddressBook,
    FaUser,
    FaReceipt,
    FaClipboardList,
    FaCommentDots,
    FaCog,
  } from "react-icons/fa";

export const navbarData = [
    {
        "title": "Lịch khám",
        "icon": <FaCalendarWeek />,
        "childrens": [
            {
                "title": "Xem danh sách",
                "path": "/appointment/appointmentView"
            },
            {
                "title": "Đặt lịch khám",
                "path": "/appointment/appointmentCreate"
            }
        ]   
    },
    {
        "title": "Tra cứu",
        "icon": <FaSearch />,
        "childrens": [
            {
                "title": "Tra cứu bệnh nhân",
                "path": "/"
            },
            {
                "title": "Tra cứu thuốc",
                "path": "/"
            }
        ]
    },
    {
        "title": "Phiếu khám bệnh",
        "icon": <FaAddressBook />,
        "childrens": [
            {
                "title": "Xem danh sách",
                "path": "/"
            },
            {
                "title": "Lập phiếu khám bệnh",
                "path": "/"
            }
        ]
    },
    {
        "title": "Bệnh nhân",
        "icon": <FaUser />,
        "childrens": [
            {
                "title": "Xem danh sách",
                "path": "/"
            }
        ]
    },
    {
        "title": "Hóa đơn",
        "icon": <FaReceipt />,
        "childrens": [
            {
                "title": "Xem danh sách",
                "path": "/"
            },
            {
                "title": "Lập hóa đơn",
                "path": "/"
            }
        ]
    },
    {
        "title": "Báo cáo",
        "icon": <FaClipboardList />,
        "childrens": [
            {
                "title": "Báo cáo doanh thu",
                "path": "/"
            },
            {
                "title": "Báo cáo sử dụng thuốc",
                "path": "/"
            }
        ]
    },
    {
        "title": "Góp ý",
        "icon": <FaCommentDots />,
        "childrens": [
            {
                "title": "Xem danh sách",
                "path": "/"
            },
            {
                "title": "Tạo góp ý",
                "path": "/"
            }
        ]
    },
    {
        "title": "Quy định",
        "icon": <FaCog />,
        "childrens": [
            {
                "title": "Quy định chung",
                "path": "/"
            },
            {
                "title": "Quy định thuốc",
                "path": "/"
            }
        ]
    }
]