Register = React.createClass({
  register(e){
    e.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();

    Accounts.createUser({
      email: email,
      password: password
    });

    FlowRouter.go('/');
  },
  render() {
    return (
      <div className="col-xs-12 col-sm-6">
        <h1>Register for NinjaTracker</h1>
        <form id="register-form" action="#" onSubmit={this.register}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="fo
    rm-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" clas sName="form-control"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
});
