import { Modal } from "antd";
import React from "react";

const ModalUi = ({ children, isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Products"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => setIsModalOpen(false)}
    >
      <p>{children}</p>
    </Modal>
  );
};

export default ModalUi;
