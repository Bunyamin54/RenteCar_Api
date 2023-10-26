"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

router.use('/auth', require('./auth'))

router.use('/users', require('./user'))

router.use('/tokens', require('./token'))

router.use('/reservations', require('./reservation'))

router.use('/cars', require('./car'))

// document:
router.use('/documents', require('./document'))



/* ------------------------------------------------------- */
module.exports = router