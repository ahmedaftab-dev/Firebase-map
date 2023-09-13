
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapValue';
import { Container } from 'react-bootstrap';
import LocationDetail from '../Details/LocDetail';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/init-firebase';
import axios from 'axios';
import SpinnerEffect from '../loader/spinner';
import '../App.css'

const MapContainer = (props) => {
  const [locations,setLocations]=useState([])
    useEffect(()=>{
      getLocations()
    },[])
    function getLocations(){
      const locationsMarkers=collection(db,'locations-markers')
      getDocs(locationsMarkers).then(response=>{
        response.docs.map((doc)=>{
          const locs=response.docs.map(doc=>({
            data:doc.data(),
            id:doc.id
          }))
          setLocations(locs)
        })
      })
      .catch(error=>console.log(error))
    }
    const [center, setCenter] = useState({ 
      lat: 41.3954,
      lng: 2.162 
    });
    const [zoom, setZoom] = useState(11);
    const [location, setLocation] = useState(1);
    const [loading, setLoading] = useState(true);
    const [locationData, setLocationData] = useState([]);
    const [locationBlockData, setLocationBlockData] = useState([]);

    useEffect(() => {
     console.log(locations)
    }, [locations]);

    useEffect(() => {
      // fetchData(location)
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${location}`);
          const {data: resp} = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${location}`);
          console.log('detail',resp)
          setLocationData(response);
          setLocationBlockData(resp)
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
      fetchData();    
    }, [location]);

  //  const fetchData = async (location) => {
  //   console.log(location)
  //     let response = await (
  //       await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${location}`)
  //     ).json();
  //     setLocationData(response);
  //     console.log(response)
  //   };

    const ClickedMarker=(val)=>{
      setLocation(val)
    }

    return (
       <Container>
         <div className='map-container'>
        {locations && <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        {
          locations.map((item,i)=>{
            return (
              <Marker key={i} lat={item.data.location.lat} lng={item.data.location.lng} text={item.data.point} ClickedMarker={ClickedMarker}/>
            )
          })
        }
        </GoogleMapReact>}
      </div>
        {loading && <SpinnerEffect />}
       {!loading && locationData && <LocationDetail block={locationBlockData} title={location} locData={locationData} />}
      
       </Container>

    );
}

export default MapContainer;