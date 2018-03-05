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

const ALL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';


export default {
  find: () => fetch(ALL_DATA_URL).then(toJSON).then(mapData),
  findOne: _id => fetch(`${ALL_DATA_URL}/${_id}`).then(toJSON).then(mapItem),
};