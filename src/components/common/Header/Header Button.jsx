import React from "react";
import Row from "../Row";
const HeaderButton = ({ title, Icon }) => {
  return (
    <Row className="mx-[5px]">
      <Icon />

      <p className=" text-[#1e2832] text-[18px] hover:text-slate-400 ml-[2px]">
        {title}
      </p>
    </Row>
  );
};
export default HeaderButton;
