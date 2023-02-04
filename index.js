const map = L.map('mapa', {
    zoom: 5,
    center: [4.164370, -73.968462],
    maxZoom: 24,
    minZoom: 3,
});

// L.tileLayer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 24,
    maxNativeZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // bounds: [
    //     [7.3025362053673275, -69.59289550781251],
    //     [1.9991059831233327, -77.88208007812501]
    // ],
    // zIndex: 2,
    opacity: 1
}).addTo(map);

// L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
// 	maxZoom: 20,
// 	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
// }).addTo(map);


// map.on('zoomend', () => {
//     console.log( map.getZoom() );
//     console.log( map.getBounds() );
// })


// Markers

const marcador = L.marker([4.164370, -73.968462], {
    opacity: 0.5,
    draggable: true
})

const marcador2 = L.marker([4.174370, -73.968462], {
    opacity: 0.5,
    draggable: true,
    interactive: false
})


marcador.on('dragend', () => {
    const nuevasCoordenadas = marcador.getLatLng();
    console.log('Las nuevas coordenadas son:', nuevasCoordenadas);

    setTimeout(()=>{

        marcador.setOpacity(1);
        marcador.setLatLng([4.164370, -73.968462]);

    }, 4000)

})

// icono marcador 

const icono = L.icon({
    iconUrl: './assets/images/marcador.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
})

const marcador3 = L.marker([4.194370, -73.968462], {
    icon: icono,
    draggable: true
})

marcador3.on('dragend', () => {
    const nuevasCoordenadas = marcador3.getLatLng();
    console.log('Las nuevas coordenadas son:', nuevasCoordenadas);

    setTimeout(()=>{

        marcador3.setOpacity(1);
        marcador3.setLatLng([4.194370, -73.968462]);

    }, 4000)

});

// path

const path = {
    stroke: true,
    color: 'red',
    weight: 5,
    opacity: 1,
    fillColor: 'green',
    fillOpacity: 0.3
}

const path2 = {
    stroke: false,
    fillColor: 'black',
    fillOpacity: 1
}

const path3 = {
    stroke: true,
    color: 'orange',
    weight: 5,
    opacity: 1,
    fillOpacity: 0
}

const path4 = {
    stroke: true,
    color: 'brown',
    weight: 5,
    opacity: 1,
    fillOpacity: 0,
    dashArray: '10, 20'
}

const path5 = {
    stroke: true,
    color: 'brown',
    weight: 5,
    opacity: 1,
    fillOpacity: 0.5,
    fillColor: 'green',
    dashArray: '10, 20'
}

// circle 

const circulo = L.circle([3.237694, -76.575463], {radius: 200, ...path });
const circulo2 = L.circle([3.237694, -76.575463], {radius: 200, ...path });


// const extension = circulo.getBounds();

// map.fitBounds(extension);


// setTimeout(() => {
//     circulo.setRadius( 100 );
//     const latlng = circulo.getLatLng();
//     console.log(latlng);

//     circulo.setStyle(path2);

//     circulo.bringToFront();


//     circulo.removeFrom(map);
// }, 3000)

circulo2.on('mouseover', () => {
    circulo2.setStyle(path2)
})

circulo2.on('mouseout', () => {
    circulo2.setStyle(path)
})


// circleMarker

const circleMarker = L.circleMarker([3.237694, -76.575463], {radius: 200, ...path3 });


// setTimeout(() => {
//     circleMarker.setRadius( 100 );
//     const latlng = circleMarker.getLatLng();
//     console.log(latlng);

//     circleMarker.setStyle(path);

//     circleMarker.bringToFront();


// }, 3000)


// polyline 

const linea = L.polyline([
    [3.099850, -74.876244],
    [-1.983315, -70.576396],
    [5.003941, -68.745639],
], {
    smoothFactor: 0.5,
    // ...path4
}).addTo(map);


// const extensionLinea = linea.getBounds();
// map.fitBounds(extensionLinea);

