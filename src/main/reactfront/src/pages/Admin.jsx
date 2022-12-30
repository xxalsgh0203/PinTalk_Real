import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from "../components/admin/Table";

const Admin = () => {

    const [erpMembers, setErpMembers] = useState([]);

    useEffect(() => {
        axios
            .get('/erpMemberList')
            .then((response) => {
                // console.log(response);
                setErpMembers(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1 className="text-xl mb-2">투자자 리스트</h1>
            <Table erpMembers={erpMembers}/>
        </div>
    );
};

export default Admin;