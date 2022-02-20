import {FC} from "react";

interface Props{
    name: string;
    size: number | string;
}

export const Icon:FC<Props> = ({name, size=24}) => {
    return(
        <svg width={`${size}px`}
             height={`${size}px`}
        >
            <use href = {`/sprite.svg#${name}`}/>
        </svg>
    )
}