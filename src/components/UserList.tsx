import { useThunk } from "@/hooks/use-thunk";
import { useAppSelector } from "@/store/hook";
import { addUser, fetchUsers } from "@/store/store";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Button from "./Button";
import UserListItem from "./UserListItem";
import { IUser } from "@/interfaces/user";

const UserList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, createUserError] = useThunk(addUser);

    const { data } = useAppSelector((state) => state.user);
    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    const handleAdd = () => {
        doCreateUser();
    };

    let content;
    if (isLoadingUsers) return (content = <Skeleton count={5} />);
    if (loadingUsersError) return (content = <div className="bg-red-500">Error Fetching Data</div>);
    content = data.map((user) => <UserListItem key={user.id} user={user} />);

    return (
        <div>
            <Button loading={isCreatingUser} primary onClick={handleAdd} className="mb-3 rounded">
                Add User
            </Button>
            {createUserError && "Error Creating User"}
            {content}
        </div>
    );
};

export default UserList;
