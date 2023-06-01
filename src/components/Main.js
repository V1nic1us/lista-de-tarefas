import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    lista: ['Tomar cafe', 'Trabalhar', 'Estudar'],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, lista } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <br />
        <ul className="tarefas">
          {lista.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
