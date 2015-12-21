App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return {
      loggedIn: !!Meteor.user()
    };
  },
  showLayout(){
    if(this.props.content.props.name === 'Request' || this.props.content.props.name === 'Register'){
      return (
        <div className="col-xs-12 col-sm-6 col-sm-offset-3 text-center">
          {this.props.content}
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-xs-3">
            {this.props.nav}
          </div>
          <div className="col-xs-9">
            {this.props.content}
          </div>
        </div>
      );
    }
  },
  showLogin(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <p>You must be logged in to do that.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-xs-offset-3">
            <Login />
          </div>
        </div>
      </div>
    );
  },
  allowedLayout(){
    let allowedLayouts = ['Request', 'Login', 'Register'];
    let layoutAllowed = false;
    if($.inArray(this.props.content.props.name, allowedLayouts) > -1 || this.data.loggedIn){
      layoutAllowed = true;
    }
    return layoutAllowed;
  },
  render(){
    return (
      <div className="container-fluid main-container">
        { this.allowedLayout() ? this.showLayout() : this.showLogin() }
      </div>
    );
  }
});
