import React, { useContext, useEffect, useState } from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

export const SignIn = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMessage("sign-in");
    store.message;
    form;
  }, []);
  const [form, setform] = useState({});

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  function handleSubmit(event) {
    {
      event.preventDefault();
      fetch(
        "https://3001-4geeksacade-reactflaskh-3j2qdwrxe2m.ws-us43.gitpod.io/api/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      )
      .then((response) => {
        response.json().then((data) => {localStorage.setItem('jwt',data.access_token)
      console.log('data', data)});
        })
        .catch((err) => {
          console.error(err);
        });
      }
    }
  return (
    <div className="text-center mt-5">
      <h1>{store.message}</h1>
      <div className="container">
        <form>
          <img
            className="mb-4"
            src={rigoImageUrl}
            alt=""
            width="72"
            height="57"
          />
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
        </form>
      </div>
    </div>
  );
};
