"use client";

import { useState } from "react";
import { Modal, Button } from "keep-react";
import { Calendar } from "phosphor-react";
import { DatePicker } from "keep-react";

type Props = {
  onClose: () => void;
  show: boolean;
  primaryButton?: string;
  secondaryButton?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  setStartDate?: (e: any) => void;
  setEndDate?: (e: any) => void;
  startDate?: Date;
  endDate?: Date;
};

export default function FormOnSubmit(props: Props) {

  const date = new Date();
  const [minDate, setMinDate] = useState(
    date.getFullYear() +
      "-" +
      (date.getMonth() + 1 == 11 || date.getMonth() + 1 == 12
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      date.getDate() +
      "T" +
      (date.getHours()<=9? "0"+date.getHours(): date.getHours()) +
      ":" +
      (date.getMinutes()<=9? "0"+date.getMinutes(): date.getMinutes())
  );
  

  
  return (
    <>
      <Modal
        icon={<Calendar size={28} color="#1B4DFF" />}
        size="3xl"
        show={props.show}
        onClose={props.onClose}
      >
        <Modal.Header>
          Pick the beginning and ending dates & times.
        </Modal.Header>
        <Modal.Body>
          <div className="transition">
            The form starts on{" "}
            <span className="transition ">
              <input
                type="datetime-local"
                onChange={props.setStartDate}
                max={(props.endDate)?.getDate()==date.getDate()?undefined:(props.endDate
                  ? (props.endDate?.getFullYear() +
                    "-" +
                    (props.endDate?.getMonth() + 1 == 11 ||
                    props.endDate?.getMonth() + 1 == 12
                      ? props.endDate?.getMonth() + 1
                      : "0" + (props.endDate?.getMonth() + 1)) +
                    "-" +
                    props.endDate?.getDate() +
                    "T" +
                    (props.endDate?.getHours()<=9? "0"+props.endDate?.getHours(): props.endDate?.getHours()) +
                    ":" +
                    (props.endDate?.getMinutes()<=9? "0"+props.endDate?.getMinutes(): props.endDate?.getMinutes())): undefined)}
                min={minDate}
                title="Begining time"
              />
            </span>
            &nbsp;and expires on{" "}
            <span className="transition ">
              <input
                type="datetime-local"
                onChange={props.setEndDate}
                min={
                  props.startDate
                    ? props.startDate?.getFullYear() +
                      "-" +
                      (props.startDate?.getMonth() + 1 == 11 ||
                      props.startDate?.getMonth() + 1 == 12
                        ? props.startDate?.getMonth() + 1
                        : "0" + (props.startDate?.getMonth() + 1)) +
                      "-" +
                      props.startDate?.getDate() +
                      "T" +
                      (props.startDate?.getHours()<=9? "0"+props.startDate?.getHours(): props.startDate?.getHours()) +
                    ":" +
                    (props.startDate?.getMinutes()<=9? "0"+props.startDate?.getMinutes(): props.startDate?.getMinutes())
                    : minDate
                }
                // min={ minDate}
                title="Ending time"
              />
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={props.secondaryButtonAction}>
            {props.secondaryButton || "Save as Draft"}
          </Button>
          <Button type="primary" onClick={props.primaryButtonAction}>
            {props.primaryButton || "Publish"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
