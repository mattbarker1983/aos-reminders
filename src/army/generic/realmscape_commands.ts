import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
} from 'types/phases'
import { TCommands } from 'types/army'
import { AQSHY, CHAMON, GHUR, GHYRAN, HYSH, SHYISH, STYGXX, ULGU } from 'types/realmscapes'

// Realm specific command abilities.
// const Commands: TCommands = [
// {
// name: `Firestarter (${AQSHY})`,
// effects: [
// {
// name: `Firestarter (${AQSHY})`,
// desc: `Pick a terrain feature within 12" of a friendly hero and within 3" of another friendly unit; roll a dice.  On a 4+ the terrain feature is set alight.  For the rest of the battle, any unit with models in or on the terrain feature at the end of the movement phase suffers D3 mortal wounds.  In addition the terrain now blocks line of sight for models (measured center to center on bases).`,
// when: [START_OF_MOVEMENT_PHASE],
// command_ability: true,
// },
// {
// name: `Firestarter (${AQSHY})`,
// desc: `If terrain is alight, any unit with models in or on the terrain feature suffers D3 mortal wounds.`,
// when: [END_OF_MOVEMENT_PHASE],
// },
// {
// name: `Firestarter (${AQSHY})`,
// desc: `If terrain is alight, it now blocks line of sight for models (measured center to center on bases).`,
// when: [DURING_GAME],
// },
// ],
// },
// {
// name: `Adapt or Die (${CHAMON})`,
// effects: [
// {
// name: `Adapt or Die (${CHAMON})`,
// desc: `Pick a friendly unit within 3" of a friendly hero (12" of your general).  Until your next hero phase, roll a dice for each wound or mortal wound allocated to the unit.  On a 6+ the wound is negated.`,
// when: [START_OF_HERO_PHASE],
// command_ability: true,
// },
// {
// name: `Adapt or Die (${CHAMON})`,
// desc: `If active, roll a dice for each wound or mortal wound allocated to the buffed unit.  On a 6+ the wound is negated.`,
// when: [DURING_GAME],
// },
// ],
// },
// {
// name: `Monstrous Beasts (${GHUR})`,
// effects: [
// {
// name: `Monstrous Beasts (${GHUR})`,
// desc: `Each player can set up a monster that is not a hero, starting with the player who finished army set up first.  These models can be set up anywhere on the battlefield more than 9" from models in either players army.  These monsters are not part of either army.`,
// when: [END_OF_SETUP],
// },
// {
// name: `Monstrous Beasts (${GHUR})`,
// desc: `These models chose their prey.  This is the unit closest to them.  For the rest of the battle round, this model joins the opposing player's army (with respect to the prey).  If both players have a unit equally closest to the monster, roll off to determine which player picks the prey.  Monstrous Beasts cannot pick each other as prey.`,
// when: [START_OF_ROUND],
// },
// ],
// },
// {
// name: `Command the Land (${GHYRAN})`,
// effects: [
// {
// name: `Command the Land (${GHYRAN})`,
// desc: `A friendly hero can attempt to cast Shield of Thorns even if they are not a wizard and even if the spell has already been attempted in this phase.`,
// when: [END_OF_HERO_PHASE],
// command_ability: true,
// },
// ],
// },
// {
// name: `Strike Quickly (${HYSH})`,
// effects: [
// {
// name: `Strike Quickly (${HYSH})`,
// desc: `Pick a friendly unit within 3" of a friendly hero (12" of your general) and within 3" of an enemy unit.  That unit fights immeadiately instead of later in the combat phase.`,
// when: [START_OF_COMBAT_PHASE],
// command_ability: true,
// },
// ],
// },
// {
// name: `Lord of the Shadow Realm (${ULGU})`,
// effects: [
// {
// name: `Lord of the Shadow Realm (${ULGU})`,
// desc: `You can use either Shadowed Mansions or Shadow Realm realmscape features.  In addition, you do not need to perform the lost in shadow realm check for these actions.  Note this action is in addtion to the active realmscape feature.`,
// when: [START_OF_HERO_PHASE],
// command_ability: true,
// },
// ],
// },
// {
// name: `Honour the Dead (${SHYISH}) (${STYGXX})`,
// effects: [
// {
// name: `Honour the Dead (${SHYISH}) (${STYGXX})`,
// desc: `Pick a friendly unit within 3" of a hero (12" of a general) and roll a dice.  If the roll is less than the number of models that have been slain from the selected unit, you can add 1 to the attacks characteristic of that unit.`,
// when: [START_OF_COMBAT_PHASE],
// command_ability: true,
// },
// ],
// },
// {
// name: `Soul-force Sacrifice (${SHYISH}) (${STYGXX})`,
// effects: [
// {
// name: `Soul-force Sacrifice (${SHYISH}) (${STYGXX})`,
// desc: `Pick a friendly unit within 3" of your general.  Allocate any number of wounds to selected unit and heal that many wounds from the general.`,
// when: [START_OF_HERO_PHASE],
// command_ability: true,
// },
// ],
// },
// ]

// export default Commands
