$(document).ready(function() {
  console.log("Script included!");
   $("p").click(function() {
    $("img").toggle(1000);
   });
   $("#pe").click(function() {
   	$(this).after("Bought!");
   }); 
   $("#to").click(function() {
   	$(this).after("Bought!");
   }); 
   $("#do").click(function() {
   	$(this).after("Bought!");
   }); 
   $("#ch").click(function() {
   	$(this).after("Bought!");
   }); 
   $("#flatten").click(function() {
   	$(this).after("Done!");
   }); 
   $("#toss").click(function() {
   	$(this).after("Done!");
   }); 
   $("#paste").click(function() {
   	$(this).after("Done!");
   }); 
   $("#put").click(function() {
   	$(this).after("Done!");
   }); 
   $("#bake").click(function() {
   	$(this).after("Done!");
   }); 
});