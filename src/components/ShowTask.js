export const ShowTask = ({ tasklist, setTaskList, task, setTask }) => {
  // Função para lidar com a edição de uma tarefa
  const handleEdit = (id) => {
    // Encontra a tarefa selecionada pelo id na lista de tarefas
    const selectedTask = tasklist.find((todo) => todo.id === id);
    // Define a tarefa selecionada como a tarefa atual para edição
    setTask(selectedTask); 
  };

  // Função para lidar com a exclusão de uma tarefa
  const handleDelete = (id) => {
    // Filtra a lista de tarefas, removendo a tarefa com o id correspondente
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
    // Atualiza a lista de tarefas com a nova lista filtrada
    setTaskList(updatedTasklist);
  };

  return (
    <section className="showTask">
      {/* Cabeçalho com título "Todos" e contagem de tarefas */}
      <div className="head">
        <div>
          <span className="title">Todos</span>
          {/* Exibe o número total de tarefas na lista */}
          <span className="count">{tasklist.length}</span>
        </div>
        {/* Botão para limpar todas as tarefas da lista */}
        <button className="clearAll" onClick={() => setTaskList([])}>
          Limpar tudo
        </button>
      </div>


      <ul>
        {/* Mapeia cada tarefa na lista para exibição */}
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              {/* Exibe o nome da tarefa */}
              <span className="name">{todo.name}</span>
              {/* Exibe o tempo que a tarefa foi salvo */}
              <span className="time">{todo.time}</span>
            
            </p>
            {/* Ícone de lápis para editar a tarefa */}
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square">

            </i>
            {/* Ícone de lixeira para excluir a tarefa */}
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash">  
            </i>
          </li>
        ))}
      </ul>
    </section>
  );
};
