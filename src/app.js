const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Permite receber JSON no corpo das requisições
app.use(express.json())

// Banco de dados em memória (simples, para aprender)
let tasks = [
  { id: 1, title: 'Aprender Docker', done: false },
  { id: 2, title: 'Aprender Kubernetes', done: false },
  { id: 3, title: 'Conseguir a vaga', done: false }
]

// GET / — rota inicial
app.get('/', (req, res) => {
  res.json({
    message: 'DevTask API funcionando!',
    version: '1.0.0',
    rotas: ['GET /tasks', 'POST /tasks']
  })
})

// GET /tasks — lista todas as tarefas
app.get('/tasks', (req, res) => {
  res.json({
    total: tasks.length,
    tasks: tasks
  })
})

// POST /tasks — cria uma nova tarefa
app.post('/tasks', (req, res) => {
  const { title } = req.body

  if (!title) {
    return res.status(400).json({ error: 'O campo title é obrigatório' })
  }

  const newTask = {
    id: tasks.length + 1,
    title: title,
    done: false
  }

  tasks.push(newTask)
  res.status(201).json(newTask)
})

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

module.exports = app