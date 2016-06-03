(function(){

var myApp = angular.module('myApp', []);

    myApp.controller('mapCtrl', mapCtrl);

    function mapCtrl() {
        var vm = this;
        vm.markers = [];
        vm.markerId = 0;
        vm.contentString = "boom"

        //console.log(document.getElementById('map_canvas'));
        vm.map;
        vm.map = new google.maps.Map(document.getElementById('map_canvas'), {
            center: {lat: 40.0150, lng: -105.2705},
            zoom: 11
        });

        vm.map.addListener('click', function(e) {
            placeMarkerAndPanTo(e.latLng, vm.map);
        });

        function placeMarkerAndPanTo(latLng, map) {
            var marker = new google.maps.Marker({
                position: latLng,
                map: vm.map,
                icon: 'images/gold-nug.png'
            });
            marker.id = vm.markerId;
            vm.markerId++;
            vm.markers.push(marker);
            map.panTo(latLng);
            //console.log(vm.markers);

            vm.markers[marker.id].addListener("mouseover", function (e) {
                showInfoWindow(vm.map, marker, vm.content);
            });

        }

        // vm.markers[vm.markerId].addListener("mouseover", function (e) {
        //     showInfoWindow(vm.map, vm.markers);
        // });

        function showInfoWindow(map, marker, content) {
            var infowindow = new google.maps.InfoWindow({
                content: vm.contentString
            });
            infowindow.open(map, marker);
        }
            // for (var i = 0; i < vm.markers.length; i++) {
            //     if (vm.markers[i].id == marker.id) {
            //
            //     }
            // }



        // vm.overlay = new google.maps.OverlayView();
        // vm.overlay.draw = function() {}; // empty function required
        // vm.overlay.setMap(vm.map);
        // vm.element = document.getElementById('map_canvas');
        //
        // vm.addOnClick = function(event) {
        //     var x = event.gesture.center.pageX;
        //     var y = event.gesture.center.pageY;
        //     var point = new google.maps.Point(x, y);
        //     var coordinates = vm.overlay.getProjection().fromContainerPixelToLatLng(point);
        //
        //     var marker = new google.maps.Marker({
        //         position: coordinates,
        //         map: vm.map
        //     });
        //

        // };
    };
})();
