// google maps script
initMap();
function initMap() {
    // The location of Uluru
    const port_elizabeth = { lat: -33.91799, lng: 25.57007 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: port_elizabeth,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: port_elizabeth,
        map: map,
    });
};