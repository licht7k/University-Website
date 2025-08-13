import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cde352b6-d199-4207-9b5c-ed2b6cb2ad5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" name="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We'd love to hear from you! Please fill out the form below and we'll
          get back to you as soon as possible.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            mapagdalitarendjie37@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            09129110734
          </li>
          <li>
            <img src={location_icon} alt="" />
            Philippines
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here:</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="btn dark_btn">
            Send now
          </button>
        </form>
        <span>
            {result}
        </span>
      </div>
    </div>
  );
};

export default Contact;
