const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const todoItems = [
    {
        name: 'Clean Toilets',
        description: 'scrub the insides of toilets',
        imageUrl: 'https://previews.123rf.com/images/andreypopov/andreypopov1702/andreypopov170200825/71451539-high-angle-view-of-a-person-cleans-a-bathroom-toilet-with-a-scrub-brush.jpg',
        complete: false,
        id: uuidv4()
    }
]

todoRouter.get('/', (req, res) => {
    res.send(todoItems)
})

todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todoItems.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRouter.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoItems.push(newTodo)
    res.send('You have a new Todo Item')
})

todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const updatedObject = req.body
    const todoIndex = todoItems.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todoItems[todoIndex], updatedObject)
    res.send(updatedTodo)
})

todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoItems.findIndex(todo => todoId._id === todoId)
    todoItems.splice(todoIndex, 1)
    res.send('you have deleted a todo item')
})

module.exports = todoRouter