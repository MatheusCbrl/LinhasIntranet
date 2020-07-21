import React, { useState } from 'react';
import LineDataService from '../services/LineService';

const AddLine = () => {
  const initialLineState = {
    id: null,
    linha: '',
    latitude: '',
    longitude: '',
    hora: '',
    prestadora:'',
  };
  const [line, setLine] = useState(initialLineState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLine({ ...line, [name]: value });
  };

  const saveLine = () => {
    var data = {
      linha: line.linha,
      latitude: line.latitude,
      longitude: line.longitude,
      hora: line.hora,
      prestadora:line.prestadora,
    };

    LineDataService.create(data)
      .then((response) => {
        setLine({
          id: response.data.id,
          linha: response.data.linha,
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          hora: response.data.hora,
          prestadora: response.data.prestadora,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newLine = () => {
    setLine(initialLineState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Sucesso!</h4>
          <button className="btn btn-success" onClick={newLine}>
            Adicinar
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="linha">Linha</label>
            <input
              type="text"
              className="form-control"
              id="linha"
              required
              value={line.linha}
              onChange={handleInputChange}
              name="linha"
            />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              className="form-control"
              id="latitude"
              required
              value={line.latitude}
              onChange={handleInputChange}
              name="latitude"
            />
          </div>
          <div className="form-group">
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              className="form-control"
              id="longitude"
              required
              value={line.longitude}
              onChange={handleInputChange}
              name="longitude"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hora">Hora</label>
            <input
              type="text"
              className="form-control"
              id="hora"
              required
              value={line.hora}
              onChange={handleInputChange}
              name="hora"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prestadora">Prestadora</label>
            <input
              type="text"
              className="form-control"
              id="prestadora"
              required
              value={line.prestadora}
              onChange={handleInputChange}
              name="prestadora"
            />
          </div>
          <button onClick={saveLine} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddLine;