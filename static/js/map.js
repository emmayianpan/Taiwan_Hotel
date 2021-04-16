//Map (Leaflet)
function makeMap() {
    var myMap = L.map("map", {
        center: [23.5494, 120.39832],
        zoom: 7.4
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: "pk.eyJ1IjoiZW1tYXlpYW5wYW4iLCJhIjoiY2tnNzhsc29xMDR2ZjJ5cW5ueDhuemphMCJ9.GdCa5tNXBRr-RBNdVoBb1w"
    }).addTo(myMap);

    d3.csv("../static/data/map.csv").then(function (response) {
        console.log(response)
        var markers = L.markerClusterGroup();

        for (var i = 0; i < response.length; i++) {
            var location = response[i];

            if (location) {
                markers.addLayer(L.marker([location.Latitude, location.Longitude])
                    .bindPopup(`<b>${response[i].Hotel} &nbsp
          ${response[i].Hotel_Eng}</b><br>
          <b>Address:</b> ${response[i].Address}<br>
          <b>Phone:</b> ${response[i].Phone}<br>
          <b>2020 Annual Occupancy:</b> ${response[i].Occupancy}<br>
          <b>2020 Annual ADR:</b> $${response[i].ADR}<br>
          <b>2020 Annual RevPAR:</b> $${response[i].RevPAR}<br>
          <a href= ${response[i].Website}>Website</a><br>
          <b>${response[i].Note}</b>`));
            }

        }
        myMap.addLayer(markers);

    });
}

makeMap();