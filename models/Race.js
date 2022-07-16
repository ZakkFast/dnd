const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Race = Schema({
  index: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  ability_bonuses: [
    {
      ability_bonus: {
        type: Schema.Types.ObjectId,
        ref: 'ability_bonus',
      },
    },
  ],
  alignment: {
    type: String,
  },
  age: {
    type: String,
  },
  size: {
    type: String,
  },
  size_description: {
    type: String,
  },
  starting_proficiencies: {
    number_of_choices: {
      type: Number,
    },
    proficiency_choices: [
      {
        choices: {
          type: Schema.Types.ObjectId,
          ref: 'proficiency',
        },
      },
    ],
  },
  languages: [
    {
      language: {
        type: Schema.Types.ObjectId,
        ref: 'language',
      },
    },
  ],
  languages_decription: {
    type: String,
  },
  traits: [
    {
      trait: {
        type: Schema.Types.ObjectId,
        ref: 'trait',
      },
    },
  ],
  subraces: [
    {
      subrace: {
        type: Schema.Types.ObjectId,
        ref: 'subrace',
      },
    },
  ],
});

module.exports = Race = mongoose.model('race', RaceSchema);
