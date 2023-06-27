import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
type Props = {
    header: React.ReactNode;
    children: React.ReactNode;
};

const ExpandablePanel = ({ header, children }: Props) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleClick = () => {
        console.log(1);

        setExpanded(!expanded);
    };
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-grow items-center">{header}</div>
                <div onClick={handleClick}>{!expanded ? <GoChevronLeft /> : <GoChevronDown />}</div>
            </div>
            {expanded && <div className="border-t p-2">{children}</div>}
        </div>
    );
};

export default ExpandablePanel;
