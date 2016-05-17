angular.module('galPhoto')

.factory('instagram', function($resource){
    return {
        fetchPopular: function(callback){
            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
                client_id: '28bfa1f7f67742bc8411954cf63db0ef'
            }, {
                fetch: { method: 'JSONP'}
            });
            
            api.fetch(function(response){
                callback(response.data);
            });
        }
    }
})