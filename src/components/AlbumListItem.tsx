import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useThunk } from "@/hooks/use-thunk";
import { useRemoveAlbumMutation } from "@/store/store";
import PhotoList from "./PhotoList";

type Props = {
    album: any;
};

const AlbumListItem = ({ album }: Props) => {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const header = (
        <div className="flex justify-between items-center cursor-pointer">
            <Button
                loading={results?.isLoading}
                className="mr-3"
                danger
                onClick={() => handleDelete(album)}
            >
                <GoTrash />
            </Button>
            {album.name}
        </div>
    );

    const handleDelete = (album: any) => {
        removeAlbum(album);
    };
    return (
        <ExpandablePanel header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    );
};

export default AlbumListItem;
