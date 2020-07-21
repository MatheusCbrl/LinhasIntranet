import React from 'react'
import { Link } from 'react-router-dom';
import './LineView.css';



export default function LineView({ line, isCurrent, onClick, onDelete }) {
  const { linha, latitude, longitude, hora, prestadora, id } = line;

  const handleClick = () => {
    onClick();
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li
      className={'list-group-item ' + (isCurrent ? 'active' : '')}
      onClick={handleClick}
    >
      <span style={{ fontWeight: "600" }}>{linha}</span>
      <div className="flexRow flexCol">
        <div className="col">
          <span className="spanTitle">Latitude:</span>
          <span className="spanValue">{latitude}</span>
        </div>
        <div className="col">
          <span className="spanTitle">Longitude:</span>
          <span className="spanValue">{longitude}</span>
        </div>
        <div className="col">
          <span className="spanTitle">Hora:</span>
          <span className="spanValue">{hora}</span>
        </div>
        <div className="col">
          <span className="spanTitle">Prestadora:</span>
          <span className="spanValue">{prestadora}</span>
        </div>
      </div>
      {isCurrent ? <div className="flexCol">
        <Link
          to={`/line/${id}`}
          className="badge badge-warning"
        >Editar
        </Link> 
        <button
          style={{border:"none", marginLeft:"5px"}}
          to={`/line/${id}`}
          className="badge badge-danger"
          onClick={handleDelete}
        >Deletar
        </button> 
      </div> : null}
    </li>
  )
}
