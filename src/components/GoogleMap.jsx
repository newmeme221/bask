import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Tema, Ghana coordinates (approximate)
const center = {
  lat: 5.6698,
  lng: 0.0166
};

const GoogleMapComponent = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;

    // Create Advanced Marker
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      title: 'BASK Engineering Limited',
    });

    marker.addListener('click', () => {
      setShowInfoWindow(true);
    });

    markerRef.current = marker;

    // Create Info Window (but don’t show it until clicked)
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="padding: 8px; font-family: Arial, sans-serif">
          <h3 style="margin: 0 0 5px 0; font-weight: bold">BASK Engineering Limited</h3>
          <p style="margin: 0;">P.O BOX CS 8284 TEMA - GHANA WEST AFRICA</p>
          <p style="margin: 0; color: #2563EB;">Ghana's Leading Engineering Company</p>
        </div>
      `,
      position: center,
    });

    infoWindowRef.current = infoWindow;
  }, []);

  useEffect(() => {
    if (showInfoWindow && markerRef.current && infoWindowRef.current && mapRef.current) {
      infoWindowRef.current.open({
        map: mapRef.current,
        anchor: markerRef.current,
      });
    }
  }, [showInfoWindow]);

  const onMapUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY }
      libraries={['marker']} // Required for AdvancedMarkerElement
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onMapLoad}
        onUnmount={onMapUnmount}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        {/* Advanced marker is created via JS in onLoad */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
