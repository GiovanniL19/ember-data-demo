import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});
