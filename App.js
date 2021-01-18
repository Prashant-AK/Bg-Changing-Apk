import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const redArr=['#ffebee','#ffcdd2','#ef9a9a','#e57373','#ef5350','#f44336','#e53935','#d32f2f','#c62828 ','#b71c1c','#ff8a80','#ff5252','#ff1744 ','#d50000']

const App = () => {

	const [randomcolor,setrandomcolor] = useState('rgb(255,255,255)')

	const changeBackG = () => {
		// console.log("Hello",Math.random()*255);
		let clr = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
		setrandomcolor(clr)
	};

	const redbg=()=>{
		// console.log();
		setrandomcolor(redArr[Math.floor(Math.random()*redArr.length)]);
	}
	const reset=()=>{
		setrandomcolor('rgb(255,255,255)');
	}
	
	return (
		<View style={[styles.container, { backgroundColor: randomcolor }]}>
			
			<View style={styles.heading}>
			<Text style={{ textAlign: 'center', fontSize: 40, paddingTop: 40 }}>Hello It's my first App.</Text>
			</View>
			

			<View style={styles.btncontainer}>
				<TouchableOpacity onPress={()=>changeBackG()} style={[styles.btn,{backgroundColor:'#00FF66'}]}>
					<Text> Click Me</Text>
				</TouchableOpacity>
				
				<TouchableOpacity onPress={()=>redbg()} style={styles.btn}>
					<Text> Click for RED</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=>reset()} style={[styles.btn,{backgroundColor:'orange'}]}>
					<Text> Reset </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading:{
		width:'80%',
		alignContent:'center',
		justifyContent:'center'
		
	},
	btncontainer:{
		flexDirection:'row',
		width:'80%',
		alignContent:'center',
		justifyContent:'space-evenly'
	},
	btn:{
		fontSize: 30,
		 backgroundColor: 'red',
		padding:10,  
	}
});

export default App;
