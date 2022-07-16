const router = require('express').Router();

const characterDataRoutes = require('./character-data-routes');
const classRoutes = require('./class-routes');
const equipmentRoutes = require('./equipment-routes');
const featsRoutes = require('./feats-routes');
const featuresRoutes = require('./features-routes');
const gameMechanicsRoutes = require('./game-mechanic-routes');
const monsterRoutes = require('./monster-routes');
const raceRoutes = require('./race-routes');
const rulesRoutes = require('./rules-routes');
const spellRoutes = require('./spell-routes');
const subClassesRoutes = require('./sub-classes-routes');
const subRacesRoutes = require('./sub-races-routes');

router.use('/character-data', characterDataRoutes);
router.use('/classes', classRoutes);
router.use('/equipment', equipmentRoutes);
router.use('/feats', featsRoutes);
router.use('/features', featuresRoutes);
router.use('/game-mechanics', gameMechanicsRoutes);
router.use('/monsters', monsterRoutes);
router.use('/races', raceRoutes);
router.use('/rules', rulesRoutes);
router.use('/subclasses', subClassesRoutes);
router.use('/subraces', subRacesRoutes);
router.use('/spells', spellRoutes);

module.exports = router;
