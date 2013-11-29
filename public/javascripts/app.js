var ll = LazyLoad,
    WH = {
        assets: [
            'javascripts/maps.js'
        ],
        initialize: function(){
            ll.js(WH.assets, function(){
                google.maps.event.addDomListener(window, 'load', WH.maps.initialize);
            });
        }
    };

WH.initialize();





