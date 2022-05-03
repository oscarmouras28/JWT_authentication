const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      data: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: (page) => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/" + page)
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getInfo: () => {
        fetch("https://3001-4geeksacade-reactflaskh-3j2qdwrxe2m.ws-us43.gitpod.io/api/protected", {
			"method": "GET",
			"headers": {
			  "Content-Type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem('jwt')}`
			}
		  })
		  .then(response => {
			response.json().then(data=>setStore({data:data}))
		  })
		  .catch(err => {
			console.error(err);
		  })},
    },
  };
};

export default getState;
