import { useThunk } from "@/hooks/use-thunk";
import { useAppSelector } from "@/store/hook";
import { addUser, fetchUsers } from "@/store/store";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Button from "./Button";

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
    if (isLoadingUsers) return <Skeleton count={5} />;
    if (loadingUsersError) return <div className="bg-red-500">Error Fetching Data</div>;

    const renderUser = () => {
        return data.map((user) => <div key={user.id}>{user.name}</div>);
    };

    return (
        <div className="bg-red-500">
            {isCreatingUser ? (
                "Creating User..."
            ) : (
                <Button primary onClick={handleAdd}>
                    Add User
                </Button>
            )}
            {createUserError && "Error Creating User"}
            {renderUser()}
        </div>
    );
};

export default UserList;
