"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// document:
router.use('/users', require('./user'))

router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router