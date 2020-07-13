import React from 'react';
import Grid from './../template/Grid';
import './TodoForm.css';
import IconButton from './../template/IconButton';

export default props => (

    <form role='form' className="todoForm form-group row" id="todoForm">
        <Grid cols='12 9 10'>
            <label htmlFor="description">Nova tarefa</label>
            <input id="description" type="text" className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton icon="plus" style="primary" />
        </Grid>
    </form>

);