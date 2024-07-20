import React from 'react';

export default function Task(props) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {props.do === "true" ? (
        <span style={{ textDecoration: 'line-through' }}>{props.work}</span>
      ) : (
        <span>{props.work}</span>
      )}
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
}