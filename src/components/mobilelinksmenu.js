import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import LinksBar from "./linksbar";

const MobileLinksMenu = ({ location }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-link-menu">
      <IconButton
        color="blue"
        aria-label="open drawer"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        edge="start"
        className="icon-button"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className="drawer"
        anchor="top"
        open={open}
        onClose={toggleDrawer}
      >
        <LinksBar location={location} />
      </Drawer>
    </div>
  );
};

export default MobileLinksMenu;
