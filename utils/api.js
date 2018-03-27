import { AsyncStorage } from 'react-native';


export const DECKS_STORAGE_KEY = 'udacicards:decks'





function setDummyData(){
	const data =  {
		React: {
			title: 'React',
			questions: [
				{
					question: 'What is React?',
					answer: 'A library for managing user interfaces'
				},
				{
					question: 'Where do you make Ajax requests in React?',
					answer: 'The componentDidMount lifecycle event'
				}
			]
		},
		Javascript: {
			title: 'Javascript',
			questions: [{
				question: 'What is closure?',
				answer: 'The combination of a function and the lexical environment within which that function was declared.'
			}]
		}
	}

	AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
	return data

}


export function fetchDecks(){
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=>{
		return results === null ? setDummyData() : JSON.parse(results);
	})
}


export function insertDeck(title){

	const deck = {
		[title]: {
			title: title,
			questions: []
		}
	}
	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(
		{ ...deck}
	)).then(()=>{
		return deck
	})
}


export function deleteDeck(deck){
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=>{
		const data = JSON.parse(results)
		data[deck] = undefined
		delete data[deck]
		AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
	})
}



export function getDeck(deck){
	return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=>{
		const data = JSON.parse(results)
		return data[deck]
	})
}

export function getQuestions(title){
	return getDeck(title).then((deck)=>{
		return deck.questions;
	});
}


export function insertCard({title}, card){
	return getQuestions(title).then((questions)=>{
		return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
			[title]: {
				questions: [...questions, card]
			}
		})).then(()=>{
			return true;
		})

	})

}


export function deleteCard({deck, question}){
	return getQuestions(deck).then((questions)=>{
		 return filtered = questions.filter((next)=>( next.question !== question))
	}).then((filtered)=>{
		return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results)=>{
			const data = JSON.parse(results);

			data[deck] = {
				...data[deck],
				questions: [
					...filtered
				]
			}

			AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
		})
	})
}










