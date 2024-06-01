import React, { useState } from "react";

// const decoration = {
//   textDecoration: "line-through",
// };

function ToDoItems(props) {
  // function handleChange() {}

  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItems;
