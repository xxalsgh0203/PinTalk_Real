import React from 'react';

const ErpList = ({erpMembers}) => {
    return (
        <div>
            {erpMembers.map(member => {
                return (<div key={member.id}>
                    {member.name}
                </div>)
            })}
        </div>
        )
}

export default ErpList;