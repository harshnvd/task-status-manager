angular.module('app').directive('closeEditing',function(){
  var KEYS = {
   ESCAPE: 27
 };
 return {
   scope:{
     isEditing:'='
   },
   link:function(scope,element,attrs){
     console.log('Link');
     element.on('keyUp',function(e){
       if(_.isequal(e.keyCode,KEYS.ESCAPE)){
         scope.isEditing=false;
         scope.$apply();
       }
     });
   }
 };

});
