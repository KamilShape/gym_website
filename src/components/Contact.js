import './styles/contact.css'

function Contact() {

  return (
    <section className="contact">
       <h1 className="title section_title">our gym</h1>
      <div className="container contact_container">
        <div className="contact_form">
        <h2 className="title">Send us message :)</h2>
          <label className="contact_label">
            <p className="contact_name">Name:</p>
            <input type="text" className="contact_input" />
          </label>
          <label className="contact_label">
            <p className="contact_name">Surname:</p>
            <input type="text" className="contact_input" />
          </label>
          <label className="contact_label">
            <p className="contact_name">E-mail:</p>
            <input type="text" className="contact_input" />
          </label>
          <textarea className="contact_message"></textarea>
          <button className="contact_button">send</button>
      </div>
      <iframe className='contact_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74463.3682203033!2d18.558681765570636!3d54.321980400190036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd731c14d4fa6f%3A0x9bb9fbf163b7be8d!2zR2RhxYRzaw!5e0!3m2!1spl!2spl!4v1662386341599!5m2!1spl!2spl" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
     
     
    </section>
  );
}

export default  Contact
