import classNames from "classnames";

type Props = {
    times: number;
};

const Skeleton = ({ times }: Props) => {
    return Array(times)
        .fill(0)
        .map((_, index) => <div key={index}></div>);
};

export default Skeleton;
