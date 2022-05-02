import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const SignIn = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMessage("sign-in");
    store.message;
  }, []);
  return (
    <div className="text-center mt-5">
            <h1>
        {store.message||"na de na por ahora"}
      </h1>
      <h1>ola soy sign in</h1>
    </div>
  );
};