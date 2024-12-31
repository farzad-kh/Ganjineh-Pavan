import { Breadcrumb } from 'antd';
import React from 'react';

const BreadcrumbUi = ({selectedCategory}) => {
    return (
        <div className="flex mb-3">
        <Breadcrumb
          items={Object.values(selectedCategory)
            .filter(Boolean) //for filtering undefined or null value
            .map((cat) => ({
              title: cat,
            }))}
        />
      </div>
    );
};

export default BreadcrumbUi;