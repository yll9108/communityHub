import React, { ReactNode } from "react";

// limit title type
export enum TitleType {
    mainTitle,
    subTitle,
}

export type TitleProps = {
    type: TitleType;
    children: ReactNode;
};

// standardize title
const MAIN_TITLE_STYLE = "text-5xl bold-fold";
const SUB_TITLE_STYLE = "text-3xl bold-fold";

export const Title = (props: TitleProps) => {
    let titleStyle = "";
    switch (props.type) {
        case TitleType.mainTitle:
            titleStyle = MAIN_TITLE_STYLE;
            break;
        case TitleType.subTitle:
            titleStyle = SUB_TITLE_STYLE;
            break;
    }

    return (
        <>
            <h1 className={titleStyle}>{props.children}</h1>
        </>
    );
};

export default Title;
