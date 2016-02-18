'use strict';
var React =  require('react-native');
var SearchPage = require('./SearchPage');

class DemoFinderApp extends React.Component {
  render() {
  	return (
  		<React.NavigatorIOS
  			style={styles.container}
  			initialRoute={{
  				title:'Finder',
  				component:SearchPage
  			}}
  		/>
  	);
  }
}

class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello JSX .</React.Text>;
  }
}

const styles = React.StyleSheet.create({
  container: {
  	flex:1
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

React.AppRegistry.registerComponent("DemoFinder", () => DemoFinderApp);