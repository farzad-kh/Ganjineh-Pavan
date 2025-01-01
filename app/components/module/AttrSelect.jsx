import React, { useEffect, useState } from "react";
import { Select } from "antd";

const AttrSelect = ({selectedValues, setSelectedValues,comboBoxes,setComboBoxes}) => {


  const handleSelectChange = (value, i) => {
    const newSelectedValues = [...selectedValues];
    while (newSelectedValues.length <= 4) {
      newSelectedValues.push(null);
    }
    console.log(newSelectedValues.length, i);

    newSelectedValues[i] = value;
    setSelectedValues(newSelectedValues);

    if (
      newSelectedValues.filter((val) => val !== null).length >= 4 &&
      newSelectedValues.length < 10
    ) {
      setComboBoxes([
        ...comboBoxes,
        [
          `New Attribute ${comboBoxes.length + 1}-1`,
          `New Attribute ${comboBoxes.length + 1}-2`,
          `New Attribute ${comboBoxes.length + 1}-3`,
        ],
     
      ]);
    
    }
  };
  useEffect(()=>{
    
  },[])
  
  return (
    <>
      {comboBoxes.map((options, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          <Select
            style={{ width: "100%" }}
            placeholder={`Select Attribute ${i + 1}`}
            value={selectedValues[i] || undefined}
            onChange={(value) => handleSelectChange(value, i)}
          >
            {options.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </div>
      ))}
    </>
  );
};

export default AttrSelect;
