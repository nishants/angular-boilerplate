app.directive("dropDown", [function () {

  return {
    restrict: "C",
    scope   : true,
    template: "<div class='dropdown-inner' ><div class='current' ng-click='dropdown.show(!dropdown.active)'><label class='value' ng-bind='dropdown.current.value' ng-show='dropdown.current.value'></label> <label class='placeholder' ng-bind='dropdown.name' ng-hide='dropdown.current.value'></label><div class='caret fa fa-chevron-down'></div></div><ul class='options'><li ng-repeat='option in dropdown.options' ng-bind='option.value' ng-click='dropdown.select(option)'></li><li ng-click='dropdown.clear()' ng-show='dropdown.reset' ng-bind='dropdown.reset'></li></ul></div>",
    link    : function (scope, element, attrs) {
      var dropdown = {
        name: attrs.name,
        active: false,
        reset: scope.$eval(attrs.reset) || attrs.reset,
        current: {
          value: scope.$eval(attrs.value)
        },
        options: scope.$eval(attrs.options),
        select: function (option) {
          dropdown.current.value = option.value;
          dropdown.show(false);
        },
        show: function(value){
          dropdown.active = value;
          value ? element.addClass("active") : element.removeClass("active");
        },
        clear: function(){
          dropdown.current = {value: null};
          dropdown.show(false);
        }
      };
      scope.dropdown = dropdown;

    }
  };
}]);