const { Router } = require('express');
const pokemonsRouter = require('./pokemonRoutes');
const gamesRouter = require('./gameRoutes');

const router = Router();

router.use('/pokemons', pokemonsRouter);
router.use('/games', gamesRouter);

module.exports = router;