import React, { useState } from 'react';
import Status from './Status';
import { upDateTaskRequest } from '../Services/request';
import excluir from '../icons/excluir.png';
import editar from '../icons/editar.png';
import ButtonGeneric from './ButtonGeneric';

function Task({ item, click }) {
  const [toEdit, setToEdit] = useState(false);
  const [status, setStatus] = useState(item.status);
  const [inputTask, setInputTask] = useState(item.task);
  // const [deletar, setDeletar] = useState(false);
  

  const handleChange = async ({ target }) => {
    await upDateTaskRequest('/', { id: item._id, status: target.value });
    setStatus(target.value);
    setToEdit(false);
  };

  const edit = () => {
    setToEdit(true);
  };

  return (
    <tr>
      <td className="fw-lighter text-monospace">{ inputTask }</td>
      {/* <td>{ (toEdit) ? <Input name="task" handleBlur={ (handleChange) } /> : inputTask }</td> */}
      <td className="fw-lighter">{ (toEdit) ? <Status change={ handleChange } /> : status }</td>
      <td className="fw-lighter">{ item.date }</td>
      <td>
        <ButtonGeneric click={ click }>
          <img src={ excluir } alt="Excluir tarefa" id={item._id} />
        </ButtonGeneric>
        <ButtonGeneric click={ edit }>
          <img src={ editar } alt="Editar tarefa" />
        </ButtonGeneric>
      </td>
    </tr>
  );
}

export default Task;
