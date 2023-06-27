import { IUser } from "@/interfaces/user";
import { useAddPhotoMutation, useFetchPhotosQuery } from "@/store/apis/photoApi";
import { useAddAlbumMutation } from "@/store/store";
import React from "react";
import Skeleton from "react-loading-skeleton";
import PhotoListItem from "./PhotoListItem";
import Button from "./Button";

const PhotoList = ({ album }: any) => {
    const { data, isLoading, error } = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotoMutation();

    let content;
    if (isLoading) content = <Skeleton count={5} height={30} />;
    if (error) content = <div>Error data fetching</div>;
    content = data?.map((photo: any) => <PhotoListItem key={photo.id} photo={photo} />);

    const handleAdd = () => {
        addPhoto(album);
    };
    return (
        <div>
            <div className="flex flex-grow mb-2 items-center justify-between">
                <h3 className="text-lg font-bold">Album name: {album.name}</h3>
                <Button loading={results?.isLoading} primary onClick={handleAdd}>
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center items-center space-x-4">
                {content}
            </div>
        </div>
    );
};

export default PhotoList;
