import React from "react";
import Drawer from "@mui/material/Drawer";

type Props = {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
};

export default function SideMenu({ open, toggleDrawer }: Props) {
  return (
    <div>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        Drawer
      </Drawer>
    </div>
  );
}
