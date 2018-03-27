import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { fetchDecks } from '../utils/api.js';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DeckLine from './DeckLine';








class Decks extends Component {



	componentDidMount(){
		this.props.getDecks()
	}

	render(){

		const { decks } = this.props


		return (
			<View style={{flex: 1, alignItems: 'stretch', backgroundColor: 'white'}}>
				<FlatList data={decks} extraData={decks} renderItem={({item}) => {

					return (
						<DeckLine deck={item} {...this.props}/>
						)
					}
				} containerStyle={{flex: 1,  justifyContent: 'space-between'}}/>
			</View>
		)
	}
}



function mapStateToProps(state){

	const { decks } = state;

	return {
		decks: Object.keys(decks).map((key)=>{
		 	return {
		 		...state.decks[key],
		 		numOfCards: state.decks[key].questions.length,
		 		key: state.decks[key].title
		 	}
	 	})
	}
}

function mapDispatchToProps(dispatch){
	return {
		getDecks: () => {
			return fetchDecks().then((decks)=> {
				dispatch(actions.getAllDecks(decks))
			})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Decks)