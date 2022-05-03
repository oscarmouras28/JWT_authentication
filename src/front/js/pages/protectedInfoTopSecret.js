import React, { useContext, useEffect} from "react";
import { Context } from "../store/appContext";


export const ProtectedInfoTopSecret = () => {
	const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMessage("protected");
    store.message;
    store.data;
    actions.getInfo();
  }, []);
  return (
    <div className="text-center mt-5">
      <h1>
        {store.data.message||"Debe iniciar sesion para ver"}
      </h1>
      {console.log('store.data', store.data)}
    </div>
  );
};
