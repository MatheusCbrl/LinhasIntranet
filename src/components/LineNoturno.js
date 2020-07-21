import React, { useState, useEffect } from 'react';
import LineDataService from '../services/LineService';

const Line = (props) => {
  const initialLineState = {
    id: null,
    linha: '',
    latitude: '',
    longitude: '',
    hora: '',
    prestadora:'',
  };
  const [currentLine, setCurrentLine] = useState(initialLineState);
  const [message, setMessage] = useState('');

  const getLine = (id) => {
    LineDataService.get(id)
      .then((response) => {
        setCurrentLine(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getLine(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { linha, hora } = event.target;
    setCurrentLine({ ...currentLine, [linha]: hora });
  };

  const updateLine = () => {
    LineDataService.update(currentLine.id, currentLine)
      .then((response) => {
        setMessage('The line was updated successfully!');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteLine = () => {
    LineDataService.remove(currentLine.id)
      .then((response) => {
        props.history.push('/line');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentLine ? (
        <div className="edit-form">
          <h4>Line</h4>
          <form>
          <div className="form-group">
            <label htmlFor="linha">Linha</label>
            <input
              type="text"
              className="form-control"
              id="linha"
              required
              value={currentLine.linha}
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
              value={currentLine.latitude}
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
              value={currentLine.longitude}
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
              value={currentLine.hora}
              onChange={handleInputChange}
              name="hora"
            />
          </div>
          <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                type="number"
                className="form-control"
                id="value"
                name="value"
                value={currentLine.value}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteLine}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success mr-2"
            onClick={updateLine}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Line...</p>
        </div>
      )}
    </div>
  );
};

export default Line;
