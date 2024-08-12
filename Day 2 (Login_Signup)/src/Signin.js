import React from "react";


function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    alert(`Login successfull`);
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange}/>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );

}
export default SignInForm;