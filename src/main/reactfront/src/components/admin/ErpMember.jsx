import React from "react";

const ErpMember = ({member}) => {
    return (
        <tr className="bg-gray-50">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.no}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {member.gender === 'M' ? "남자" : "여자"}
            </td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.name}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">0{member.phone1}-{member.phone2}-{member.phone3}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.address1}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.email}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.erp_level}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.reg_date}</td>
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.update_date}</td>
        </tr>
    )
}

export default ErpMember;