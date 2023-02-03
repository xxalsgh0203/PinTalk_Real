import React from 'react';
import Table from '../../components/admin/Table';
import Layout from '../../components/layout/Layout';

const Admin = () => {
  return (
    <div>
      <Layout title="관리자" admin>
        <Table />
      </Layout>
    </div>
  );
};

export default Admin;
