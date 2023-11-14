'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


let map, MapEvent;

if (navigator.geolocation){
 
navigator.geolocation.getCurrentPosition(
    
    
    function(position){
    const{latitude} = position.coords;
    const{longitude} = position.coords;
    console.log(latitude, longitude);

    const coords = [latitude, longitude]

    const map = L.map('map').setView(coords, 14.5);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    

        map.on('click', function(MapE){

            MapEvent = MapE
            form.classList.remove('hidden');
            inputDistance.focus();

   



            
        });
    },    


  

    function()
{
    alert('Unable to get loction')
}

)
};





form.addEventListener('submit', function(){
    //to display market


             console.log(MapEvent);
            const {lat, lng} = MapEvent.latlng;

            L.marker([lat, lng])
            .addTo(map)
            .bindPopup(L.popup({
                maxWidth: 250, minWidth:100, autoClose: true , closeOnClick:true, className: 'running-popup',

            }))

            .setPopupContent('Workout') 
            .openPopup()

})