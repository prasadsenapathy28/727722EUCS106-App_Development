import React from "react";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = e=> {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    alert(`Registered successfully`);
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name"/>
        <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
        <input type="password" name="password" value={state.password} onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
