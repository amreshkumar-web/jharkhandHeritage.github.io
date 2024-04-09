window.addEventListener('scroll',() => {
    let value=window.scrollY;
    var bgScroll = value / 5; 
    let sValue=1.3-(value)/(window.innerHeight);
    /* console.log(value); */
    let nvalue=(value*8)/(window.innerHeight);
    
   
    console.log(value + "value" + window.innerWidth)
    
    if(value>120){
        document.getElementById("zoom2").style.scale=`${nvalue}`
        document.getElementById("zoom2").marginLeft=`${nvalue*50}px`
    }
    else{
        document.getElementById("zoom2").style.scale="1"
    }
})

/*  */


/* function initMap() {
    const location = { lat: 23.5017, lng: 85.3106 }; // Latitude and longitude of the location

    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 15, // Adjust zoom level as needed
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Your Location",
    });
} */