import React from 'react';
import Table from '../components/admin/Table';
import Layout from '../components/layout/Layout';

import useMembers from '../hooks/useMembers';

const Admin = () => {
  return (
    <div>
      <Layout title="관리자">
        <h1 className="text-xl bg-gray-100 p-3">투자자 리스트</h1>
        <Table />
      </Layout>
    </div>
  );
};

export default Admin;
