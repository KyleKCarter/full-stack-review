import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateState, resetFields, registerUser, loginUser} from '../redux/reducers/authReducer'

class Authentication extends Component {
    
    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value})
    }

    handleClickRegister = () => {
        this.props.registerUser(this.props.username, this.props.password, this.props.profile_img).then(() => {
            this.props.loginUser(this.props.username, this.props.password)
        }).catch(error => {
            console.log(error)
        })
    }

    handleClickLogin = () => {
        this.props.loginUser(this.props.username, this.props.password).then(() => {
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <section>
                    <h1>Login</h1>
                    <div>
                        <p>Username:</p>
                        <input type="text" name='username' onChange={this.handleChange}/>
                        <p>Password:</p>
                        <input type="password" name='password' onChange={this.handleChange}/>
                    </div>
                    <Link to='/home'><button onClick={this.handleClickLogin}>Login</button></Link>
                </section>
                <section>
                    <h1>Register</h1>
                    <div>
                        <p>Username:</p>
                        <input type="text" name="username" onChange={this.handleChange}/>
                        <p>Password:</p>
                        <input type="password" name='password' onChange={this.handleChange}/>
                        <p>Profile Image:</p>
                        <input type="text" name='profile_img' onChange={this.handleChange}/>
                    </div>
                    <Link to='/home'><button onClick={this.handleClickRegister}>Register</button></Link>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        profile_img: state.authReducer.profile_img
    }
}

export default connect(mapStateToProps, {
    updateState,
    resetFields,
    registerUser,
    loginUser
})(Authentication);