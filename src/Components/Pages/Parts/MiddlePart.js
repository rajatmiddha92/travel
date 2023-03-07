import React from "react";
import { BsArrowLeftRight, BsChevronDown } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";

const MiddlePart = () => {
  return (
    <div className="m-10 pl-8 shadow-xl p-2 rounded-lg">
      <h4 className="font-medium text-xl">Where are you flying?</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2">
        <div>
         <fieldset>
            <legend>From-To</legend>
            <input className="border-2 w-2/3 px-2 py-3" placeholder="Lahore - Karachi"/>
            </fieldset>
        </div>
        <div>
        <fieldset>
            <legend>Trip</legend>
            <input className="border-2 w-2/3 px-2 py-3" placeholder="Return"/>
          <BsChevronDown className="relative bottom-8 left-64 cursor-pointer"></BsChevronDown>
          </fieldset>
        </div>
        <div>
        <fieldset>
            <legend>Depart- Return</legend>
            <input className="border-2 w-2/3 px-2 py-3" placeholder="07 Nov 22 - 13 Nov 22"/>
            </fieldset>
        </div>
        <div>
        <fieldset>
            <legend>Passenger - Class</legend>
            <input className="border-2 w-2/3 px-2 py-3" placeholder="1 Passenger, Economy"/>
            </fieldset>
        </div>
      </div>
      <div className="card-actions justify-end mt-3 mr-40">
        <p className="mt-2 mr-2">+ Add Promo Code</p>
        <button
          className="px-2 py-3 flex rounded"
          style={{ backgroundColor: "#3282AD", color: "white" }}
        >
          {" "}
          <IoPaperPlaneOutline className="mt-1 mr-2"></IoPaperPlaneOutline> Show
          Filghts
        </button>
      </div>
    </div>
  );
};

export default MiddlePart;
