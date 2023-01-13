import React from 'react';

const UserMembers = ({ member }) => {
  const handleNewWindow = (e) => {
    let newWindow = window.open(
      `http://localhost:3000/userMemberDetail/${e.target.innerHTML}`,
      '_blank',
      'fullscreen',
    );
  };

  return (
    <tr className="bg-gray-50 hover:text-white hover:bg-pintalk-dark-brown cursor-pointer">
      <td className="p-3 text-sm whitespace-nowrap" onClick={handleNewWindow}>
        {member.no}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">{member.gender === 'M' ? '남자' : '여자'}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member.name}</td>
      <td className="p-3 text-sm whitespace-nowrap">
        {member.ssn1}-{member.ssn2}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">
        {member.phone1}-{member.phone2}-{member.phone3}
      </td>
      <td className="p-3 text-sm whitespace-nowrap">{member.address1}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member.email}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member.reg_Date?.slice(0, 10)}</td>
      <td className="p-3 text-sm whitespace-nowrap">{member.update_Date?.slice(0, 10)}</td>
    </tr>
  );
};

export default UserMembers;
