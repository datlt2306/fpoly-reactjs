import { useRemovePhotoMutation } from "@/store/store";
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

type Props = {
    photo: any;
};

const PhotoListItem = ({ photo }: Props) => {
    const [removeAlbum, results] = useRemovePhotoMutation();
    const handleDelete = (photo: any) => {
        removeAlbum(photo);
    };
    return (
        <div className="relative cursor-pointer mb-2" onClick={() => handleDelete(photo)}>
            <img className="h-20 w-20" src={photo.url} alt={photo.name} />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                {results?.isLoading ? (
                    <Button loading={results?.isLoading} danger>
                        Deleting...
                    </Button>
                ) : (
                    <GoTrash className="text-2xl" />
                )}
            </div>
        </div>
    );
};

export default PhotoListItem;
