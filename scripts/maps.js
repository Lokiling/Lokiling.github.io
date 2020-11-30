function initMap() {
    console.log("Initializing");
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: new google.maps.LatLng(15, -10),
        zoom: 2.8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        panControl: true,
        mapTypeControl: false,
        zoomControl: true,
        fullscreenControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControl: false
    }
    var map = new google.maps.Map(map_canvas, map_options);
    
    //Footprints Points: Place, coordinate, priority
    var footprints = [
        ['London, U.K.', 51.495, -0.138, 20],
        ['Oxford, U.K.', 51.76, -1.3, 19],
        ['Cambridge, U.K.', 52.21, 0.1, 18],
        ['Loughborough, U.K.', 52.77, -1.2, 17],
        ['Manchester, U.K.', 53.47, -2.24, 16],
        ['York, U.K.', 53.96, -1.08, 15],
        ['Windermere, U.K.', 54.35, -2.93, 14],
        ['Edinburgh, U.K.', 55.96, -3.2, 13],
        ['Loch Ness, U.K.',57.26, -4.51, 12],
        
        ['St Petersburg, Russia', 59.9, 30.2, 8],
        ['Moscow, Russia', 55.7, 37.7, 9],
        
        ['Chiang Mai, Thailand', 18.79, 98.98, 12],
        ['Bangkok, Thailand', 13.74, 100.57, 13],
        ['Pattaya, Thailand', 12.96, 100.88, 14],
        
        ['Kanasi, Xinjiang, China', 48.797, 87.026, 1],
        ['Keketuohai, Xinjiang, China', 47.2, 89.92,2],
        ['Urumqi, Xinjiang, China', 43.82, 87.60, 3],
        ['Yungang Grottoes, Shanxi, China', 40.111149, 113.132993, 3],
        ['Beijing, China', 39.91, 116.40, 4],
        ['Tianjin, China', 39.15, 117.20, 5],
        ['Mount Tai, Shandong, China', 36.255189, 117.083112, 5],
        ['Wutai Mountain, Shanxi, China', 38.99, 113.9, 6],
        ['Laoshan, Shandong, China', 36.153373, 120.665500, 6],
        ['Qingdao, Shandong, China', 36.063954, 120.314729, 7],
        ['Shaolin Temple, Henan, China', 34.51, 113, 7],
        ["Xi'an, Shaanxi, China", 34.27, 108.94, 8],
        ['Suzhou, Jiangsu, China', 31.31, 120.57, 9],
        ['Chengdu, Sichuan, China', 30.68, 104.04, 10],
        ['Xitang, Zhejiang, China', 30.94, 120.90,11],
        ['Wuzhen, Zhejiang, China', 30.75, 120.49,12],
        ['Hangzhou, Zhejiang, China', 30.28, 120.16, 13],
        ['Emeishan, Sichuan, China', 29.5958, 103.4993, 14],
        ['Zhangjiajie, Hunan, China', 29.06, 110.47, 15],
        ['Phoenix Ancient City, Hunan, China', 27.9, 109.6, 16],
        
        ['Amasra, Turkey', 41.749344, 32.386650, 1],
        ['Safranbolu, Turkey', 41.244618, 32.693966, 2],
        ['İstanbul, Turkey', 41.007848, 28.977732, 3],
        ['Ankara, Turkey', 39.923223, 32.838810, 4],
        ['Göreme, Turkey', 38.643932, 34.831702, 5],
        ['Selçuk, Turkey', 37.950211, 27.370440, 6],
        ['Ephesus, Turkey', 37.939376, 27.341556, 7],
        ['Kuşadası, Turkey', 37.859170, 27.257857, 8],
        ['Pamukkale, Turkey', 37.918156, 29.122490, 7],
        ['Antalya, Turkey', 36.883293, 30.705264, 9],
        ['Side, Turkey', 336.764706, 31.386072, 10],
        
        ['Key West, FL, US',24.558006, -81.805241, 8],
        ['Miami, FL, US',25.795564, -80.131604, 7],
        ['Orlando, FL, US',28.476149, -81.471572, 6],
        //['Jacksonville, FL, US',30.307947, -81.631226, 5],
        ['Los Angeles, CA, US', 34.090532, -118.326371, 5],
        ['San Diego, CA, US', 32.748220, -117.160364, 7],
        ['Mt Eden, KY, US', 38.041151, -85.159025, 4],
        ['Big Sur, CA, US', 36.261218, -121.796027, 4],
        ['Santa Barbara, CA, US', 34.423446, -119.702567, 4],
        ['Santa Cruz, CA, US', 36.963953, -122.025151, 3],
        ['Carmel, CA, US', 36.552578, -121.924856, 3],
        ['New York City, NY, US', 40.749341, -73.988647, 3],
        ['Las Vegas, NV, US', 36.124164, -115.170154, 3],
        ['San Francisco, CA, US', 37.784703, -122.410821, 2],
        //['Mountain View, CA, US', 37.419676, -122.083720, 2],
        ['Dayton, OH, US', 39.686289, -84.153749, 2],
        ['Indianapolis, IN, US', 39.766268, -86.157936, 2],
        ['Bloomington, IN, US', 39.169217, -86.518800, 2],
        ['Cleveland, OH, US', 41.49, -81.7, 1],
        ['Chicago, IL, US', 41.879506, -87.624738, 1],
        ['Salt Lake City, UT, US', 40.751893, -111.887994, 1],
        ['Denver, CO, US', 39.751058, -104.989702, 1],
        ['Kansas City, MO, US', 39.082398, -94.595501, 1],
        ['Vieques, Puerto Rico', 18.122502, -65.451293 , 3],
        ['El Yunque National Forest, Puerto Rico', 18.300795, -65.794310, 2],
        ['San Juan, Puerto Rico', 18.467547, -66.110443 , 1],
        ['Yellowstone National Park, WY, US', 44.524765, -110.837348 , 0],
        ['Arches National Park, UT, US', 38.739960, -109.502063 , 1],
        ['Bryce Canyon National Park, UT, US', 37.574000, -112.217790 , 2],
        ['Zion National Park, UT, US', 37.271759, -112.950043 , 3],
        ['Yosemite National Park, CA, US', 37.726837, -119.544930 , 2],
        
        ['Honolulu, HI, US', 21.278716, -157.829695 , 10],
        ['Haleakalā, HI, US', 20.709621, -156.252920 , 12],
        ['Road to Hana, HI, US', 20.756799, -155.988562 , 11],
        ['Mauna Kea, HI, US', 19.815919, -155.468936 , 13],
        ['Hawaiʻi Volcanoes National Park, HI, US', 19.410695, -155.280703 , 14],
        
        
        ['Helsinki, Finland<BR/>Feb, 2016', 60.171857, 24.942056, 20],
        ['Rome, Italy', 41.890042, 12.492178, 19],
        ['Venice, Italy', 45.434216, 12.339135, 19],
        ['Cinque Terre, Italy', 44.135366, 9.682536, 19],
        ['Lucca, Italy', 43.843794, 10.506339, 19],
        ['Pisa, Italy', 43.723015, 10.395249, 19],
        ['Florence, Italy', 43.776796, 11.247699, 19],
        ['Naples, Italy', 40.853185, 14.274839, 19],
        ['Pompeii, Italy', 40.749739, 14.487245, 19],
        
        ['Guadalajara, México', 20.676924, -103.347169, 20],
        ['Guanajuato, México',21.015734, -101.253005,23],
        ['San Miguel de Allende, México',20.913921, -100.743856,24],
        ['Ciudad de México, México', 19.432467, -99.133269, 25],
        ['Monte Albán', 17.044872, -96.767562, 26],
        ['Oaxaca', 17.060456, -96.725293, 27],
        
        ['Barcelona, Spain', 41.403563, 2.174409, 20],
        ['Granada, Spain', 37.176957, -3.592384, 23],
        ['Córdoba, Spain', 37.878856, -4.779526, 21],
        ['Sevilla, Spain', 37.382901, -5.991083, 22],
        ['Madrid, Spain', 40.422170, -3.698937, 21],
        ['Segovia, Spain', 40.947999, -4.117879, 20],
        
        ['San Pedro de Atacama, Chile', -22.910823, -68.200480, 29],
        ['Viña del Mar, Chile',-33.024602, -71.551845, 30],
        ['Valparaíso, Chile',-33.042928, -71.626107,31],
        ['Santiago, Chile',-33.426317, -70.633970, 32],
        ['Torres del Paine, Chile', -51.023166, -72.989852, 33],
        ['Puerto Natales, Chile',-51.726778, -72.506493, 34],
        ['Punta Arenas, Chile',-53.1628002,-70.9087002, 35]
    ];
    
    var travelplans = [
        // ['Mexico City, Mexico</br> Sep, 2018', 19.432467, -99.133269, 25]
    ];
    
    // var travellist = [
    //     ['Santiago, Chile', -33.458963, -70.661041, 60]
    // ];
    
    setMarkers(map, footprints, 1);
    setMarkers(map, travelplans, 2);
    // setMarkers(map, travellist, 3);
    
    function setMarkers(map, locations, markerType) {
        var loct = {
            url: 'images/location.png',
            size: new google.maps.Size(20,34),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(10,34)
        };
        
        var plan = {
            url: 'images/location_plan.png',
            size: new google.maps.Size(22,34),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(11,34)
        };
        
        var wish = {
            url: 'images/location_wish.png',
            size: new google.maps.Size(22,34),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(11,34)
        };
        
        if (markerType == 1) {
            var marker = loct;
        } else if ( markerType == 2) {
            var marker = plan;
        } else {
            var marker = wish;
        }
        
        var shape = {
            coord: [1, 1, 1, 34, 28, 34, 28 , 1],
            type: 'poly'
        };
        
        var markers = [];
        var infowindows = [];
        var currentInfoWindow = null;  //capture last infowindow
        
        for (var i=0; i< locations.length; i++) {
            var footprint = locations[i];
            var myLatLng = new google.maps.LatLng(footprint[1], footprint[2]);
            
            infowindows[i] = new google.maps.InfoWindow({
                content: '<div style="line-height:1.35;overflow:hidden; white-space:nowrap; font-size:16px;">' + footprint[0] + '</div>'
            });
            
//             infowindows[i] = new google.maps.InfoWindow({
//                  content:'<div id="iw-container" style="border-radius:8px;">' +
//                     '<div class="iw-title">' + footprint[0] + '</div>' +
//                   '</div>'
//             });
            
            markers[i] = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: marker,
                shape: shape,
                title: footprint[0],
                zIndex: footprint[3],
                infowindow: infowindows[i]
            });
            
            google.maps.event.addListener(markers[i],'click', function() {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                }
                this.infowindow.open(map, this);
                currentInfoWindow = this.infowindow;
            });
        }
    }
    
    google.maps.event.addListener(map, 'drag', function(){
        var proj =map.getProjection();
        var bounds = map.getBounds();
        var lat = map.getCenter().lat();
        var lng = map.getCenter().lng();
        if (lat > 0) 
            lat = 65;
        else if (lat <= 0 ) 
            lat = -65;
        var sLat = map.getBounds().getSouthWest().lat();
        var nLat = map.getBounds().getNorthEast().lat();
        if (sLat < -85 || nLat > 85) {
            map.setOptions({
                center: new google.maps.LatLng(lat , lng), 
            })
        }
    });

}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD14vjlzwm_6MIbENUBdVM5hXgI8LIsXhI&callback=initMap';
  document.body.appendChild(script);
    console.log("loaded");
}

window.onload = loadScript;