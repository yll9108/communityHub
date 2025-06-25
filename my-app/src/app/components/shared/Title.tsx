import React, { ReactNode } from "react";

// export enum TitleType {
//     restaurants,
//     housing,
//     jobs,
//     community,
// }

export type TitleProps = {
    // type: TitleType;
    className?: string;
    children: ReactNode;
};

// standalize title style
const TitleStyle = "text-5xl font-bold";

export const Title = (props: TitleProps) => {
    return <p className={TitleStyle}>{props.children}</p>;
};

export default Title;
