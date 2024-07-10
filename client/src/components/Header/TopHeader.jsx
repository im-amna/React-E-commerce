import React from "react";
import BucketIcon from "../../svgs/BucketIcon";
import RotatedSquare from "../../svgs/RotatedSquare";
import SearchIcon from "../../svgs/SearchIcon";
import UserIcon from "../../svgs/UserIcon";
import Row from "../common/Row";
import HeaderButton from "./HeaderButton";

const TopHeader = () => {
  return (
    <div className="w-full px-[10%] h-full">
      <Row className="flex items-center h-full justify-between">
        <SearchIcon />
        <Row className="items-center">
          <RotatedSquare />
          <h1 className="text-[28px] text-black mx-[10px]">BrandBurst</h1>
          <RotatedSquare />
        </Row>
        <Row>
          <HeaderButton title="Account" Icon={UserIcon} url={"/login"} />
          <HeaderButton title="Cart" Icon={BucketIcon} url="/cart" />
        </Row>
      </Row>
    </div>
  );
};

export default TopHeader;
