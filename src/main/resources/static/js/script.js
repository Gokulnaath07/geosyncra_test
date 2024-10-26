/*
    script.js (javascript for GeoSyncra website)
    ceg411
    Anna Crafton
    last updated 10/24/2024


    ToDo Specifications:
    ???

*/

/*
  setDisplay_1()
  Function to change the display elements of viewpage locations
  Can replace vars with info from database later. Maybe make a class? FLAG!*/
function setDisplay_1(){
    var locationName = "Location_Name";
    var locationDescription = "Location_Description"
    var locationImage = "photos/dummyPhoto.jpg";

    document.getElementById("location_Name_1").textContent=locationName;
    document.getElementById("location_Description_1").textContent=locationDescription;
    document.getElementById("location_Image_1").src=locationImage;

}

/*setDisplay_2()
  Same as setDisplay_1, but for the second display.
  This is unessisary becasue there is deffinitly a way to do this that loops through all displays, and I need to fix it.*/
function setDisplay_2(){
    var locationName = "Location_Name";
    var locationDescription = "Location_Description"
    var locationImage = "photos/dummyPhoto.jpg";

    document.getElementById("location_Name_2").textContent=locationName;
    document.getElementById("location_Description_2").textContent=locationDescription;
    document.getElementById("location_Image_2").src=locationImage;

}


/*setDisplay_3()
see setDIsplay_2()*/
function setDisplay_3(){
    var locationName = "Location_Name";
    var locationDescription = "Location_Description"
    var locationImage = "photos/dummyPhoto.jpg";

    document.getElementById("location_Name_3").textContent=locationName;
    document.getElementById("location_Description_3").textContent=locationDescription;
    document.getElementById("location_Image_3").src=locationImage;

}

/*setTime()
  Function to display the time for clock in index.html
  FLAG! NEEDS TO LOOP TO UPDATE TIME!*/
function setTime(){

    var date = new Date();
    var timeString = date.toLocaleTimeString()

    document.getElementById("clock").textContent=timeString;

}

/*Update the clock every second*/
setInterval(setTime, 1000);


