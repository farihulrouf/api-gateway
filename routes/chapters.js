const express = require('express');
const router = express.Router();
const chapterssHandler = require('./handler/chapters');

router.post('/', chapterssHandler.create);

router.put('/:id', chapterssHandler.update);
router.delete('/:id', chapterssHandler.destroy);
router.get('/:id', chapterssHandler.get);
router.get('/', chapterssHandler.getAll);

module.exports = router;
