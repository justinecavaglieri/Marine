var friendID = 0;
var enemyID = 1;
var portID = 2;
var popupContentPoint = '<div> Sectionne ton bateau: </br> <button name="bt1" onclick="ClickB.bateau(this, friendID)">bateaux amis</button><button onclick="ClickB.bateau(this, enemyID)">bateaux ennemis</button><button onclick="ClickB.bateau(this, portID)">Ports</button></div>';
var popupContentFriend = '<label for="titre"></label> <input type="text" class="form-control" id="titre" placeholder="Titre du bateau"/> <button class="btn btn-default" onclick="OnRegisterClickedFriends(this)" id="submit">Enregistrer</button> </br> ';
var popupContentEnemy = '<p>Bateau enemy</p>'
var popupContentPort = '<label for="title"></label> <input type="text" class="form-control" id="title" placeholder="Nom du port"/> <button class="btn btn-default" onclick="OnRegisterClickedPorts(this)" id="submit">Enregistrer</button> </br> ';

var friendIcon = L.icon({
    iconUrl: 'img/ami.jpeg',
    iconSize:     [38, 95],
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});

var enemyIcon = L.icon({
    iconUrl: 'img/ennemi.jpeg',
    iconSize:     [38, 95],
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});

var portIcon = L.icon({
    iconUrl: 'img/port.png',
    iconSize:     [38, 95],
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});


var map = L.map('map').setView([51,5, -0.09], 6);

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
        else if(argumentID == enemyID)
        {
            icon = enemyIcon;
            var newMarker = L.marker(currentCursorPosition/*, {icon: icon}*/);
            newMarker.addTo(map);
            newMarker.setIcon(icon);
            newMarker.bindPopup(popupContentEnemy);
            newMarker.closePopup();
            newMarker.update();
            newMarker.on('click', OnEnemyMarkerClicked);
        }
        else if (argumentID == portID)
        {
            icon = portIcon;
            var newMarker = L.marker(currentCursorPosition/*, {icon: icon}*/);
            newMarker.addTo(map);
            newMarker.setIcon(icon);
            newMarker.bindPopup(popupContentPort);
            newMarker.closePopup();
            newMarker.update();
            newMarker.on('click', OnPortMarkerClicked);
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
   if(currentMarker != null)
    {
        currentMarker.closePopup();
    }
    currentMarker = e.target;
    currentMarker.openPopup();
};

function OnPortMarkerClicked(e)
{
   if(currentMarker != null)
    {
        currentMarker.closePopup();
    }
    currentMarker = e.target;
    currentMarker.openPopup();
};

function OnEnemyMarkerClicked(e)
{

};

function OnRegisterClickedFriends(obj1)
{
    var title = document.getElementById('titre').value;
     //alert(title);
     if(dicF.has(title)){
        currentMarker.off('click', OnFriendMarkerClicked);
        currentMarker.getPopup().setContent(title+'</br>'+ dicF.get(title) + '</br> <button class="btn btn-default" onclick="Delete(this)" id="delete">Supprimer</button>');
        //alert('element trouvé');
     } else{
        alert('element non trouvé');
     }

// remplacer callback OnFriendMarkerClicked
};

function OnRegisterClickedPorts(obj1)
{
    var title = document.getElementById('title').value;
     //alert(name);
     if(dicP.has(title)){
        currentMarker.off('click', OnPortMarkerClicked);
        currentMarker.getPopup().setContent(title+'</br>'+ dicP.get(title)+ '</br> <button class="btn btn-default" onclick="Delete(this)" id="delete">Supprimer</button>');
        //alert('element trouvé');
     } else{
        alert('element non trouvé');
     }

// remplacer callback OnFriendMarkerClicked
};
map.panTo(new L.LatLng(0.30, 6.54), 13);

function Delete(obj1)
{
    map.removeLayer(currentMarker);
}

