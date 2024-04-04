import '../App.css';
import './Contact.css';
import BasicTextFields from './TextField';


function Contact() {

  return (
    <div className='cu-container'>
        <div className="photo-text">Photo by <a href="https://unsplash.com/@jack070?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jacek Smoter</a> on <a href="https://unsplash.com/photos/green-trees-during-daytime-guhKZly2fVM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
        <h1>CONTACT US</h1>
        <p>
          If you have any questions or see any missing content on our pages feel free to send us an email! 
          Please fill out your information below and a brief message of your concern.
        </p>
        <BasicTextFields />
    </div>
  );
}

export default Contact;