'use strict'

$(function(){

	ymaps.ready(init);

	var myMap, 
	    myPlacemark;

	function init(){ 
	    myMap = new ymaps.Map("map", {
	        center: [59.94, 30.29],
	        zoom: 12,
	        controls: ["zoomControl", "fullscreenControl"]
	    }); 

	    myMap.controls.add("trafficControl", {
	            float: "left"
	        })

	    myMap.behaviors.disable('scrollZoom');
	    
	    myPlacemark = new ymaps.Placemark([59.94, 30.29], {
	        hintContent: 'Ждем Вас!'
	    });
	    
	    myMap.geoObjects.add(myPlacemark);
	}

});

