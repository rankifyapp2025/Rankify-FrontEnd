import React from "react";
import  { SideBar } from "./Sidebar";
import {TemporaryDrawer} from "./Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainLayout = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div style={{ display: "flex" }}>
      {isMobile ? <TemporaryDrawer /> : <SideBar />}
      <div style={{ flex: 1, padding: "16px" }}>{children}</div>
    </div>
  );
};

export default MainLayout;
