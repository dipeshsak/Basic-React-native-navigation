import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { render } from 'react-dom';


export default class Follow extends React.Component {
    render(){
        // console.log("**********from home.js*****",this.props.navigation.state.params.followRequest)
        const following=this.props.navigation.getParam("followRequest","0")
        const doFollow=this.props.navigation.getParam("doFollow","")
        console.log("**********get params*****",following)
  return (
    <View style={styles.container}>
      <Text>Follow Screen</Text>

      {
          following.map( (frn,index)=>
          (
              <Button  title={`Follow ${frn}`}
              onPress={()=>{
                  doFollow(index)
              }}
              />
          )
          )
      }
      <Button 
      title="Click Me for home screen"
      onPress={()=>{
          this.props.navigation.navigate("Home")
      }}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
