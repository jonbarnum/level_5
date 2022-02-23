const express = require('express')
const soccerTeamRouter = express.Router()
const {v4: uuidv4} = require('uuid') //npm install uuid for creating id's for the fake data


const soccerTeams = [
    {name: 'Southampton', league: 'EPL', _id: uuidv4()},
    {name: 'BVB', league: 'Bundesliga', _id: uuidv4()},
    {name: 'Real Salt Lake', league: 'MLS', _id: uuidv4()},
    {name: 'Valencua', league: 'La Liga', _id: uuidv4()}
]

soccerTeamRouter.get('/', (req, res) => {
    res.send(soccerTeams)
})

soccerTeamRouter.get('/:soccerTeamId', (req, res) => {
    const soccerTeamId = req.params.soccerTeamId
    const foundTeam = soccerTeams.find(team => team._id === soccerTeamId)
    res.send(foundTeam)
})




module.exports = soccerTeamRouter