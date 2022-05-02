import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";


export const ProtectedInfoTopSecret = () => {
	const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMessage("protected");
    store.message;
  }, []);
  return (
    <div className="text-center mt-5">
      <h1>
        {store.message||"Debe iniciar sesion para ver"}
      </h1>
    </div>
  );
};
