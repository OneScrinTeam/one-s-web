import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password:'',
            hasAgreed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
       
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log('the form was submitted');
        console.log(this.state)

        // axios.post(url)
    } 

    render() {
        return (
            <div className="FormCenter">
                  <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                      <label htmlFor="name" className="FormField-Label">Full Name</label>
                      <input type="text" id="name" className="FormField-Input" placeholder="Enter your Fullname" name="name" onChange={this.handleChange} value={this.state.name}/>
                    </div>
                    <div className="FormField">
                      <label htmlFor="email" className="FormField-Label">Email</label>
                      <input type="text" id="email" className="FormField-Input" placeholder="Enter your Email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="FormField">
                      <label htmlFor="password" className="FormField-Label">Password</label>
                      <input type="password" id="password" className="FormField-Input" placeholder="***********" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>

                    <div className="FormField">
                      <label htmlFor="" className="FormField-CheckboxLabel">
                      <input type="checkbox" className="FormField-Checkbox" name="hasAgreed" onChange={this.handleChange} value={this.state.hasAgreed}/> I agree to <Link to="/" className="FormField-TermsLink">Terms & condition</Link>
                      </label>
                    </div>
                    

                    <div className="FormField">
                      <button className="FormField-Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField-Link">Already a member</Link>
                    </div>
                  </form>
                </div>
        )
    }
}

export default SignUp
