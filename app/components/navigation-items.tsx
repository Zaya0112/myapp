import { ReactNode } from "react";

const style = {
    textDecoration: "underline",
    color: "white",
    gap: "30px",
};

export const NavigationItems = ({ children }: { children: ReactNode }) => {
<div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "30px",
          padding: "10px",
          fontSize: "18px",
        }
        }>

          <NavigationItems>Product</NavigationItems>
          <NavigationItems>Service</NavigationItems>
          <NavigationItems>Contacts</NavigationItems>
          <NavigationItems>Log In</NavigationItems>
          
        </div>

    return <a href="/product" style={style}>{children}</a>;
};
