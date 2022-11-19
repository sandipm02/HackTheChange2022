class HomePage extends React.Component {
    constructor(props) {
      this.state = {
        renderSplashscreen: true
      };
    }
  
    apiCallback(data) {
      // After getting the API response from server
      this.setState({renderSplashscreen: false});
    }
  
    render() {
      let view;
  
      if(this.state.renderSplashscreen)
        return <SplashScreen/>;
      else
        return <OtherComponent/>
    }
}