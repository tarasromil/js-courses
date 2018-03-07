import * as R from 'ramda';


const mapItem = item => ({
  _id: item.id,
  title: item.title,
  description: item.body,
  tags: ['tag'],
  createdAt: new Date(),
  createdById: item.userId,
});

const mapData = data => data.map(mapItem);

const toJSON = response => response.json();

const fetchAndMap = (url, map) => fetch(url).then(toJSON).then(map);

const idEquals = _id => R.propEq('_id', Number(_id));

const findById = _id => R.find(idEquals(_id));

const findIndexById = _id => R.find(idEquals(_id));

const ALL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

const COLLECTIONS = {
  questions: []
};

export default collectionName => ({
  find: async function() {
    return COLLECTIONS[collectionName].length > 0 ?
      COLLECTIONS[collectionName] :
      await fetchAndMap(ALL_DATA_URL, mapData).then(data => {
        COLLECTIONS[collectionName] = data;
        return data;
      });
  },
  findOne: async function(_id) {
    const found = findById(_id)(COLLECTIONS[collectionName]);
    return found || await fetchAndMap(`${ALL_DATA_URL}/${_id}`, mapItem).then(item => {
      this.find();
      return item;
    });
  },
  insert: function(doc) {
    const ids = R.map(R.prop('_id'))(COLLECTIONS[collectionName]);
    const lastId = Math.max(...ids);
    const newDoc = { ...doc, _id: lastId + 1 };
    COLLECTIONS[collectionName] = COLLECTIONS[collectionName].concat(newDoc);
    return newDoc;
  },
  update: function(_id, fields) {
    const index = findIndexById(_id)(COLLECTIONS[collectionName]);
    const doc = COLLECTIONS[collectionName][index];
    const newDoc = { ...doc, ...fields, _id };
    COLLECTIONS[collectionName][index] = newDoc;
    return newDoc;
  }
});