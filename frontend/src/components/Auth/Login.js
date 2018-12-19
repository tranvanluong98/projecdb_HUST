import React, { Component } from 'react';
import axios from 'axios'
import config from "../../config"
import { Input, Button, Form, CardHeader } from 'reactstrap'
axios.defaults.withCredentials = true;
class Login extends Component {

    _onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })

    }

    _onChangePassWord = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state);
    }
    _onSubmit = (e) => {
        e.preventDefault()
        console.log("bbbbb");
        axios.post(config.rootPath + '/api/auth/login/', this.state)
            .then(res => {
                console.log(res.data)
                alert('Đăng nhập thành công')
                this.props.history.push('/home');
            })
            .catch(err => {
                alert('Đăng nhập thất bại')

            });
    }
    render() {
        return (
            <div>
                 <CardHeader className='header-card' > Đăng Nhập Database </CardHeader>
                <Form className='centered'>
                
                    <Input style={{ textAlign: "center", marginBottom: '10px' }} type="text" placeholder='Admin' onChange={this._onChangeUserName} />
                    <Input style={{ textAlign: "center", marginBottom: '10px' }} type="password" placeholder='Password' onChange={this._onChangePassWord} />
                    <Button style={{ width:'100%', textAlign: "center" }} color="primary" onClick={this._onSubmit} >Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;