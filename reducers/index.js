import { combineReducers } from 'redux';

import {
	GET_ALL_DECKS,
	GET_DECK,
	ADD_DECK,
	DELETE_DECK,
	GET_CARDS,
	ADD_CARD,
	DELETE_CARD,
	UPDATE_DECK
} from '../actions'


const decks = (state = {}, action)=> {
	switch(action.type) {
		case GET_ALL_DECKS:
			return {
				...action.decks
			}
		case ADD_DECK:
			return {
				...state,
				...action.deck

			}
		case DELETE_DECK:
			let {[action.deck]: {}, ...decks} = state
			return {
				...decks
			}
		case ADD_CARD:
			const { deck, card} = action
			const { question, answer } = card

			const {key, numOfCards, ...initialDeck} = deck
			return{
				...state,
				[initialDeck.title]: {
					...initialDeck,
					questions: [
						...initialDeck.questions
					]
				}
			}
		default:
			return state;
	}

}


const currentDeck = (state = {questions: []}, action) => {

	switch(action.type){
		case GET_DECK:
			return {
				...action.deck,
			}
		case UPDATE_DECK:
			return {
				...state[action.deck.title]
			}
		default:
			return state
	}
}




export default combineReducers({
	decks,
	currentDeck
})


