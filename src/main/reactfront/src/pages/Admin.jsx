import React from 'react';
import Table from '../components/admin/Table';
import Layout from '../components/layout/Layout';

import useMembers from '../hooks/useMembers';

const Admin = () => {
  return (
    <div>
      <Layout title="관리자">
        <Table />
      </Layout>
    </div>
  );
};

export default Admin;
