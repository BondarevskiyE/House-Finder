import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="main">
            Страница не найдена. Вернуться на <Link to="/">главную</Link>?
      </div>
    );
  }
}
