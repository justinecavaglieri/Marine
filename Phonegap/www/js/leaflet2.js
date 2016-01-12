var friendID = 0;
var enemyID = 1;
var popupContentPoint = '<div> Sectionne ton bateau: </br> <button name="bt1" onclick="ClickB.bateau(this, friendID)">bateaux amis</button><button onclick="ClickB.bateau(this, enemyID)">bateaux ennemis</button></div>';
var popupContentFriend = '<label for="titre"></label> <input type="text" class="form-control" id="titre" placeholder="Titre du bateau"/> <button class="btn btn-default" onclick="OnRegisterClicked(this)" id="submit">Enregistrer</button> </br> ';


var friendIcon = L.icon({
    iconUrl: 'img/ami.jpeg',

    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var enemyIcon = L.icon({
    iconUrl: 'img/ennemi.jpeg',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(map);



        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

        L.circle([51.508, -0.11], 500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
        }).addTo(map).bindPopup("I am a circle.");

        L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(map).bindPopup("I am a polygon.");


        var popup = L.popup();

        function onMapClick(e) {
            currentCursorPosition = e.latlng;
            popup
                .setLatLng(e.latlng)
                .setContent(popupContentPoint)
                .openOn(map);
        }

        map.on('click', onMapClick);

        var currentShipId;

var currentCursorPosition;
var ClickB =
{
    'items':{},
    'bateau':function(obj1, argumentID) {
        var icon;
        if(argumentID == friendID)
        {
            icon = friendIcon;
            var newMarker = L.marker(currentCursorPosition/*, {icon: icon}*/);
            newMarker.addTo(map);
            newMarker.setIcon(icon);
            newMarker.bindPopup(popupContentFriend);
            newMarker.closePopup();
            newMarker.update();
            newMarker.on('click', OnFriendMarkerClicked);

            //OnFriendMarkerClicked(newMarker);
        }
        else if(enemyID == enemyID)
        {
            icon = enemyIcon;
            var newMarker = L.marker(currentCursorPosition, {icon: icon}).addTo(map);//.bindPopup("a venir");
            newMarker.click = OnEnemyMarkerClicked(newMarker);
        }

        

        //c.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
        //var element = document.getElementsByName("test");
    //:currentShipId = obj1.getAttribute("name");
    //var shipName = alert(obj1.getAttribute("name"));   
  
  }
};
var currentMarker = null;
function OnFriendMarkerClicked(e)
{
    //window.open('popup.html','fenetre','width=650,height=500');
    //alert('title');
   if(currentMarker != null)
    {
        currentMarker.closePopup();
    }
    currentMarker = e.target;
    //currentMarker.setIcon(enemyIcon);
    currentMarker.openPopup();
    // $('#openModal').show();
};

function OnEnemyMarkerClicked(e)
{

};

function OnRegisterClicked(obj1)
{
    var title = document.getElementById('titre').value;
     alert(title);
     if(dic.has(title)){
        currentMarker.off('click', OnFriendMarkerClicked);
        currentMarker.getPopup().setContent(title+'</br>'+ dic.get(title));
        //alert('element trouvé');
     } else{
        alert('element non trouvé');
     }

// remplacer callback OnFriendMarkerClicked
};
