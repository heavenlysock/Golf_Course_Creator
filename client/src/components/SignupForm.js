import React, { useState, useEffect } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        }
      })
    })
      .then(response => {
        console.log(response);
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
      })
      .catch(error => {
        console.log(error);
        setErrors(error.response.data.errors);
      });
  }

  return (
    <div>
      <h2>Sign up</h2>
      {errors.length > 0 && (
        <div>
          {errors.map(error => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordConfirmation">Confirm password:</label>
          <input
            type="password"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupForm;