import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native'
import { getDeck } from '../utils/api'


class DeckDetails extends Component {




	render(){

		const { currentDeck } = this.props;

		console.log("currentDeck", currentDeck);
			return(
				<View style={styles.container}>
					<View>
						<Text style={styles.deckTitle}>{currentDeck.title}</Text>
						<Text style={styles.cardsNum}>{currentDeck.numOfCards} card/s</Text>
					</View>
					<View>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddCard', {deck: currentDeck}) }} style={[styles.buttonContainer, {backgroundColor: 'black'}]}>
							<Text style={styles.buttonText}>Add Card</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Quiz')}} style={[styles.buttonContainer, {backgroundColor: 'green'}]}>
							<Text style={styles.buttonText}>Start Quiz</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}} style={[styles.buttonContainer, {backgroundColor: 'blue'}]}>
							<Text style={styles.buttonText}>Change Deck</Text>
						</TouchableOpacity>
					</View>
				</View>
			)


	}
}






const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	deckTitle: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	cardsNum: {
		fontSize: 20,
		textAlign: 'center'
	},
	buttonContainer: {
		padding: 20,
		borderRadius: 5,
		marginBottom: 20

	},
	buttonText: {
		fontSize: 30,
		color: 'white',
		textAlign: 'center'
	}
})


function mapStateToProps(state){

	return {
		currentDeck: {
			...state.currentDeck,
			numOfCards: state.currentDeck.questions.length
		}
	}
}



export default connect(mapStateToProps, null)(DeckDetails)
