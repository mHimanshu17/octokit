const express = require('express');
const getUser = require('./controller');
// const getUsers = require('./controller');

const router = express.Router();

router.get('/user/:user', getUser)

// router.get('/user/:user/:reponame', getRepo)

// router.get('/user/user/:reponame', getCommit)

// router.post('/user/repos', createRepo)

module.exports = router;