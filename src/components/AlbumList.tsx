import { IUser } from "@/interfaces/user";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "@/store/store";
import Skeleton from "react-loading-skeleton";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";

type Props = {
    user: IUser;
};

const AlbumList = ({ user }: Props) => {
    const { data, isLoading, error } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    let content;
    if (isLoading) content = <Skeleton count={5} height={30} />;
    if (error) content = <div>Error data fetching</div>;
    content = data?.map((album: any) => <AlbumListItem key={album.id} album={album} />);

    const handleAdd = () => {
        addAlbum(user);
    };
    return (
        <div>
            <div className="flex flex-grow mb-2 items-center justify-between">
                <h3 className="text-lg font-bold">Album name: {user.name}</h3>
                <Button loading={results?.isLoading} primary onClick={handleAdd}>
                    + Add Album
                </Button>
            </div>
            {content}
        </div>
    );
};

export default AlbumList;
