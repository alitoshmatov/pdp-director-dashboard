import React from "react";
import MainLogo from "../main-logo";
import { DashboardIcon, SettingsIcon, ArrowIcon, QuitIcon } from "../icons";
import MenuButton from "./menu-button";

function Menu() {
  return (
    <div className="menu flex-collumn">
      <MainLogo />
      <div className="flex-collumn menu-buttons-middle">
        <MenuButton active={true} title="Dashboard" icon={<DashboardIcon />} />
        <MenuButton active={false} title="Sozlamalar" icon={<SettingsIcon />} />
      </div>
      <div className="flex-collumn menu-buttons-bottom">
        <MenuButton active={false} title="pdp.uz" icon={<ArrowIcon />} />
        <MenuButton active={false} title="Chiqish" icon={<QuitIcon />} />
      </div>
    </div>
  );
}

export default Menu;
