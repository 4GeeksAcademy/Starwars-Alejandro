const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Films: [],
			Characters: [],
			Planets: [],
			Species: [],
			Starships: [],
			Vehicles: [],
			wishList: []
		},
		actions: {
			getFilms: () => {
				try {
					fetch('https://swapi.tech/api/films')
						.then(resp => resp.json())
						.then(data => setStore({Films: data.result}))
				} catch (error) {
					console.error(error);
				}
			},

			getCharacters: async (page) => {
				try {
					fetch(`https://swapi.tech/api/people${page === undefined ? '?page=1&limit=10' : page}`)
						.then(resp => resp.json())
						.then(data => setStore({Characters: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getPlanets: async (page) => {
				try {
					fetch(`https://swapi.tech/api/planets${page === undefined ? '?page=1&limit=10' : page}`)
						.then(resp => resp.json())
						.then(data => setStore({Planets: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getSpecies: async (page) => {
				try {
					fetch(`https://swapi.tech/api/species${page === undefined ? '?page=1&limit=10' : page}`)
						.then(resp => resp.json())
						.then(data => setStore({Species: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getStarships: async (page) => {
				try {
					fetch(`https://swapi.tech/api/starships${page === undefined ? '?page=1&limit=10' : page}`)
						.then(resp => resp.json())
						.then(data => setStore({Starships: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			getVehicles: async (page) => {
				try {
					fetch(`https://swapi.tech/api/vehicles${page === undefined ? '?page=1&limit=10' : page}`)
						.then(resp => resp.json())
						.then(data => setStore({Vehicles: data.results}))
				} catch (error) {
					console.error(error);
				}
			},

			sendWishList: arr => {
				setStore({ wishList: arr });
			},

			addWishList: item => {
				const store = getStore();
				if (!store.wishList.includes(item)){
					setStore({ wishList: [...store.wishList, item] });
				};
			},

			deleteWishList: item => {
				const store = getStore();
				setStore({ wishList: store.wishList.filter(i => i !== item) })
			}
		}
	};
};

export default getState;
