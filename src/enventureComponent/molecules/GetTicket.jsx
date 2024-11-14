import React from "react";
import "./GetTicket.css";

const GetTicket = () => {
  return (
    <div className="getTicket">
      <div className="infoGet">
        <h2>
          GET <span>TICKET</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm
          tempor incididunt ut labore
        </p>
      </div>

      <div className="package">
        <div className="starter">
          <div className="rs">
            <p>STARTER</p>
            <hr />
            <h2>
              39.00<span>$</span>
            </h2>
            <h6>/PERSON</h6>
          </div>
          <div className="planInfo">
            <p><i class="fa-solid fa-check-circle" style={{color:'#ff6600'}}></i>1 Comfortable Seats</p>
            <p><i class="fa-solid fa-check-circle" style={{color:'#ff6600'}}></i>Free Lunch and Coffee</p>
            <p><i class="fa-solid fa-times-circle" style={{color:'#afacacec'}}></i>Certificate</p>
            <p><i class="fa-solid fa-times-circle" style={{color:'#afacacec'}}></i>Easy Access</p>
            <button><span>BUY A TICKET</span></button>
          </div>
        </div>
        <div className="standard">
          <div className="rs1">
            <p>STANDARD</p>
            <hr />
            <h2>
              49.00<span>$</span>
            </h2>
            <h6>/PERSON</h6>
          </div>
          <div className="planInfo1">
          <p><i class="fa fa-check-circle" style={{color:'#ff6600'}}></i>1 Comfortable Seats</p>
            <p><i class="fa fa-check-circle" style={{color:'#ff6600'}}></i>Free Lunch and Coffee</p>
            <p><i class="fa fa-check-circle" style={{color:'#ff6600'}}></i>Certificate</p>
            <p><i class="fa-solid fa-times-circle" style={{color:'#afacacec'}}></i>Easy Access</p>
            <button><span>BUY A TICKET</span></button>
          </div>
        </div>
        <div className="platinum">
          <div className="rs2">
            <p>PLATINUM</p>
            <hr />
            <h2>
              99.00<span>$</span>
            </h2>
            <h6>/PERSON</h6>
          </div>
          <div className="planInfo2">
          <p><i class="fa-solid fa-check-circle" style={{color:'#ff6600'}}></i>1 Comfortable Seats</p>
            <p><i class="fa-solid fa-check-circle" style={{color:'#ff6600'}}></i>Free Lunch and Coffee</p>
            <p><i class="fa-solid fa-check-circle" style={{color:'#ff6600'}}></i>Certificate</p>
            <p><i class="fa-solid fa-check-circle" style={{color:'#ff6600'}}></i>Easy Access</p>
            <button><span>BUY A TICKET</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTicket;
