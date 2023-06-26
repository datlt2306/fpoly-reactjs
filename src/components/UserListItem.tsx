import { useAppDispatch } from "@/store/hook";
import { deleteUser } from "@/store/thunks/deleteUser";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "@/hooks/use-thunk";
type Props = {
    user: {
        id?: number;
        name: string;
    };
};

const UserListItem = ({ user }: Props) => {
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);
    const handleDelete = (id: number | string) => {
        doDeleteUser(id);
    };
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor">
                <Button loading={isLoading} primary onClick={() => handleDelete(user.id!)}>
                    <GoTrash />
                </Button>
                {error && "Error Deleting User"}
                {user.name}
            </div>
        </div>
    );
};

export default UserListItem;
