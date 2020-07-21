import React, { useState, useEffect } from 'react';
import LineDataService from '../services/LineService';
import LineView from './LineView';

const LineList = () => {
  const [line, setLine] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    retrieveLine();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveLine = () => {
    LineDataService.getAll()
      .then((response) => {
        setLine(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveLine();
    setCurrentLine(null);
    setCurrentIndex(-1);
  };

  const setActiveLine = (line, index) => {
    setCurrentLine(line);
    setCurrentIndex(index);
  };

  const handleDeleteLine = (id) => {
    LineDataService.remove(id)
      .then((response) => {
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeAllLine = () => {
    LineDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleResetDataBase = () => {
    LineDataService.importLines()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    LineDataService.findByName(searchName)
      .then((response) => {
        setLine(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Procure pelo nome"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Procurar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <h4>Todas as Linhas</h4>

        <ul className="list-group">
          {line &&
            line.map((line, index) => (
              <LineView
                line={line}
                onClick={() => setActiveLine(line, index)}
                onDelete={handleDeleteLine}
                key={index}
                isCurrent={index === currentIndex}
              />
            ))}
        </ul>

        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllLine}>
          Remover Todos
        </button>
        <button className="m-3 btn btn-sm btn-success" onClick={handleResetDataBase}>
          Reset DataBase
          </button>
      </div>
    </div>
  );
};

export default LineList;
