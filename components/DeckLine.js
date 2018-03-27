import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Button, Platform } from 'react-native';
import { deleteDeck, getDeck } from '../utils/api.js';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux'
import * as actions from '../actions'



const styles = StyleSheet.create({
	title: {
		fontSize: 40,
		paddingTop: 22,
		textAlign: 'center'
	},
	titleAndroid: {
		fontSize: 40,
		paddingTop: 22,
		textAlign: 'center',
		alignSelf: 'stretch'
	},
	cardsNum: {
		fontSize: 20,
		paddingTop: 10,
		textAlign: 'center',
		color: 'gray'
	}
})





class DeckLine extends Component{

	constructor(props){
		super(props)
		this.state = {
			activeRowKey: null
		}

	}

	deleteDeck = () => {
		deleteDeck(this.state.activeRowKey).then(()=>{
			this.props.deleteDeck(this.state.activeRowKey)
		})

	}

	goToDeck = ({title}) => {
		this.props.getCurrentDeck(title).then(()=> {
			this.props.navigation.navigate('DeckDetails', {deck: this.props.deck.title})
		})


	}


	render(){

		const { deck } = this.props;
		if(Platform.OS === 'ios'){

			const swipeSettings = {
				autoClose: true,
				onClose: (secId, rowId, direction)=> {

				},
				onOpen: (secId, rowId, direction) => {
					this.setState({activeRowKey: this.props.deck.title})
				},
				right: [
					{
						onPress: () => {
							this.deleteDeck()
						},
						text: 'Delete', type: 'delete'
					}
				],
				rowId: this.props.index,
				sectionId: 1
			}

			return(
				<Swipeout {...swipeSettings} style={{flex: 1}} >
					<View style={{flex: 1, backgroundColor: 'white'}}>
						<TouchableOpacity onPress={() => {

							this.goToDeck(deck)
						}}>
							<Text style={styles.title}>{this.props.deck.title}</Text>
							<Text style={styles.cardsNum}>{this.props.deck.numOfCards} cards</Text>
						</TouchableOpacity>
					</View>
				</Swipeout>
			)
		}else{
			return (
				<View style={{flex: 1, backgroundColor: 'white'}}>
					<TouchableOpacity onPress={() => {
						this.goToDeck(deck)
					}}>
						<Text style={styles.titleAndroid}>{this.props.deck.title}</Text>
						<Text style={styles.cardsNum}>{this.props.deck.numOfCards} cards</Text>
					</TouchableOpacity>
				</View>
			)
		}


	}
}

function mapDispatchToProps(dispatch){
	 return{
	 	deleteDeck: (deck) =>{
	 		dispatch(actions.deleteDeck(deck))
	 	},
	 	getCurrentDeck: (deck) =>{
	 		return getDeck(deck).then((deck)=> {
	 			console.log("deck is", deck);
	 			dispatch(actions.getDeck(deck))
	 		})

	 	}
	 }
}

export default connect(null, mapDispatchToProps)(DeckLine)


