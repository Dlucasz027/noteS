#IN PROGRESS

💾 1. Salvar tarefas ao recarregar a página
→ Usar localStorage para persistir:

tarefas
status (concluída ou não)
grupo (study/work/home)

🗂 2. Grupos de tarefas

Criar categorias:
study
work
home
Cada tarefa teria algo tipo:

{
  id: 1,
  texto: "Estudar redes",
  grupo: "study",
  concluida: false
}

🔍 3. Filtro por grupo

Botões ou select:
Todos
Study
Work
Home
E renderiza só as tarefas daquele grupo.

🧩 4. Botões por tarefa
Cada tarefa teria:
✅ Concluir
🗑 Excluir
▶ Iniciar
Tudo controlado por eventos no DOM.

⏱ 5. Pomodoro por tarefa
Quando clicar em Iniciar:
Abre um modal
Pergunta: “Deseja usar Pomodoro?”
Se sim:
Inicia timer (25/5 ou configurável)
Associa o tempo à tarefa
