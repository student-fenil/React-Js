import React from "react";
import LeftContent from "./leftcontent";
import RightContent from "./rightcontent";

const PageContent = () => {
  return (
    <div className="py-10 flex items-center gap-10 h-[90vh] px-18">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default PageContent;