import React from "react";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./footer.css";

export default function Footer() {
  return (
    <div className="top">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1" />
          <div className="wave" id="wave2" />
          <div className="wave" id="wave3" />
          <div className="wave" id="wave4" />
        </div>
        <p><h3>Have any Questions?</h3><br/>
            <ul>
              <li>
                
              {/* <FontAwesomeIcon icon="fa-solid fa-map" /> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>                */}
              Reach us out at Shop No. 295, Tru Pharma, Connaught Place,New Delhi 
              </li>
              <li>
                <i className="fa fa-phone-alt" style={{paddingRight:"12px"}}></i>
                Call at 22684-22684
              </li>
              <li>
                <i className="fa fa-paper-plane" style={{paddingRight:"12px"}}></i>
                trupharma@gmail.com
              </li>
            </ul></p>
      </footer>
    </div>
  );
}