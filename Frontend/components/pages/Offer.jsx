import React, { useState } from 'react';
import Input from '../GenericComponents/Input';
import Heading from '../GenericComponents/Heading';
import { useRef } from 'react';

const Offer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit}>
    <div className= "d-inline-flex p-2">
      <div className="border border-black border-2">
        <div className="bg-success p-2 text-dark bg-opacity-10">
          <Heading title={"Offer"} className={"heading1"}/>
          <div className="row">
            <div className="col-6">
              <Input name={"Titel:"} ref={inputRef}/>
            </div>
            <div className="col-6">
              <Input name={"Ort:"}/>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Input name={"Zeitraum:"}/>
            </div>
          </div>
          <Input name={"Gesuchte Hilfe:"}/>
          <Input name={"E-Mail:"}/>
          <Input name={"Beschreibung:"}/>
        </div> 
      </div>
    </div>
    <button type="submit" onClick={() =>{
      console.log(inputRef.current);
    }}>Submit</button>
    </form>
  );
}

export default Offer;
