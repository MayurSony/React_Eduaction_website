import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

//in this we are creating a page in such a way ,
//that in the contact section , if we send the mail , it will be visible to the mail section.
//we have taken out that code from the web3forms that are present in the google .
//we have to create our ascess key and use that in the main code .

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "19dd6730-b347-4dd0-95e8-18600fee8975");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Emial Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact form or find our contact
                 information below. Your feedback, questions , and suggestions are important to us 
                 as we strive to provide exceptional service to our university Community.</p>

                 <ul>
                    <li><img src={mail_icon} alt=''/> contact@gmail.com</li>
                    <li><img src={phone_icon} alt=''/>123-456-789-1</li>
                    <li><img src={location_icon} alt=''/> 76, Massachusetts Ave, Cambridge <br/> Ma 02139, united states.</li>

                 </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='enter your mobile no' required/>
                <label>Write your message here!</label>
                <textarea name='message' rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=''/></button>
            </form>

            <span>{result}</span>

        </div>

      
    </div>
  )
}

export default Contact
