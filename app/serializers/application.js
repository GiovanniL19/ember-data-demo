import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, modelClass, payload, id, requestType) {
        const model = [modelClass.modelName]
        let newPayload = { [model]: null }
        newPayload[model] = payload;
        
        if(newPayload[model].length >= 0){
            newPayload[model].forEach((item) => {
                item.type = modelClass.modelName;
            });
        }else{
            newPayload[model].type = modelClass.modelName;
        }
        return this._super(store, modelClass, newPayload, id, requestType);
    }
});