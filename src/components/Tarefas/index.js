import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
    return (
        <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
                <li key={tarefa}>
                    {tarefa}
                    <span>
                        <FaEdit
                            onClick={(e) => handleEdit(e, index)}
                            className="edit"
                        />
                        <FaWindowClose
                            onClick={(e) => handleDelete(e, index)}
                            className="delete"
                        />
                    </span>
                </li>
            ))}
        </ul>
    );
}

Tarefas.propTypes = {
    tarefas: PropTypes.instanceOf(Array).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};
