'use client';

import { RootState } from '@/store/store';
import { getUsersRequest } from '@/store/users/UsersSlice';

import { UsersStateType } from '@/store/users/UsersTypes';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UsersPage = () => {
  const { loading, users, error }: UsersStateType = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  // console.log(users, loading, error);
  if (loading) {
    // return <LinearProgress />;
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={users}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'name', headerName: 'Name', width: 130 },
          { field: 'email', headerName: 'Email', width: 130 },
          // add more columns as needed
        ]}
        pagination={true}
        checkboxSelection
      /> */}
    </div>
  );
};

export default UsersPage;
