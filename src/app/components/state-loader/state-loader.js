app.run(["$rootScope", "stateMessages" ,function($rootScope, stateMessages){
  var state = {
      name        : "",
      loading     : null,
      message     : "Welcome Onboard !",
      error       : null,
      loadingNext  : function(name, message){
        state.message = message;
        state.loading = name;
        state.error   = null;
      },
      done         : function(stateName){
        state.loading = null;
        state.message = null;
        state.name    = stateName;
      },
      failed: function(error){
        state.loading = null;
        state.message = null;
        state.error   = error;
      }
    },
    nameFor = function(state){
      return state.replace(/\./g, "-");
    };

  $rootScope.$on("$stateChangeStart", function(event, toState){
    state.loadingNext(nameFor(toState.name), stateMessages[toState.name]);
  });

  $rootScope.$on("$stateNotFound", function(){
    state.failed("Unknown Error");
  });

  $rootScope.$on("$stateChangeError", function(){
    state.failed("Unknown Error");
  });

  $rootScope.$on("$stateChangeSuccess", function(event, toState){
    state.done(nameFor(toState.name));
  });

  $rootScope.state = state;
}]);