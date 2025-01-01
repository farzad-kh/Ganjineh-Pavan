import { Modal } from "antd";
import React from "react";
import { List, Typography } from "antd";

const { Text } = Typography;
const ModalUi = ({
 
  isModalOpen,
  setIsModalOpen,
  filteredProducts,
}) => {
  return (
    <Modal
      title="Products"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => setIsModalOpen(false)}
    >
      {filteredProducts.length > 0 ? (
        <List
          bordered
          dataSource={filteredProducts}
          renderItem={(product) => (
            <List.Item>
              <Text strong>{product.title}</Text>: {product.result}
            </List.Item>
          )}
        />
      ) : (
        <Text>products not found.</Text>
      )}
    </Modal>
  );
};

export default ModalUi;
