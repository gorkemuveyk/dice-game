import { Alert, Button, CircularProgress, Skeleton } from "@mui/material";
import { useAddUserMutation, useFetchUsersQuery } from "../store";
import UserListItem from "./UserListItem";

const UserList = () => {
  const { data, isError, error, isFetching } = useFetchUsersQuery();
  const [addUser, result] = useAddUserMutation();

  const handleUserAdd = () => {
    addUser();
  };

  let content;

  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <Alert severity="error">ERROR — {error.error}</Alert>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "24px" }}>Users</h1>
        <Button variant="outlined" onClick={handleUserAdd}>
          {result.isLoading ? <CircularProgress /> : "Add User"}
        </Button>
      </div>
      {content}
    </div>
  );
};

export default UserList;
