var friendID = 0;
var enemyID = 1;
var portID = 2;
var popupContentPoint = '<div> Sectionne ton bateau: </br> <button name="bt1" onclick="ClickB.bateau(this, friendID)">bateaux amis</button><button onclick="ClickB.bateau(this, enemyID)">bateaux ennemis</button><button onclick="ClickB.bateau(this, portID)">Ports</button></div>';
var popupContentFriend = '<label for="titre"></label> <input type="text" class="form-control" id="titre" placeholder="Titre du bateau"/> <button class="btn btn-default" onclick="OnRegisterClickedFriends(this)" id="submit">Enregistrer</button> </br> ';
var popupContentEnemy = '<p>Bateau enemy</p>'
var popupContentPort = '<label for="title"></label> <input type="text" class="form-control" id="title" placeholder="Nom du port"/> </br> <input type="text" class="form-control" id="count" placeholder="Nombre de bateaux"/><button class="btn btn-default" onclick="OnRegisterClickedPorts(this)" id="submit">Enregistrer</button> </br> ';

var friendIcon = L.icon({
    iconUrl: '../../img/ami.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 22], 
    popupAnchor:  [-3, -76] 
});

var enemyIcon = L.icon({
    iconUrl: '../../img/ennemi.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 22], 
    popupAnchor:  [-3, -76] 
});

var portIcon = L.icon({
    iconUrl: '../../img/Ports.png',
    iconSize:     [38, 38],
    iconAnchor:   [22, 22], 
    popupAnchor:  [-3, -76] 
});

var actionPopup;

var map = L.map('map').setView([51,5, -0.09], 6);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(map);



        actionPopup = L.popup();

        function onMapClick(e) {
            currentCursorPosition = e.latlng;

            if(isOnDrawing == false)
            {
            actionPopup
                .setLatLng(e.latlng)
                .setContent(popupContentPoint)
                .openOn(map);
            }
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
            //closePopup(popupContentPoint); 
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

        map.closePopup(actionPopup);

        //c.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
        //var element = document.getElementsByName("test");
    //:currentShipId = obj1.getAttribute("name");
    //var shipName = alert(obj1.getAttribute("name"));   
  
  }
};
var currentMarker = null;
var isOnDrawing = false;
function SetIsOnDrawing(v)
{
    isOnDrawing = v;
}
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
     alert(title);
     if(dicF.has(title)){
        alert("found");
        currentMarker.off('click', OnFriendMarkerClicked);
        currentMarker.getPopup().setContent(title+'</br>'+ dicF.get(title)+ '</br> <img src="img/trash.png" class="trash" onclick="Delete(this)" id="delete"/>' );
        //alert('element trouvé');
     } else{
        alert('element non trouvé');
     }

// remplacer callback OnFriendMarkerClicked
};

function OnRegisterClickedPorts(obj1)
{
    var title = document.getElementById('title').value;
    var count = document.getElementById('count').value;
    currentMarker.getPopup().setContent(title+'</br>'+ count + '</br> <img src="img/trash.png" class="trash" onclick="Delete(this)" id="delete"/>');
};
map.panTo(new L.LatLng(0.30, 6.54), 13);

function Delete(obj1)
{
    map.removeLayer(currentMarker);
}

