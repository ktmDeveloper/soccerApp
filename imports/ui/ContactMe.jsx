import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

import '../../public/contactMe.css'
export default function contactMe() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17889.754189024956!2d-122.34319473339515!3d47.601302581649996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1532450545004"
        width="100%"
        height="100%"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      />
      <div className="contactMeForm">
        <div className="head">
          <h2> Contact Me </h2>
          <div className="bottom">
                <a href="https://www.linkedin.com/in/shalindra-shrestha/" style={{marginRight: 16}}>
                  <Chip
                    avatar={<Avatar>LN</Avatar>}
                    label="LinkedIn"
                    className="contactChip"
                  />
                </a>
                <a href="https://github.com/ktmDeveloper">
                  <Chip
                    avatar={<Avatar>GH</Avatar>}
                    label="GitHub"
                    className="contactChip"
                  />
                </a>
          </div>
        </div>
      </div>
    </div>
  );
}

