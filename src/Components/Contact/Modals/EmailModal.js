import React from "react";
import { Modal } from "react-bootstrap";

const EmailModal = () => {
  return (
    <div className="">
      <Modal.Header className="canvas-banner" closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </div>
  );
};

export default EmailModal;
