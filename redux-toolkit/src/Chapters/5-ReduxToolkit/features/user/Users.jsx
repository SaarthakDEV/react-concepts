import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const Users = () => {
    const { loading, users, error } = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    if(error) throw new Error(error)
  return (
    <div>{ loading ? "Loading..." : JSON.stringify(users)}</div>
  )
}

export default Users