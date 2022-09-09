import emailjs from "emailjs-com";

import "../styles/contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_loxuo8o", e.target, "d0QMfD17nPqDUJgHd")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.classList.add("msgSent");
    e.target.classList.remove("msgPending");
  }

  return (
    <div className="contact__wrap">
      <h1>contact us</h1>

      <form className="msgPending" onSubmit={sendEmail}>
        <div className="contact__form-content">
          <div className="contact__input-group">
            <label>full name</label>
            <input
              type="text"
              className="contact__input"
              placeholder="John Smith"
              name="name"
              required
            />
          </div>

          <div className="contact__input-groups">
            <div className="contact__input-group">
              <label>email</label>
              <input
                type="email"
                className="contact__input"
                placeholder="someone@domain.com"
                name="email"
                required
              />
            </div>
            <div className="contact__input-group">
              <label>discord username & discriminator</label>
              <input
                type="text"
                className="contact__input"
                placeholder="Elon_Musk#6969"
                name="discord"
                pattern=".+(#)[0-9]{4}$"
              />
            </div>
          </div>

          <div className="contact__input-group">
            <label>message</label>
            <textarea
              className="contact__textarea"
              placeholder="Bla Bla Bla"
              name="message"
              required
            ></textarea>
          </div>

          <input
            type="submit"
            name="submit"
            className="contact__btn"
            value="Send Message"
          />
        </div>

        <div className="contact__success">
          <h2>your message has been sent!</h2>
        </div>
      </form>
    </div>
  );
};

export default Contact;
