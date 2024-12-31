import { Select } from "antd";
import React from "react";

const SelectCat = ({
  categories,
  selectedCategory,
  placeHolderTitle,
  selectVal,
  handleCategoryChange,
}) => {
  return (
    <Select
      style={{ width: "100%", marginBottom: 16 }}
      placeholder={placeHolderTitle}
      value={selectedCategory}
      onChange={(value) => handleCategoryChange(selectVal, value)}
    >
      {categories.map((cat) => (
        <Select.Option key={cat} value={cat}>
          {cat}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectCat;
