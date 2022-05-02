import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";


export const SignUp = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMessage("sign-up");
    store.message;
  }, []);

  const [form, setform] = useState()

  return (
    <div className="text-center mt-5">
      <h1>{store.message || "na de na por ahora"}</h1>
      <div className="container">
      <form>
          <img className="mb-4" src={rigoImageUrl} alt="" width="72" height="57" />

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
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
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
        </form>
      </div>
    </div>
  );
};
