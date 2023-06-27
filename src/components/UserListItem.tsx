import { useAppDispatch } from "@/store/hook";
import { deleteUser } from "@/store/thunks/deleteUser";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "@/hooks/use-thunk";
import { IUser } from "@/interfaces/user";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
type Props = {
    user: {
        id?: number;
        name: string;
    };
};

const UserListItem = ({ user }: Props) => {
    const [doDeleteUser, isLoading, error] = useThunk(deleteUser);
    const handleDelete = (user: IUser) => {
        doDeleteUser(user);
    };
    const header = (
        <>
            <Button className="mr-3" danger loading={isLoading} onClick={() => handleDelete(user)}>
                <GoTrash />
            </Button>
            {error && "Error Deleting User"}
            {user.name}
        </>
    );
    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user} />
        </ExpandablePanel>
    );
};

export default UserListItem;
