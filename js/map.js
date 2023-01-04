// Global variables
const LIST_PATHS = {};
const LIST_MARKERS = [];
const CURRENT_CHAR = [];

const PATH_SPEED_ANIMATION = 200;
const PATH_WEIGHT = 1.5;

// Leaflet map setup
let map = L.map('map', {
    crs: L.CRS.Simple,
    attributionControl: false,
    zoom: 1,
    minZoom: 0,
    maxZoom: 3,
    zoomControl: false,
});

// Set zoom panel to the top left
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// Show coordinates
let c = new L.Control.Coordinates();
c.addTo(map);
map.on('click', function(e) {
	c.setCoordinates(e);
});

// Draw options for measure distance feature
var drawPluginOptions = {
    position: 'bottomright',
    draw: {
        polyline: {
            shapeOptions: {
                color: '#000000',
                weight: 2
            }
        },
        polygon: false,
        circle: false,
        rectangle: false,
        circlemarker: false,
        marker: false
    }
};

var drawControl = new L.Control.Draw(drawPluginOptions);
map.addControl(drawControl);
L.Draw.Polyline.prototype._onTouch = L.Util.falseFn; // Fix for touchscreen

// Set the custom map
let bounds = [[0,0], [1000,1366]];
let image = L.imageOverlay('/img/map.jpg', bounds).addTo(map);
map.setView([500,683]);


// Books links
const listBooks = [
    'Master & Commander', 
    'Post Captain', 
    'HMS Surprise', 
    'The Mauritius Command', 
    'Desolation Island', 
    'The Fortune of War', 
    'The Surgeon´s Mate', 
    'The Ionian Mission', 
    'Treasons Harbour',
    'The Far Side of the World',
    'The Reverse of the Medal',
    'The Letter of Marque',
    'The Thirteen-Gun Salute',
    'The Nutmeg of Consolation',
    'Clarissa Oakes',
    'The Wine-Dark Sea',
    'The Commodore',
    'The Yellow Admiral',
    'The Hundred Days',
    'Blue at the Mizzen ',
    'The Final Unfinished Voyage of Jack Aubrey or 21',
    
];



// Markers & Paths
function setMarker() {
    DATA_MARKERS.markers.filter((marker) => {
        //console.log(LIST_PATHS);
        let selectedbooks = Object.keys(LIST_PATHS);
        if (selectedbooks.length == 0) {return true;}
        for (let selectedbook of selectedbooks) {
            if (typeof marker.books == "object" && marker.books.includes(selectedbook)) {return true}
        } 
        return false;

    }).forEach((marker) => {
        let confirmed = (marker.isConfirmed) ? ""  : "<div class='tooltip-tag tooltip-tag--unconfirmed'>coordinates not confirmed</div>";
        let readMore = (marker.readMoreUrl) ? "<div class='tooltip-moreinfo'><a href='" + marker.readMoreUrl + "' target='_blank'>Read more about " + marker.title + "</a></div>"  : "";
        let dataProvided = (marker.dataProvidedUrl) ? "<div class='tooltip-dataprovided'>Data provided by <a href='" + marker.dataProvidedUrl + "' target='_blank'>The Patrick O'Brian Mapping Project</a></div>"  : "";
        let type = DATA_MARKERS.types.find((type) => type.name === marker.type);

            LIST_MARKERS.push(L.marker(marker.coordinates, 
                {icon: L.icon(
                     {
                        iconUrl: '/img/markers/'+ type.icon, 
                        iconSize: type.iconSize, 
                        iconAnchor: type.iconAnchor, 
                        popupAnchor: type.popupAnchor
                    }
                    ), 
                    maxWidth: '500', 
                    title: marker.title
                })
                .bindPopup("<div class='tooltip-image-wrapper' style='background: url(\"/img/popups/min/" + marker.image + "\")'></div><div class='tooltip-content'><header class='tooltip-header'><h2>" + marker.title + "</h2><div class='tooltip-tag'>" + marker.type + "</div>" + confirmed + "</header><div><div class='tooltip-description'>" + marker.description + "</div><div class='tooltip-quote'>" + marker.quote + "</div><div class='tooltip-seenin'><strong>Appears in the book:</strong><br> "+ marker.books + "</div>"+ readMore + ""+ dataProvided + "</div></div>")
                .addTo(map));
    });
}

// Set markers on the map 
setMarker();



/*
 * Function that triggers setPath function through an input 
 *
 * @param element the input checked/unchecked by the user
*/
function togglePathCheckbox(element) {
    setPath(element.name);
}

/*
 * Function that draw or remove a path from the map
 *
 * @param element Html checkbox
 * 
*/
function setPath(element) {
    let bookName = element.name;

    if (LIST_PATHS[bookName] === undefined) {
        LIST_PATHS[bookName] = L.layerGroup(getPolylinesFromName(bookName), { snakingPause: PATH_SPEED_ANIMATION }).addTo(map).snakeIn();
    } else
    {
        LIST_PATHS[bookName].removeFrom(map);
        delete LIST_PATHS[bookName];
    }
    LIST_MARKERS.forEach(maker => {
        maker.removeFrom(map);
    });
    LIST_MAKERS = [];
    setMarker();
}

/*
 * Function that refresh all polylines drawn on the map
*/
function refreshTimelinePaths() {
    Object.keys(LIST_PATHS).forEach(bookName => {
        if (LIST_PATHS[bookName] != undefined)
            LIST_PATHS[bookName].removeFrom(map);
            
        LIST_PATHS[bookName] = L.layerGroup(getPolylinesFromName(bookName)).addTo(map);
    });

    LIST_MARKERS.forEach(maker => {
        maker.removeFrom(map);
    });
    LIST_MAKERS = [];
    setMarker();
    
}

/*
 * Function that returns every polyline of a book
*/
function getPolylinesFromName(bookName) {
    let bookPaths, layerArray = [];

    bookPaths = DATA_PATHS.paths.filter(path => 
        (path.book === bookName));

    bookPaths.forEach(bookPath => {
        let polyLine = L.polyline(bookPath.coordinates, 
            {
                color: bookPath.color,
                weight: PATH_WEIGHT,
                dashArray: bookPath.isConfirmed ? '0' : '10 10 1 10',
                opacity: bookPath.isConfirmed ? '1' : '.7',
                className: 'polyline',
            }).bindTooltip(bookPath.pathName);
        layerArray.push(polyLine);
    });

    return layerArray;
}
// Ocultar elementos vacíos de los popups
const emptyElements = document.querySelectorAll(".empty");
emptyElements.forEach(element => {
  element.style.display = "none";
});
  

// Dev, show paths on console when drawing on the map
// Hace falta pulsar en finalizar la linea para verlo en console
map.on(L.Draw.Event.CREATED, function (e) {
    var layer = e.layer, output = "";

    layer.getLatLngs().forEach(element => {
        output += `[${element.lat}, ${element.lng}], `
    });

    console.log(output);
 });

 