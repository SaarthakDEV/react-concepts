import React from "react";
import { fetchUsers } from "./features/user/userSlice";
import { cakeActions } from "./features/cake/cakeSlice";
import { connect } from "react-redux";

const Connect = ({ numOfCakes, users, ordered, restocked, fetchUsers }) => {
  return (
    <>
      <div>numOfCakes: {numOfCakes}</div>
      <div>users: {JSON.stringify(users)}</div>
      <button onClick={() => ordered()}>Order</button>
      <button onClick={() => restocked(10)}>Restock</button>
      <button onClick={() => fetchUsers()}>Fetch User</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    loading: state.user.loading,
    users: state.user.users,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ordered: () => dispatch(cakeActions.ordered()),
    restocked: (val) => dispatch(cakeActions.restocked(val)),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
