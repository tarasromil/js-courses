import * as R from 'ramda';



const toJSON = response => response.json();

const fetchAndMap = (url, map) => fetch(url).then(toJSON).then(map);

const idEquals = _id => R.propEq('_id', Number(_id));

const findById = _id => R.find(idEquals(_id));

const findIndexById = _id => R.find(idEquals(_id));


const COLLECTIONS = {
  questions: [],
  comments: [],
};


const API = 'https://jsonplaceholder.typicode.com/';

const API_URL = {
  questions: 'posts',
  answers: 'comments',
  votes: 'todos',
  users: 'users',
};

const getUrl = (collection, id = '') => `${API}${API_URL[collection]}/${id}`;

const MAPS = {
  questions: item => ({
    _id: item.id,
    title: item.title,
    description: item.body,
    tags: ['tag'],
    createdAt: new Date(),
    createdById: item.userId,
  }),
  answers: (item, i) => ({
    _id: item.id,
    questionId: item.postId,
    createdAt: new Date(),
    createdById: i + 1,
    title: item.name,
    description: item.body,
  }),
  votes: (item, i) => ({
    _id: item.id,
    isPositive: item.completed,
    createdAt: new Date(),
    createdById: item.userId,
    answerId: i + 1,
  }),
  users: item => ({
    _id: item.id,
    email: item.email,
    profile: {
      fullName: item.name,
      post: item.company.bs
    },
    services: {},
  }),
};


const mapData = name => data => data.map(MAPS[name]);

const createCollection = name => ({
  find: async function() {
    return COLLECTIONS[name].length > 0 ?
      COLLECTIONS[name] :
      await fetchAndMap(getUrl(name), mapData(name)).then(data => {
        COLLECTIONS[name] = data;
        return data;
      });
  },
  findOne: async function(_id) {
    const found = findById(_id)(COLLECTIONS[name]);
    return found || await fetchAndMap(getUrl(name, _id), MAPS[name]).then(item => {
      this.find();
      return item;
    });
  },
  insert: function(doc) {
    const ids = COLLECTIONS[name].map(R.prop('_id'));
    const lastId = Math.max(...ids);
    const newDoc = { ...doc, createdAt: new Date(), _id: lastId + 1 };
    COLLECTIONS[name] = COLLECTIONS[name].concat(newDoc);
    return newDoc;
  },
  update: function(id, fields) {
    const _id = Number(id);
    const index = findIndexById(_id)(COLLECTIONS[name]);
    const doc = COLLECTIONS[name][index];
    const newDoc = { ...doc, ...fields, _id };
    COLLECTIONS[name][index] = newDoc;
    return newDoc;
  }
});


export default {
  questions: createCollection('questions'),
  answers: createCollection('answers'),
  votes: createCollection('votes'),
};
