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
                "title": "Danh sách khám",
                "path": "/appointmentView"
            },
            {
                "title": "Đặt lịch khám",
                "path": "/appointmentCreate"
            }
        ]   
    },
    // {
    //     "title": "Tra cứu",
    //     "icon": <FaSearch />,
    //     "childrens": [
    //         {
    //             "title": "Tra cứu bệnh nhân",
    //             "path": "/searchUser"
    //         },
    //         {
    //             "title": "Tra cứu thuốc",
    //             "path": "/searchDrug"
    //         }
    //     ]
    // },
    {
        "title": "Phiếu khám bệnh",
        "icon": <FaAddressBook />,
        "childrens": [
            {
                "title": "Danh sách phiếu khám bệnh",
                "path": "/medicalReportView"
            },
            {
                "title": "Lập phiếu khám bệnh",
                "path": "/medicalReportCreate"
            }
        ]
    },
    {
        "title": "Bệnh nhân",
        "icon": <FaUser />,
        "childrens": [
            {
                "title": "Danh sách bệnh nhân",
                "path": "/patientView"
            },
            {
                "title": "Tra cứu bệnh nhân",
                "path": "/patientSearch"
            },
            {
                 "title": "Thêm bệnh nhân",
                 "path": "/patientCreate"
            }
        ]
    },
    {
        "title": "Hóa đơn",
        "icon": <FaReceipt />,
        "childrens": [
            {
                "title": "Danh sách hóa đơn",
                "path": "/receiptView"
            },
            {
                "title": "Lập hóa đơn",
                "path": "/receiptCreate"
            }
        ]
    },
    {
        "title": "Báo cáo",
        "icon": <FaClipboardList />,
        "childrens": [
            {
                "title": "Báo cáo doanh thu",
                "path": "/revenueReportView"
            },
            {
                "title": "Báo cáo sử dụng thuốc",
                "path": "/drugReportView"
            }
        ]
    },
    // {
    //     "title": "Góp ý",
    //     "icon": <FaCommentDots />,
    //     "childrens": [
    //         {
    //             "title": "Xem danh sách",
    //             "path": "/reviewView"
    //         },
    //         {
    //             "title": "Tạo góp ý",
    //             "path": "/reviewCreate"
    //         }
    //     ]
    // },
    {
        "title": "Quy định",
        "icon": <FaCog />,
        "childrens": [
            {
                "title": "Quy định chung",
                "path": "/settingGeneral"
            },
            {
                "title": "Quy định thuốc",
                "path": "/settingDrug"
            }
        ]
    }
]