import React from 'react'
import Input from './GenericComponents/Input'
import Heading from './GenericComponents/Heading'

const Request = () => {
  
  return (
    
    <div className= "d-inline-flex p-2">
      <div className="border border-black border-2">
    <div className="bg-success p-2 text-dark bg-opacity-10">
      <Heading title={"Request"} className={"heading1"}/>
      <div className="row">
        <div className="col-6">
          <Input name={"Titel:"}/>
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
  )
}

export default Request
