
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React from 'react';
import HomePage from './components/Home/HomePage';
import Overview from './components/About/Overview'
import ServicesFacilities from '../src/components/About/ServicesFacilities'
import MapDirections from './components/About/MapDirections'
import ExploreColombo from './components/About/ExploreColombo'
import Bojunhala from './components/Dining/Bojunhala';
import Sera from './components/Dining/Sera';
import Gimanhala from './components/Dining/GimanhalaLounge'
import Ulpatha  from './components/Dining/Ulpatha'
import DiningOverview from './components/Dining/DiningOverview'
import SportRecreation from "./components/Experience/SportRecreation"
import FacilitiesServices from "./components/Experience/FacilitiesServices"
import Membership from "./components/Experience/Membership"
import CoolZoneKidsClub from "./components/Experience/CoolZoneKidsClub"
import OutdoorActivites from "./components/Experience/OutdoorActivites"
import Rates from "./components/Experience/Rates"
import Tournament from "./components/Experience/Tournament"
import UDEvents from "./components/Events/UDEvents"
import WedPlanning from "./components/Events/WedPlanning"
import WeddingStayEase from "./components/Events/WeddingStayEase"
import Deluxl from "./components/Room/Delux"
import OceanRoom from "./components/Room/OceanRoom"
import OceanSuite  from "./components/Room/OceanSuite"
import SpecialtySuite  from "./components/Room/SpecialtySuite"
import TPOConnecting from "./components/Room/TPOConnecting"
import TDConnecting from "./components/Room/TDConnecting"
import Gallery from "./components/Gallery/Gallery"
import Offer from "./components/Offers/Offer"
import Off1 from "./components/Offers/Off1"
import Off2 from "./components/Offers/off2"
import Off3 from "./components/Offers/off3"
import Sign from "./components/Sign/Sign"
import JoinNow from "./components/Sign/JoinNow"
import RoomBooking from './components/Room/RoomBooking'
import RoomPrices from './components/RoomPayment/payment'
import RoomPricesSuccess from './components/RoomPayment/paymentSucessful'

import {  Route, Routes } from 'react-router-dom';



function App() {

  return (
<>

        <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/about" element={<Overview/>} ></Route>
          <Route path="/about/exploreColombo" element={<ExploreColombo/>} ></Route>
          <Route path="/about/servicesFacilities" element={<ServicesFacilities/>} ></Route>
          <Route path="/about/mapDirections" element={<MapDirections/>} ></Route>
          <Route path="/dining/bojunhala" element={<Bojunhala/>} ></Route>
          <Route path="/dining/Sera" element={<Sera/>} ></Route>
          <Route path="/dining/gimanhala" element={<Gimanhala/>} ></Route>
          <Route path="/dining/Ulpatha" element={<Ulpatha/>} ></Route>
          <Route path="/dining/diningOverview" element={<DiningOverview/>} ></Route>
          <Route path="/experience/sportRecreation" element={<SportRecreation/>} ></Route>
          <Route path="/experience/facilitiesServices" element={<FacilitiesServices/>} ></Route>
          <Route path="/experience/membership" element={<Membership/>} ></Route>   
          <Route path="/experience/coolZoneKidsClub" element={<CoolZoneKidsClub/>} ></Route>
          <Route path="/experience/outdoorActivites" element={<OutdoorActivites/>} ></Route>
          <Route path="/experience/rates" element={<Rates/>} ></Route>   
          <Route path="/experience/tournament" element={<Tournament/>} ></Route>
          <Route path="/events/UDEvents" element={<UDEvents/>} ></Route>
          <Route path="/events/weddingStayEase" element={<WeddingStayEase/>} ></Route>
          <Route path="/events/wedPlanning" element={<WedPlanning/>} ></Route>
          <Route path="/rooms/deluxl" element={<Deluxl/>} ></Route>
          <Route path="/rooms/oceanRoom" element={<OceanRoom/>} ></Route>  
          <Route path="/rooms/oceanSuite" element={<OceanSuite/>} ></Route>
          <Route path="/rooms/specialtySuite" element={<SpecialtySuite/>} ></Route>
          <Route path="/rooms/TPOConnecting" element={<TPOConnecting/>} ></Route>
          <Route path="/rooms/TDConnecting" element={<TDConnecting/>} ></Route>
          <Route path="/gallery" element={<Gallery/>} ></Route>
          <Route path="/offers" element={<Offer/>} ></Route>
          <Route path="/off1" element={<Off1/>} ></Route> 
          <Route path="/off2" element={<Off2/>} ></Route> 
          <Route path="/off3" element={<Off3/>} ></Route>
          <Route path="/Sign" element={<Sign/>} ></Route>
          <Route path="/JoinNow" element={<JoinNow/>} ></Route>
          <Route path="/RoomBooking" element={<RoomBooking/>} ></Route>
          <Route path="/RoomPrices" element={<RoomPrices/>} ></Route>  
          <Route path="/RoomPricesSuccess" element={<RoomPricesSuccess/>} ></Route>                    
        </Routes>

</>
  );
}

export default App;