// const centro = linea.getCenter();
// console.log(centro)	;


// setTimeout(() => {

//     linea.addLatLng([7.434009, -72.817498]);
//     const extensionLinea2 = linea.getBounds();
//     map.fitBounds(extensionLinea2);

// }, 3000)


// rectangulo

const extensionRentangulo = [
    [10.401059, -74.819857],
    [9.480475, -73.283440]
];

const rect = L.rectangle(extensionRentangulo, path5 );

// // map.fitBounds( rect.getBounds() );


// // setTimeout(() => {
// //     const nuevaExtension = [
// //         [7.3025362053673275, -69.59289550781251],
// //         [1.9991059831233327, -77.88208007812501]
// //     ]
// //     rect.setBounds(nuevaExtension);
// //     map.fitBounds(nuevaExtension);
// // }, 3000)


// // poligono 

const poligono = L.polygon([
    [3.099850, -74.876244],
    [-1.983315, -70.576396],
    [5.003941, -68.745639],
], {
    color: 'red'
})


// map.fitBounds( poligono.getBounds() );


// poligono.bringToBack();

// const geojson = poligono.toGeoJSON();

// console.log(geojson);



// GEOJSON


const estiloDefecto = {
    color: 'green'
}

const estiloHover = {
    color : 'red'
}


const geojsonLayer = L.geoJSON(geojson, {
    pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
            color: 'red'
        })
    },
    style: (feature) => {
        const { nombre } = feature.properties;

        if( nombre === 'punto' ) {
            return { color: 'brown' }
        }
        else if ( nombre === 'linea' ) {
            return { color: 'violet' }
        }
        else if( nombre === 'poligono'){
            return { color: 'orange' }
        }
        else return estiloDefecto
    },
    filter: (feature) => {
        return ['punto', 'linea', 'poligono'].includes( feature.properties.nombre )
    },
    onEachFeature: (feature, layer) => {
        layer.on('mouseover', () => {
            layer.setStyle(estiloHover);
        });

        layer.on('mouseout', () => {
            layer.setStyle(estiloDefecto);
        });

        layer.on('click', () => {
            if( feature.geometry.type === 'Point'){
                map.setView( layer.getLatLng(), map.getMaxZoom());
            }
            else {
                map.fitBounds( layer.getBounds() );
            }
        });
    }
})


// map.fitBounds( geojsonLayer.getBounds() );


geojsonLayer.on('layeradd', (evento) => {

    const { layer } = evento;
    const { feature } = layer;

    // if( feature.geometry.type === 'Point'){
    //     map.setView( layer.getLatLng(), map.getMaxZoom());
    // }
    // else {
    //     map.fitBounds( layer.getBounds() );
    // }

    layer.setStyle({
        color: 'black'
    });

    const feature2 = layer.toGeoJSON();
    console.log(feature2);

})



// setTimeout(() => {

//     geojsonLayer.resetStyle();

//     geojsonLayer.addData(nuevaFeature);


//     geojsonLayer.eachLayer((layer) => {
//         console.log(layer)
//         layer.setStyle({ color: 'white' })
//     });

//     const layers = geojsonLayer.getLayers();

//     layers.forEach((layer) => {
//         layer.setStyle({ color: 'black' });
//     })
//     console.log(layers)

// }, 3000)


// console.log(nuevaFeature);


// LAYERGROUP

const layerGroup = L.layerGroup().addTo(map);

// layerGroup.addLayer(marcador);
// layerGroup.addLayer(marcador2);
// layerGroup.addLayer(marcador3);
// layerGroup.addLayer(circulo);
// layerGroup.addLayer(circulo2);
// layerGroup.addLayer(circleMarker);
// layerGroup.addLayer(linea);
// layerGroup.addLayer(rect);
// layerGroup.addLayer(poligono);


// layerGroup.on('click', (evento) => {
//     console.log(evento)
// })

