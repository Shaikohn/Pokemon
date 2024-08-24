const { Router } = require('express');
const pokemonsRouter = require('./pokemonRoutes');

const router = Router();

router.use('/pokemons', pokemonsRouter);

module.exports = router;