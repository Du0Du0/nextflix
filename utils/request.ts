const API_KEY = 'b18e798ff377ef49f1c335283e7c43d6';
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	sf: `${BASE_URL}/discover/movie?api_key=${API_KEY}&languages=en-US&with_genred=878`,
};

export default requests;
