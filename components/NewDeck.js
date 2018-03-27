import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Input, TextInput, Button, TouchableOpacity } from 'react-native';
import { insertDeck, deleteDeck, insertCard, deleteCard} from '../utils/api.js';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { NavigationActions } from 'react-navigation';


class NewDeck extends Component {

	constructor(props){
		super(props)
		this.state = {text: ''};
	}

	componentDidMount(){


		this.setState({text: 'deck name'})
		const data = {
			deck: "Javascript",
			question: "What is babel?"
		}



	}

	back = () => {

		this.props.navigation.dispatch(NavigationActions.navigate({
			routeName: 'Decks'
		}))
	}


	createNewDeck = () =>{

		const {text} = this.state;
		insertDeck(text).then((deck)=>{
			this.props.insertNewDeck(deck);
			this.props.setCurrentDeck(deck[text])
			this.setState({text: ''});
			this.props.navigation.navigate('DeckDetails')
		})

	}



	render(){

		if(Platform.OS === 'android'){
			return (
			<View style={styles.container}>
				<Text style={styles.caption}>What is the title of your deck?</Text>
				<TextInput style={styles.inputText} value={this.state.text} onChangeText={(text)=>this.setState({text})} onFocus={()=>{this.setState({text: ""})}} />
				<Button title="create" color="black" onPress={()=>this.createNewDeck()} />
			</View>
			)
		}else{
			return (
				<View style={styles.container}>
					<Text style={styles.caption}>What is the title of your deck?</Text>
					<TextInput style={styles.inputText} value={this.state.text} onChangeText={(text)=>this.setState({text})} onFocus={()=>{this.setState({text: ""})}}/>
					<TouchableOpacity style={styles.iosButton} onPress={()=>this.createNewDeck()}><Text style={styles.iosButtonText}>create</Text></TouchableOpacity>
				</View>
			)
		}

	}
}

function mapDispatchToProps(dispatch){

	return {
		insertNewDeck: (deck) => {
			dispatch(actions.addDeck(deck));

		},
		setCurrentDeck: (deck) =>{
			dispatch(actions.getDeck(deck))
		}
	}
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20
	},
	caption: {
		fontSize: 40,
		fontWeight: 'bold',
		marginBottom: 20
	},
	inputText: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		padding: 10,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		marginBottom: 20
	},
	iosButton: {

		marginTop: 10,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: "black",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'black'
	},
	iosButtonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
})

export default connect(null, mapDispatchToProps)(NewDeck)