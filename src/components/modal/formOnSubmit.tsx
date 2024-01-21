"use client";


import { useState } from "react";
import { Modal,Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { DatePicker } from "keep-react";





export default function FormOnSubmit() {
  const [showModalX, setShowModalX] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const date = new Date();
    const [minDate, setMinDate] = useState(date.getFullYear()+"-"+(((date.getMonth()+1)==11||(date.getMonth()+1)==12)?(date.getMonth()+1):"0"+(date.getMonth()+1))+"-"+date.getDate()+"T"+date.getHours()+":"+date.getMinutes());
    
    
    
  const onClickTwo = () => {
    setShowModalX(!showModalX);
  };

  return (
    <>
      <Button onClick={onClickTwo} type='primary' >Modal With Cross</Button>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="3xl"
        show={showModalX}
        onClose={onClickTwo}
      >
        <Modal.Header>Pick the beginning and ending dates & times.</Modal.Header>
        <Modal.Body>
          {/* <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div> */}
          {/* <DatePicker singleDate={setDate} placeholder="Date / Month / Year">
      <DatePicker.SingleDate />
    </DatePicker> */}
    
        <div className="transition">
        The form starts on <span className="transition "><input type="datetime-local" onChange={(e)=>setStartDate(e.target.value)}  max={endDate} min={minDate} title="Begining time"/></span>
    &nbsp;and expires on <span className="transition "><input type="datetime-local" onChange={(e)=>setEndDate(e.target.value)} min={startDate || minDate} title="Ending time"/></span>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Save as Draft
          </Button>
          <Button type="primary" onClick={onClickTwo}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
