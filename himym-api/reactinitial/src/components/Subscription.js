import React, { useState, useEffect } from "react";

export default function Subscription() {
  const validateEmail = (email) =>
    typeof email === "string" && email.includes("@") && email.includes(".");

  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form>
      <h1>Subscribe to our newsletter</h1>
      <input type="text" value={email} onChange={onEmailChange}></input>
      <button disabled={isDisabled} onClick={handleSubmit}>
        Subscribe
      </button>
    </form>
  );
}
