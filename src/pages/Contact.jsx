import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMessage("✅ Message sent successfully!");
          setErrorMessage("");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setErrorMessage("❌ Failed to send. Try again later.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className="page contact-page">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>I’d love to hear from you! Send a quick message below.</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="contact-btn">Send</button>
        </form>

        {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="error-msg">{errorMessage}</p>}

        <div className="contact-info">
          <p><strong>Email:</strong> asylbek.ibrahimov@gmail.com</p>
          <p><strong>Phone:</strong> (224) 341-8830</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://linkedin.com/in/asylbek-ibrakhimov" target="_blank" rel="noreferrer">
              linkedin.com/in/asylbek-ibrakhimov
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
