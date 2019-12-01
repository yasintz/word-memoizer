import axios from 'axios';

const WORDS_URL = 'https://jsonn-store.herokuapp.com/json/iGmy2vz7QPn4ehv';

interface Mutations {
  addWord: () => Promise<any>;
}
interface Queries {
  getWords: () => Promise<any>;
}

const mutations: Mutations = {
  addWord: async () => {},
};
const queries: Queries = {
  getWords: () =>
    axios
      .get(WORDS_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({ data }) => data.result),
};

export { mutations, queries };
