export default function Contact() {
  return (
    <form>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <section>
        <div className="name">
          <div className=" form-control">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name=""
              id="first_name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className=" form-control">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name=""
              id="last_name"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className=" form-control">
          <label htmlFor="email">Email</label>
          <input type="text" name="" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible"
            required
          ></textarea>
        </div>

        <div className="agreement form-control">
          <input type="checkbox" name="" id="checkbox" />
          <p>
            You agree to providing your data to {`name`} who may contact you.
          </p>
        </div>

        <button id="btn__submit">Send message</button>
      </section>
    </form>
  );
}
