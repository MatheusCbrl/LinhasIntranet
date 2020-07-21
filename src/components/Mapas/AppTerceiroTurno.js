import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './MapsTerceiroTurno';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: -29.1712857, longitude: -51.234906, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1686144, longitude: -51.2269452, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1643151, longitude: -51.2264844, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1666057, longitude: -51.2255832, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1607603, longitude: -51.2171859, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1586076, longitude: -51.1932808, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1525928, longitude: -51.1950014, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1503581, longitude: -51.1718478, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1409481, longitude: -51.1431558, name: 'L004 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.2000638, longitude: -51.1871727, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.2009553, longitude: -51.1941407, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.2205989, longitude: -51.1980899, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.2182739, longitude: -51.1987029, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1994183, longitude: -51.1970067, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1953768, longitude: -51.1941575, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1935809, longitude: -51.1964619, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1889291, longitude: -51.1875237, name: 'L007 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1721692, longitude: -51.1436045, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1721271, longitude: -51.1489581, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1868127, longitude: -51.1521173, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1851197, longitude: -51.1505267, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1803593, longitude: -51.1459335, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1806432, longitude: -51.1441937, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1748158, longitude: -51.1415192, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.176711, longitude: -51.137149, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1783391, longitude: -51.1345324, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1748603, longitude: -51.1355119, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1671744, longitude: -51.1362634, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1697427, longitude: -51.1261179, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1746694, longitude: -51.1239665, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1616033, longitude: -51.1166039, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1579897, longitude: -51.1153003, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1578032, longitude: -51.1309326, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1592742, longitude: -51.1344581, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1589625, longitude: -51.137722, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1487022, longitude: -51.1320289, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1457115, longitude: -51.1310681, name: 'L010 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1994317, longitude: -51.250948, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1940454, longitude: -51.2403326, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.2024304, longitude: -51.2465618, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.2027842, longitude: -51.2371067, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.2053303, longitude: -51.2372086, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.2081734, longitude: -51.2368624, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1975037, longitude: -51.2382123, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1897204, longitude: -51.239154, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1892138, longitude: -51.2387486, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1833071, longitude: -51.2329717, name: 'L001 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.2414321, longitude: -51.1352613, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.2189711, longitude: -51.1875215, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.204366, longitude: -51.1747492, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.2073506, longitude: -51.174363, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.2045212, longitude: -51.1723352, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.2034148, longitude: -51.1722078, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1871498, longitude: -51.1832287, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1820954, longitude: -51.1760403, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1827848, longitude: -51.1665346, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1814593, longitude: -51.1637826, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1668673, longitude: -51.1498613, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1615224, longitude: -51.154478, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1348976, longitude: -51.1183532, name: 'L008 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:03:00' },
        { latitude: -29.1876291, longitude: -51.2049941, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1882582, longitude: -51.2069226, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1941786, longitude: -51.2023453, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1947265, longitude: -51.2056445, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1948763, longitude: -51.2087719, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.2049013, longitude: -51.2094809, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.2183705, longitude: -51.1989745, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.2123884, longitude: -51.19536, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.2085685, longitude: -51.1920192, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.2045423, longitude: -51.1960787, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1994696, longitude: -51.1970219, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1612443, longitude: -51.1567032, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1268142, longitude: -51.1276559, name: 'L011 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:10:00' },
        { latitude: -29.1797527, longitude: -51.189886, name: 'L002 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1828522, longitude: -51.1896013, name: 'L002 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1788155, longitude: -51.1970786, name: 'L002 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1567169, longitude: -51.1495263, name: 'L002 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1573305, longitude: -51.14486, name: 'L002 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1590741, longitude: -51.1398756, name: 'L002 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1797527, longitude: -51.189886, name: 'L003 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1828522, longitude: -51.1896013, name: 'L003 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1788155, longitude: -51.1970786, name: 'L003 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1567169, longitude: -51.1495263, name: 'L003 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1573305, longitude: -51.14486, name: 'L003 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1590741, longitude: -51.1398756, name: 'L003 -  Bragé', hora: 'Aguardar o transporte a partir de: 21:20:00' },
        { latitude: -29.1322721, longitude: -51.1709724, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1257186, longitude: -51.1641295, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1272294, longitude: -51.1660294, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1282143, longitude: -51.1691524, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1436735, longitude: -51.1862619, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1404596, longitude: -51.1848832, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1304352, longitude: -51.1799343, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1243972, longitude: -51.1835929, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1186233, longitude: -51.1893715, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1221587, longitude: -51.1783103, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1233395, longitude: -51.1782682, name: 'L006 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1836824, longitude: -51.1672938, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.185642, longitude: -51.1695508, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1881359, longitude: -51.1692075, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1904641, longitude: -51.1653688, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1888877, longitude: -51.1643485, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1934147, longitude: -51.1672849, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1962244, longitude: -51.1666492, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1979596, longitude: -51.1648848, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1838028, longitude: -51.1576243, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.1773635, longitude: -51.1572243, name: 'L012 -  Unidos', hora: 'Aguardar o transporte a partir de: 21:15:00' },
        { latitude: -29.2046255, longitude: -51.2306089, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.18521, longitude: -51.2283362, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1832776, longitude: -51.2232376, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1813928, longitude: -51.2184018, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1915973, longitude: -51.2216296, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1903969, longitude: -51.2148897, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1852713, longitude: -51.1989657, name: 'L009 -  Giratur', hora: 'Aguardar o transporte a partir de: 21:25:00' },
        { latitude: -29.1201861, longitude: -51.1338571, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1153436, longitude: -51.1355111, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1140391, longitude: -51.1341047, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1152885, longitude: -51.1336979, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1152135, longitude: -51.1319255, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.0987514, longitude: -51.1251528, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.0990418, longitude: -51.1232752, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1044855, longitude: -51.1222125, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.0733835, longitude: -51.1008388, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.0869299, longitude: -51.0955191, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.0780388, longitude: -51.0818746, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.0751061, longitude: -51.0716751, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1008338, longitude: -51.0894997, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },
        { latitude: -29.1212553, longitude: -51.1001937, name: 'L005 -  Caxiense', hora: 'Aguardar o transporte a partir de: 21:05:00' },

      ],
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    };
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          title={'Paradas de Ônibus.'}
          name={store.name}
          hora={store.hora}
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={this.onMarkerClick}
        />
      );
    });
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        {this.displayMarkers()}
        <Marker
          onClick={this.onMarkerClick} name={'Você está aqui!'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>{this.state.selectedPlace.hora}</p>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqKPYXiV7BlP65rt4SbKmRHrCYAkqh7j0',
})(MapContainer);
