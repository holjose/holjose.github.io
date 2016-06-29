var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_ExtractedArea = new ol.format.GeoJSON();
var features_ExtractedArea = format_ExtractedArea.readFeatures(geojson_ExtractedArea, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExtractedArea = new ol.source.Vector();
jsonSource_ExtractedArea.addFeatures(features_ExtractedArea);var lyr_ExtractedArea = new ol.layer.Vector({
                source:jsonSource_ExtractedArea, 
                style: style_ExtractedArea,
                title: "ExtractedArea"
            });var format_ZoneName2 = new ol.format.GeoJSON();
var features_ZoneName2 = format_ZoneName2.readFeatures(geojson_ZoneName2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneName2 = new ol.source.Vector();
jsonSource_ZoneName2.addFeatures(features_ZoneName2);var lyr_ZoneName2 = new ol.layer.Vector({
                source:jsonSource_ZoneName2, 
                style: style_ZoneName2,
                title: "ZoneName2"
            });var format_zonas = new ol.format.GeoJSON();
var features_zonas = format_zonas.readFeatures(geojson_zonas, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas = new ol.source.Vector();
jsonSource_zonas.addFeatures(features_zonas);var lyr_zonas = new ol.layer.Vector({
                source:jsonSource_zonas, 
                style: style_zonas,
                title: "zonas"
            });var format_Indefinido = new ol.format.GeoJSON();
var features_Indefinido = format_Indefinido.readFeatures(geojson_Indefinido, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indefinido = new ol.source.Vector();
jsonSource_Indefinido.addFeatures(features_Indefinido);var lyr_Indefinido = new ol.layer.Vector({
                source:jsonSource_Indefinido, 
                style: style_Indefinido,
                title: "Indefinido"
            });var format_Saude = new ol.format.GeoJSON();
var features_Saude = format_Saude.readFeatures(geojson_Saude, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saude = new ol.source.Vector();
jsonSource_Saude.addFeatures(features_Saude);var lyr_Saude = new ol.layer.Vector({
                source:jsonSource_Saude, 
                style: style_Saude,
                title: "Saude"
            });var format_PessoasComDeficiencia = new ol.format.GeoJSON();
var features_PessoasComDeficiencia = format_PessoasComDeficiencia.readFeatures(geojson_PessoasComDeficiencia, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PessoasComDeficiencia = new ol.source.Vector();
jsonSource_PessoasComDeficiencia.addFeatures(features_PessoasComDeficiencia);var lyr_PessoasComDeficiencia = new ol.layer.Vector({
                source:jsonSource_PessoasComDeficiencia, 
                style: style_PessoasComDeficiencia,
                title: "PessoasComDeficiencia"
            });var format_Idosos = new ol.format.GeoJSON();
var features_Idosos = format_Idosos.readFeatures(geojson_Idosos, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Idosos = new ol.source.Vector();
jsonSource_Idosos.addFeatures(features_Idosos);var lyr_Idosos = new ol.layer.Vector({
                source:jsonSource_Idosos, 
                style: style_Idosos,
                title: "Idosos"
            });var format_Educacao = new ol.format.GeoJSON();
var features_Educacao = format_Educacao.readFeatures(geojson_Educacao, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Educacao = new ol.source.Vector();
jsonSource_Educacao.addFeatures(features_Educacao);var lyr_Educacao = new ol.layer.Vector({
                source:jsonSource_Educacao, 
                style: style_Educacao,
                title: "Educacao"
            });var format_MeioAmbiente = new ol.format.GeoJSON();
var features_MeioAmbiente = format_MeioAmbiente.readFeatures(geojson_MeioAmbiente, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeioAmbiente = new ol.source.Vector();
jsonSource_MeioAmbiente.addFeatures(features_MeioAmbiente);var lyr_MeioAmbiente = new ol.layer.Vector({
                source:jsonSource_MeioAmbiente, 
                style: style_MeioAmbiente,
                title: "MeioAmbiente"
            });var format_AssistenciaSocial = new ol.format.GeoJSON();
var features_AssistenciaSocial = format_AssistenciaSocial.readFeatures(geojson_AssistenciaSocial, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssistenciaSocial = new ol.source.Vector();
jsonSource_AssistenciaSocial.addFeatures(features_AssistenciaSocial);var lyr_AssistenciaSocial = new ol.layer.Vector({
                source:jsonSource_AssistenciaSocial, 
                style: style_AssistenciaSocial,
                title: "AssistenciaSocial"
            });var format_CriancasEAdolescentes = new ol.format.GeoJSON();
var features_CriancasEAdolescentes = format_CriancasEAdolescentes.readFeatures(geojson_CriancasEAdolescentes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CriancasEAdolescentes = new ol.source.Vector();
jsonSource_CriancasEAdolescentes.addFeatures(features_CriancasEAdolescentes);var lyr_CriancasEAdolescentes = new ol.layer.Vector({
                source:jsonSource_CriancasEAdolescentes, 
                style: style_CriancasEAdolescentes,
                title: "CriancasEAdolescentes"
            });var format_Cultura = new ol.format.GeoJSON();
var features_Cultura = format_Cultura.readFeatures(geojson_Cultura, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cultura = new ol.source.Vector();
jsonSource_Cultura.addFeatures(features_Cultura);var lyr_Cultura = new ol.layer.Vector({
                source:jsonSource_Cultura, 
                style: style_Cultura,
                title: "Cultura"
            });

lyr_ExtractedArea.setVisible(true);lyr_ZoneName2.setVisible(true);lyr_zonas.setVisible(true);lyr_Indefinido.setVisible(true);lyr_Saude.setVisible(true);lyr_PessoasComDeficiencia.setVisible(true);lyr_Idosos.setVisible(true);lyr_Educacao.setVisible(true);lyr_MeioAmbiente.setVisible(true);lyr_AssistenciaSocial.setVisible(true);lyr_CriancasEAdolescentes.setVisible(true);lyr_Cultura.setVisible(true);
var layersList = [baseLayer,lyr_ExtractedArea,lyr_ZoneName2,lyr_zonas,lyr_Indefinido,lyr_Saude,lyr_PessoasComDeficiencia,lyr_Idosos,lyr_Educacao,lyr_MeioAmbiente,lyr_AssistenciaSocial,lyr_CriancasEAdolescentes,lyr_Cultura];
