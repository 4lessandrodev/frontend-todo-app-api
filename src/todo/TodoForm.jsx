import React from 'react';
import Grid from './../template/Grid';
import './TodoForm.css';
import IconButton from './../template/IconButton';

export default props => (

    <form role='form' className="todoForm form-group row" id="todoForm">
        <Grid cols='12 9 10'>
            <label htmlFor="description">Nova tarefa</label>
            <input id="description" type="text" className="form-control" placeholder="Adicione uma tarefa"
                onChange={props.handleChange}
                value={props.description} />
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton icon="plus" onClick={props.handleAdd} style="primary" />
            <IconButton icon="search" onClick={props.handleSearch} style="info" />
        </Grid>
    </form>

);