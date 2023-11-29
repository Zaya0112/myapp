import { ReactNode } from "react";
const style = {
    textDecoration: "underline",
    color: "white",
    gap: "30px",
};

export const NavigationItems = ({ children }: { children: ReactNode }) => {

    return <a href="/product" style={style}>{children}</a>;
};
