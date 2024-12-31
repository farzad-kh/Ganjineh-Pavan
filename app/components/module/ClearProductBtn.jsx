import { Button } from "antd";
import React from "react";

const ClearProductBtn = ({ clearForm }) => {
  return (
    <Button
      className="max-sm:w-[50%]"
      danger
      onClick={clearForm}
      style={{ marginLeft: 8 }}
    >
      Clear
    </Button>
  );
};

export default ClearProductBtn;
