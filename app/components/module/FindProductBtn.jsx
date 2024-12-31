import React from 'react';
import {Button} from "antd";
const FindProductBtn = ({showModal}) => {
    return (
        <Button className='max-sm:w-[50%]' type="primary" onClick={()=>showModal(true)}>
        Find Product
      </Button>
    );
};

export default FindProductBtn;