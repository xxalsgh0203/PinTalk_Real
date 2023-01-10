import React from 'react';

const UserMembers = ({ member }) => {
  return (
    <tr className="bg-gray-50">
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.no}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {member.gender === 'M' ? '남자' : '여자'}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.name}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {member.ssn1}-{member.ssn2}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {member.phone1}-{member.phone2}-{member.phone3}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.address1}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{member.email}</td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {member.reg_date?.slice(0, 10)}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {member.update_date?.slice(0, 10)}
      </td>
    </tr>
  );
};

export default UserMembers;
