import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.refresh();
  }

  refresh(description = '') {
    const search = description ? `&description_regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => {
        this.setState({ ...this.state, description, list: resp.data });
      });
  }

  handleSearch() {
    this.setState(this.state.description);
  }

  handleAdd() {
    axios.post(URL, { description: this.state.description })
      .then(resp => this.refresh());
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res => this.refresh(this.state.description));
  }
  
  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => this.refresh(this.state.description));
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description));
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange} handleSearch={this.handleSearch}/>
        <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsPending={this.handleMarkAsPending} handleMarkAsDone={this.handleMarkAsDone}/>
      </div>
    );
  }
};