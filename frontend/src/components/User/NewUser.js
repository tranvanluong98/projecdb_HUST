import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Table, CardHeader, Button, Input, Form, FormGroup, Label, Col, Alert } from 'reactstrap'
axios.defaults.withCredentials = true;
class NewUser extends Component {

    state = {
        user: {
            name: '',
            password: '',
            numberPhone: '',
            email: '',
            addressCustomer: '',
            sex: '',
            dateOfBirth: ''
        }
    }
    handleChange = (e) => {
        const preUser = this.state.user;
        console.log("id: " + e.target.id)
        if (e.target.id === '0') preUser.name = e.target.value
        if (e.target.id === '1') preUser.password = e.target.value
        if (e.target.id === '2') preUser.numberPhone = e.target.value
        if (e.target.id === '3') preUser.email = e.target.value
        if (e.target.id === '4') preUser.addressCustomer = e.target.value
        if (e.target.id === '5') preUser.sex = e.target.value
        if (e.target.id === '6') preUser.dateOfBirth = e.target.value

        this.setState({ user: preUser })
        console.log(this.state.user)
    }


    createNewUser = (e) => {
        e.preventDefault();
        console.log(this.state.user)
        axios.post(config.rootPath + '/api/user/create-user', this.state.user)
            .then(res => {
                console.log(res)
                alert('Tạo thành công rồi');
                window.location.href = '/users'
            })
            .catch(err => {
                console.log(err)
                alert('lỗi r');

            })
    }


    render() {
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label className="pos-col" for="textUser" sm={2}>Tên Khách Hàng</Label>
                        <Col sm={10}>
                            <Input type="text" className="input-edit" onChange={this.handleChange} id="0" placeholder='Bạn Hãy Nhập Tên Vào Đây' required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label className="pos-col" for="examplePassword" sm={2}>Mật Khẩu</Label>
                        <Col sm={10}>
                            <Input type="password" className="input-edit" onChange={this.handleChange} name="password" id="1" placeholder="Nhập Mật Khẩu Của Bạn Vào Đây" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label className="pos-col" for="textUser" sm={2}>Số Điện Thoại</Label>
                        <Col sm={10}>
                            <Input type="text" className="input-edit" onChange={this.handleChange} name="numberphone" id="2" placeholder="Bạn Hãy Nhập Số Điện Thoại Vào Đây" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label className="pos-col" for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" className="input-edit" onChange={this.handleChange} name="email" id="3" placeholder="Bạn Hãy Nhập Email Vào Đây" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label className="pos-col" for="textUser" sm={2}>Địa Chỉ</Label>
                        <Col sm={10}>
                            <Input type="text" className="input-edit" onChange={this.handleChange} name="address" id="4" placeholder="Bạn Hãy Nhập Địa Chỉ Vào Đây" required />
                        </Col>
                    </FormGroup>


                    {/* Chọn giới tính */}
                    <FormGroup row>
                        <Label className="pos-col" for="exampleSelect" sm={2}>Giới Tính</Label>
                        <Col sm={10}>
                            <Input type="select" className="input-edit" onChange={this.handleChange} name="select" id="5" >
                                <option></option>
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>LGBT</option>

                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label className="pos-col" for="textUser" sm={2}>Ngày Sinh</Label>
                        <Col sm={10}>
                            <Input type="text" className="input-edit" onChange={this.handleChange} name="dateOfBirth" id="6" placeholder="VD:15/01/1998" required />
                        </Col>
                    </FormGroup>
                </Form>



                <a href='/home' className="done-btn">
                    <Button > Trang Home </Button>
                </a>
                <a href="/users">
                    <Button onClick={this.createNewUser} className="done-btn" style={{ marginLeft: '120px' }} color="success" > Tạo Mới </Button>
                </a>
            </div >
        );
    }
}

export default NewUser;