const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			apiURL: "https://assets.breatheco.de/apis/fake/contact",
			agendas: null,
			agenda: null, //agenda seleccionada en ese momento
			contacts: null, // donde van a estar guardados toedos los contactos
			contact: null // contacto seleccionado para guardarlo o editarlo
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			handleChangeAgenda: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				});
			},

			getAgendas: url => {
				const store = getStore();
				fetch(store.apiURL + url)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							agendas: data
						});
					});
			}
		}
	};
};

export default getState;
