import TSConfig from './constants.js';

var crudService = function ($http, $q) {

  var crud = {}

  crud.post = function(table, formData){
    return $http
      .post(TSConfig.urlBase + table, formData)
      .then(function(response){
        return $q.resolve(response);
      },function(response){
          return $q.reject(response.data);
    });
  }

  crud.get = function(table){
    return $http
      .get(TSConfig.urlBase + table)
  }

  crud.getById = function(table, searchId) {
    return $http
      .get(TSConfig.urlBase + table + "/" + searchId)
  }

  crud.getByName = function(table, searchId) {
    return $http
      .get(TSConfig.urlBase + table + "/nome/" + searchId)
  }

  crud.getWithFilter = function(table, formData) {
    return $http
      .post(TSConfig.urlBase + table + "/filter", formData)
      .then(function(response){
        return response;
      },function(response){
          return $q.reject(response.data);
    });
  }

  crud.delete = function(table, id, options){
    if (options){
      console.log(TSConfig.urlBase + table + "/" + id + "/" + options.cart.id_produto);
      return $http
        .delete(TSConfig.urlBase + table + "/" + id + "/" + options.cart.id_produto)
        .then(function(response){
          return;
        },function(response){
              return $q.reject(response.data);
        });
    }else {
      return $http
        .delete(TSConfig.urlBase + table + "/" + id)
        .then(function(response){
          return;
        },function(response){
              return $q.reject(response.data);
        });
    }

  }

  crud.update = function(table, id, formData){
    return $http
      .put(TSConfig.urlBase + table + "/" + id, formData)
      .then(function(response){
        return;
      },function(response){
          return $q.reject(response.data);
    });
  }

  return crud;

};
export default angular
  .module('services.crud', [])
  .factory('crudService', crudService)
  .name;
