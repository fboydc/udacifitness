export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const UPDATE_DECK = 'UPDATE_DECK'
export const GET_CARDS = 'GET_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_CARD = 'DELETE_CARD'


export function getAllDecks(decks){
	return {
		type: GET_ALL_DECKS,
		decks
	}
}


export function getDeck(deck){
	return {
		type: GET_DECK,
		deck
	}
}


export function addDeck(deck){
	return {
		type: ADD_DECK,
		deck
	}
}

export function deleteDeck(deck){
	return {
		type: DELETE_DECK,
		deck
	}
}

export function updateDeck(deck){
	return {
		type: UPDATE_DECK,
		deck
	}
}

export function getCards(cards){
	return {
		type: GET_CARDS,
		cards
	}
}

export function addCard(deck, card){
	return {
		type: ADD_CARD,
		deck,
		card
	}
}

export function deleteCard(card){
	return {
		type: DELETE_CARD,
		card
	}
}