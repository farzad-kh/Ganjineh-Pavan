import React, { useState } from "react";
import { Select } from "antd";

const AttrSelect = ({
  selectedAttributes,

  setSelectedAttributes,
}) => {
  const [attributes, setAttributes] = useState([
    "First Attribute",
    "Second Attribute ",
    "Third Attribute",
  ]);

  const handleAttrSelect = (attr) => {
    setSelectedAttributes(attr);
  };

  return (
    <>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="attributes"
        value={selectedAttributes}
        onChange={(values) => handleAttrSelect(values)}
      >
        {attributes.map((attr) => (
          <Select.Option key={attr} value={attr}>
            {attr}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default AttrSelect;