// console.log( layerGroup.toGeoJSON() );


// layerGroup.removeLayer(marcador);
// layerGroup.removeLayer(marcador2);
// layerGroup.removeLayer(marcador3);

// console.log( layerGroup.hasLayer(rect) ); 

// // setTimeout(()=> {

// //     layerGroup.clearLayers();

// // }, 3000)



// layerGroup.eachLayer( layer => {
//     console.log(layer)
// })


// FEATUREGROUP


const featureGroup = L.featureGroup();

// featureGroup.bindPopup(
//     " SE HA DADO CLICK A UN ELEMENTO"
// );

featureGroup.on( 'click', (evento) => {

    const { layer, latlng } = evento;

    layer.bindPopup(`
        Se ha dado click en la siguiente ubicación
        Latitud: ${latlng.lat}
        Longitud: ${latlng.lng}
    `).openPopup();

} )

// featureGroup.on('layeradd', (evento) => {
//     console.log('se ha añadido un nuevo elemento al group', evento)
// })

// featureGroup.addLayer(marcador);
// featureGroup.addLayer(marcador2);
// featureGroup.addLayer(marcador3);
// featureGroup.addLayer(circulo);
// featureGroup.addLayer(circulo2);
// featureGroup.addLayer(circleMarker);
// featureGroup.addLayer(linea);
// featureGroup.addLayer(rect);
// featureGroup.addLayer(poligono);


// featureGroup.eachLayer( layer => {

//     layer.on('click', (evento) => {

//         const { latlng } = evento;
//         console.log(evento)

//         layer.bindPopup(`
//             Se ha dado click en la siguiente ubicación
//             Latitud: ${latlng.lat}
//             Longitud: ${latlng.lng}
//         `).openPopup();
//     })

// })


// POPUP


// forma estatica 
const popup = L.popup([4.164370, -73.968462], {
    content: '<b>Hola soy un popup</b>',
    closeButton: false,
    closeOnClick: false,
    closeOnEscapeKey: false
});

// forma dinamica

const popup2 = L.popup();


// map.on('click', (evento) => {
//     const { latlng } = evento;
//     popup2
//         .setLatLng(latlng)
//         .setContent(`
//             Se ha dado click en las siguientes coordenadas:
//             Latitud: ${latlng.lat}
//             Longitud: ${latlng.lng}
//         `)
//         .openOn(map);
// })

// amarrar a un layer


// marcador.addTo(map);

// marcador.bindPopup('<b>Estoy dando click en el marcador</b>').openPopup();

// setTimeout(() => {
//     marcador.setPopupContent('El contenido ha cambiado')
// }, 6000)


// TOOLTIP

// marcador.addTo(map);

// marcador.bindTooltip('<b>Esta es una tooltip</b>', {
//     permanent: true,
//     sticky: true
// }).openTooltip();

// estatico

const tooltip = L.tooltip([4.164370, -73.968462], {sticky:true, content: 'Hello world!<br />This is a nice tooltip.'})
    // .addTo(map);


// TILELAYER WMS

const wms = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);

// IMAGE OVERLAY

const url = "./assets/images/imagen.png";
const extension = [
    [7.3025362053673275, -69.59289550781251],
    [1.9991059831233327, -77.88208007812501]
];

const imageOverlay = L.imageOverlay(url, extension, {
    opacity: 1,
    interactive: true,
    zIndex: 1
})


imageOverlay.on('click', (e) => {
    console.log(e)
})


// VIDEO OVERLAY

const videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm';

const videoOverlay = L.videoOverlay(videoUrl, extension, {
    zIndex: 2,
    autoplay: false,
    loop: false
}).addTo(map);



setTimeout(()=> {

    videoOverlay.bringToFront();

    const elemento = videoOverlay.getElement();
    console.log(elemento);

    elemento.play();


    setTimeout(() => {
        elemento.pause();
    }, 3000)

}, 3000)