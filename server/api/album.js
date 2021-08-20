const router = require('express').Router();

router.get('/', async (req, res, next) => {
    try {
        const albums = await albums.findAll({
            include: artist
        });
        res.send(albums)
    } catch (error) {
        next(error)
    }
})

module.exports = router;


