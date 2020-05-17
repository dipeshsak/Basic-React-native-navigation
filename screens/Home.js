import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class Home extends React.Component{
    state={
        followRequest:["John","Jane","Ram","Joyce"],
        following:["Dipesh"]
    }

    doFollow=(index)=>{
        const {followRequest,following}=this.state;
        const followNew =followRequest.splice(index,1);
        following.push(followNew)
        this.setState({
            followRequest,
            following
        })
    }
    render(){
  return (
    <View style={styles.container}>
      <Text>Dipesh</Text>
      <Text>Followers:  {this.state.following.length}</Text>
      <Button 
      title="Click Me"
      onPress={()=>{
          this.props.navigation.navigate("Follow",
          {
              followRequest:this.state.followRequest,
              following:this.state.following,
              doFollow:this.doFollow
          })
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
