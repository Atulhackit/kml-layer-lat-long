/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap() {
  // const myLatlng = { lat: 29.42698, lng: -98.43749 };
  const myLatlng = { lat: 28.49735, lng: 77.1768 };

  const map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 20,
    center: myLatlng
  });

  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng
  });

  infoWindow.open(map);

  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();

    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );

    infoWindow.open(map);
  });
  //   var kmlUrl =
  //     "https://floorplans.s3.ap-south-1.amazonaws.com/tataplay-smartwarehouse/tataplay-floorplan.jpg";
  //   // "https://spurs-floorplans.s3.ap-southeast-1.amazonaws.com/KML/L1-Event.kml";
  //   // var kmlLayer = new google.maps.KmlLayer({ url: kmlUrl });

  //   const kmlLayer = new google.maps.KmlLayer({
  //     url: kmlUrl,
  //     suppressInfoWindows: true,
  //     clickable: false,
  //     screenOverlays: false
  //     // map: map,
  //   });
  //   // add layer to map
  //   kmlLayer.setMap(map);
  // }

  const imageBounds = {
    north: 28.49768,
    south: 28.49654,
    east: 77.17722,
    west: 77.17644
  };

  let historicalOverlay = new google.maps.GroundOverlay(
    "https://floorplans.s3.ap-south-1.amazonaws.com/tataplay-smartwarehouse/tataplay-floorplan.jpg",
    imageBounds,
    { screenOverlays: false }
  );
  historicalOverlay.setMap(map);
}
declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
