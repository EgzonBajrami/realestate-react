import {GoogleMap,useLoadScript,Marker} from '@react-google-maps/api'
import "./GoogleMapsCall.css"
export default function GoogleMapsCall({getLatitude}){
    console.log(getLatitude);
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAlrjyHwtkLKUD5iTA9euwQx_1Y7-4HHw8",
    })
    if(!isLoaded) return <div>Loading...</div>
    return <Map getLatitude={getLatitude} />
}
function Map({getLatitude}){
    console.log(getLatitude);
    const center = {lat:parseFloat(getLatitude.latitude),lng:parseFloat(getLatitude.longitute)}
    return <GoogleMap 
    zoom={16}
    center={center}
    mapContainerClassName="my-map"

    >
        <Marker 
        position={center}
        
        />
    </GoogleMap>
}