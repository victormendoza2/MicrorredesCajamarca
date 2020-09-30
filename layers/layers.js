var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zonificacion_microrredes_1 = new ol.format.GeoJSON();
var features_zonificacion_microrredes_1 = format_zonificacion_microrredes_1.readFeatures(json_zonificacion_microrredes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonificacion_microrredes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonificacion_microrredes_1.addFeatures(features_zonificacion_microrredes_1);
var lyr_zonificacion_microrredes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonificacion_microrredes_1, 
                style: style_zonificacion_microrredes_1,
                interactive: true,
    title: 'zonificacion_microrredes<br />\
    <img src="styles/legend/zonificacion_microrredes_1_0.png" /> C.S CHONTAPACCHA<br />\
    <img src="styles/legend/zonificacion_microrredes_1_1.png" /> C.S LA TULPUNA<br />\
    <img src="styles/legend/zonificacion_microrredes_1_2.png" /> C.S MAGNA VALLEJO<br />\
    <img src="styles/legend/zonificacion_microrredes_1_3.png" /> C.S MICAELA BASTIDAS<br />\
    <img src="styles/legend/zonificacion_microrredes_1_4.png" /> C.S PACHACUTEC<br />\
    <img src="styles/legend/zonificacion_microrredes_1_5.png" /> C.S. ATAHUALPA<br />'
        });
var format_manzanas_2 = new ol.format.GeoJSON();
var features_manzanas_2 = format_manzanas_2.readFeatures(json_manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_2.addFeatures(features_manzanas_2);
var lyr_manzanas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_2, 
                style: style_manzanas_2,
                interactive: true,
                title: '<img src="styles/legend/manzanas_2.png" /> manzanas'
            });
var format_vias_3 = new ol.format.GeoJSON();
var features_vias_3 = format_vias_3.readFeatures(json_vias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_3.addFeatures(features_vias_3);
var lyr_vias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vias_3, 
                style: style_vias_3,
                interactive: true,
                title: '<img src="styles/legend/vias_3.png" /> vias'
            });

lyr_OSMStandard_0.setVisible(true);lyr_zonificacion_microrredes_1.setVisible(true);lyr_manzanas_2.setVisible(true);lyr_vias_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_zonificacion_microrredes_1,lyr_manzanas_2,lyr_vias_3];
lyr_zonificacion_microrredes_1.set('fieldAliases', {'Id': 'Id', 'Nomb_micro': 'Nomb_micro', });
lyr_manzanas_2.set('fieldAliases', {'gidman': 'gidman', 'gidsec': 'gidsec', 'codmancat': 'codmancat', 'idtipman': 'idtipman', 'codmzhu': 'codmzhu', 'desmza': 'desmza', 'aream2': 'aream2', 'periml': 'periml', 'objectid': 'objectid', 'st_area_th': 'st_area_th', 'st_length_': 'st_length_', });
lyr_vias_3.set('fieldAliases', {'giddetvia': 'giddetvia', 'codvia': 'codvia', 'nrocuadra': 'nrocuadra', 'secviaini': 'secviaini', 'secviacen': 'secviacen', 'secviafin': 'secviafin', 'id_cvia': 'id_cvia', 'id_tmat': 'id_tmat', 'objectid': 'objectid', 'codvia_1': 'codvia_1', 'giddis': 'giddis', 'coddep': 'coddep', 'codpro': 'codpro', 'coddis': 'coddis', 'tipvia': 'tipvia', 'nom_via': 'nom_via', 'des_via': 'des_via', 'baselegal_': 'baselegal_', 'codestado': 'codestado', 'direcion': 'direcion', 'direccion': 'direccion', });
lyr_zonificacion_microrredes_1.set('fieldImages', {'Id': 'Hidden', 'Nomb_micro': 'TextEdit', });
lyr_manzanas_2.set('fieldImages', {'gidman': 'Hidden', 'gidsec': 'Hidden', 'codmancat': 'Hidden', 'idtipman': 'Hidden', 'codmzhu': 'Hidden', 'desmza': 'Hidden', 'aream2': 'Hidden', 'periml': 'Hidden', 'objectid': 'Hidden', 'st_area_th': 'Hidden', 'st_length_': 'Hidden', });
lyr_vias_3.set('fieldImages', {'giddetvia': 'Hidden', 'codvia': 'Hidden', 'nrocuadra': 'Hidden', 'secviaini': 'Hidden', 'secviacen': 'Hidden', 'secviafin': 'Hidden', 'id_cvia': 'Hidden', 'id_tmat': 'Hidden', 'objectid': 'Hidden', 'codvia_1': 'Hidden', 'giddis': 'Hidden', 'coddep': 'Hidden', 'codpro': 'Hidden', 'coddis': 'Hidden', 'tipvia': 'Hidden', 'nom_via': 'Hidden', 'des_via': 'Hidden', 'baselegal_': 'Hidden', 'codestado': 'Hidden', 'direcion': 'TextEdit', 'direccion': 'TextEdit', });
lyr_zonificacion_microrredes_1.set('fieldLabels', {'Nomb_micro': 'inline label', });
lyr_manzanas_2.set('fieldLabels', {});
lyr_vias_3.set('fieldLabels', {'direcion': 'inline label', 'direccion': 'no label', });
lyr_vias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});