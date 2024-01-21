
"use client";
import  { useState } from "react";
import { Button,Modal } from "keep-react";
import { Trash } from "phosphor-react";



type ierrorAlert = {
    header: string;
    body: string;
    closeBTNtxt: string;
    primaryBTNtxt: string;
    primaryBTNfn: () => void;
    visibility: boolean;
}

export default function ErrorAlert(props: ierrorAlert) {
  const [showErrorModalX, setShowErrorModalX] = useState(props.visibility);

  const onClickErrorModal = () => {
    setShowErrorModalX(!showErrorModalX);
  };
  return (
      <Modal
        icon={<Trash size={28} color="#E92215" />}
        size="md"
        show={showErrorModalX}
        onClose={onClickErrorModal}
      >
        <Modal.Header>{props.header}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              {props.body}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickErrorModal}>
            {props.closeBTNtxt}
          </Button>
          <Button type="primary" color="error" onClick={props.primaryBTNfn}>
            {props.primaryBTNtxt}
          </Button>
        </Modal.Footer>
      </Modal>
  );
};
