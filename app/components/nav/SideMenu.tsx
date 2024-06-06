import React from "react";
import Drawer from "@mui/material/Drawer";
import NavList from "./NavList";

type Props = {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
};

export default function SideMenu({ open, toggleDrawer }: Props) {
  return (
    <div>
      <Drawer open={open} anchor="left" onClose={toggleDrawer(false)}>
        <NavList />
      </Drawer>
    </div>
  );
}
