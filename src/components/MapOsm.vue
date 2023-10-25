<script setup>
    import { onMounted, ref } from 'vue'
    import * as Leaflet from 'leaflet'
    import 'leaflet/dist/leaflet.css'

    let tileLayer = Leaflet.tileLayer
    let map = ref()
    
    let coordMe = ref({
        latitude : 0,
        longitude : 0
    })

    onMounted( async ()=> {
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      map = Leaflet.map('map',
        {
            zoomControl: true, 
            layers: [tileLayer], 
            maxZoom: 18,        
            minZoom: 6          
        })
            .setView([46.473347, 2.500780], 4)

        let myIcon = Leaflet.icon({
            iconUrl:    '../src/assets/geo.svg',      
            iconSize:   [50, 50],            
            shadowSize: [25, 41],        
            iconAnchor: [25, 35],                     
            shadowAnchor: [-10,-10],                    
            popupAnchor: [0, -30]                         
        })

        let marker = Leaflet.marker([48.976835, 1.991686], { icon: myIcon }).addTo(map)
        let marker2 = Leaflet.marker([45.750000, 4.853100], { icon: myIcon }).addTo(map)
        let marker3 = Leaflet.marker([47.269818, -1.888063], { icon: myIcon }).addTo(map)
        let marker4 = Leaflet.marker([43.568853, 1.326102], { icon: myIcon }).addTo(map)

        marker.bindPopup('Paris')
        marker2.bindPopup('Lyon')
        marker3.bindPopup('Nantes')
        marker4.bindPopup('Toulouse')

    })

    const locMe = () => {
        navigator.geolocation.getCurrentPosition(showLocation)
    }
    const showLocation = (position) => {
console.log("postion", position)        
        coordMe.value.latitude = position.coords.latitude
        coordMe.value.longitude = position.coords.longitude
        map.panTo([coordMe.value.latitude, coordMe.value.longitude])
    }

</script>


<template>
    <div class="container-fluid" style="color:black;">
        <div class="container-fluid mx-24">
            <div id="map"> 
            </div>
        </div>
    </div>
</template>

<style scoped>
#map{
    width:100%;
    height: 70vh;
}
</style>
