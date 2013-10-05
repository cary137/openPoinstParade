var map = new OpenLayers.Map({
    div: "map",
    projection: new OpenLayers.Projection("EPSG:900913"), 
    displayProjection: new OpenLayers.Projection("EPSG:4326"), //Display in normal geo coords
    layers: [
        new OpenLayers.Layer.OSM("OSM (without buffer)"),
        new OpenLayers.Layer.OSM("OSM (with buffer)", null, {buffer: 2})
    ],
    controls: [
        new OpenLayers.Control.Navigation({
            dragPanOptions: {
                enableKinetic: true
            }
        }),
        new OpenLayers.Control.PanZoom(),
        new OpenLayers.Control.Attribution()
    ],
    center: [-12615167.70164,6038981.94585], // Center uses EPSG:900913 coords
    zoom: 12
    
});

// this is in permalink example but seems to do nothing
// if (!map.getCenter()) map.zoomToMaxExtent();
map.addControl(new OpenLayers.Control.LayerSwitcher());
map.addControl(new OpenLayers.Control.Permalink({anchor: true}));

// Adding a marker
var markerOverlay = new OpenLayers.Layer.Vector("Overlay");
var feature = new OpenLayers.Feature.Vector(
    new OpenLayers.Geometry.Point(-13615167.70164,6038981.94585),
    {some:'data'},
    {externalGraphic: 'img/marker.png', graphicHeight: 28, graphicWidth: 20 });
    markerOverlay.addFeatures(feature);
    map.addLayer(markerOverlay);