export const AddTask = ({ tasklist, setTaskList, task, setTask }) => {
  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    const date = new Date(); // Obtém a data e hora atuais

    if (task.id) {
      // Se task.id existe, significa que estamos atualizando uma tarefa existente
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              ...task,
              name: e.target.task.value,
              time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : todo
      );
      setTaskList(updatedTasklist); // Atualiza a lista de tarefas com a tarefa atualizada
      setTask({ id: null, name: "" }); // Reseta o campo de entrada de tarefa
    } else {
      // Caso contrário, estamos adicionando uma nova tarefa
      const newTask = {
        id: date.getTime(), // Gera um ID único baseado no timestamp atual
        name: e.target.task.value, // Obtém o nome da tarefa do campo de entrada
        time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`, // Formata a data e hora da criação da tarefa
      };
      setTaskList([...tasklist, newTask]); // Adiciona a nova tarefa à lista de tarefas
      setTask({ id: null, name: "" }); // Reseta o campo de entrada de tarefa
    }
  };

  // Função para lidar com a alteração no campo de entrada de tarefa
  const handleChange = (e) => {
    setTask({ ...task, name: e.target.value }); // Atualiza o estado da tarefa com o novo nome digitado
  };

  return (
    <div>
      <section className="addTask">
        <form onSubmit={handleSubmit}>
          {/* Campo de entrada de texto para adicionar ou editar tarefas */}
          <input
            value={task.name} // Valor do campo é definido pelo estado da tarefa atual
            type="text"
            name="task"
            autoComplete="off"
            maxLength="25" // Limita o número máximo de caracteres
            placeholder="Adicione atividade" // Placeholder do campo de entrada
            onChange={handleChange} // Evento de alteração para atualizar o estado da tarefa
          />
          {/* Botão para enviar o formulário */}
          <button type="submit">{task.id ? "Atualizar" : "Adicionar"}</button>
        </form>
      </section>
    </div>
  );
};
