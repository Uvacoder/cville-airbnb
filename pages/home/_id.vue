<template>
<div>
    <div style="display:flex;">
        <img v-for="image in home.images" :key="image" :src="image" width="200" height="150"/>
    </div>
    {{ home.title }}<br/>
    ${{ home.pricePerNight }} / night<br/>
    <img src="/images/marker.svg" width="20" height="20"/>{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br/>
    <img src="/images/star.svg" width="20" height="20"/>{{ home.reviewValue}} <br/>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath<br/>
    {{ home.description }}
    <div style="height:800px;width:800px" ref="map"></div>
    </div>
</template>
<script>
import homes from '~/data/homes'

export default {
    head(){
        return {
            title: this.home.title,
            script: [{
                src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCsKXrZB1kSA-Xw4FqmqhDNNHhP__Homtw&libraries=places&callback=initMap",
                hid: "map",
                async: true, 
                skip: process.client && window.mapLoaded
            }, {
            innerHTML: "window.initMap = function(){ window.mapLoaded = true }",
            hid: "map-init",
            }],           
        }
    },
    data(){
        return {
            home: {}
        }
    },
    methods:{
        showMap(){
            console.log('mounted')
            const mapOptions = {
                zoom: 18,
                center: new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng),
                disableDefaultUI: true,
                zoomControl: true,
            }
            const map = new window.google.maps.Map(this.$refs.map, mapOptions)
            const position = new window.google.maps.LatLng(this.home._geoloc.lat, this.home._geoloc.lng)
            const marker = new window.google.maps.Marker({ position })
            marker.setMap(map)
        }
    },
    mounted(){
       const timer = setInterval(() => {
           if(window.mapLoaded){
               clearInterval(timer)
               this.showMap()
           }
       }, 200)
    },
    created(){
        const home = homes.find((home) => home.objectID == this.$route.params.id)
        this.home = home
    }
}
</script>