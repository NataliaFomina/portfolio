import React, { useState } from 'react';

function Contacts() {
  const  [status, setStatus ] = useState();
  function submitForm(ev) {
    console.log(ev);

    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <div className="contact-section container">


      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/xpzonjaz"
        method="POST"
        className="contact-form"
      >

        <label>Email:</label>
        <input type="email" name="email" placeholder="Email"/>
        <label>Message:</label>
        <textarea name="message" id="">

        </textarea>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </div>
  )
}

export default Contacts;