import React, { Component } from 'react';
import config from '../../config'
import axios from 'axios'
import { Table, CardHeader, Button, Input, Form, FormGroup, Label, Col, Alert } from 'reactstrap'
import GetIDUser from './GetIDUser'
class UpdateUser extends Component {

    state = {

        idUser: '',
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
    componentDidMount() {

    }

    getIDUser = (e) => {
        let preID = this.state;
        if (e.target.id === '7') preID.idUser = e.target.value
        this.setState({ idUser: preID })
        console.log(this.state.idUser, 'ffffff  ')
        const tempID = this.state.idUser;


        if (this.state.idUser !== '') {
            // axios.get(config.rootPath + `/api/user/${tempID}`, this.state.user)

            axios.get(config.rootPath + `/api/user/${tempID}`)
                .then(res => {

                    this.setState({ user: res.data.UserFound, sex: res.data.UserFound.sex })

                })
                .catch(err => err)

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
        //  console.log(this.state.user)

    }
    updateUser = () => {

        let tempID = this.state.user._id;
        console.log('got ID:', tempID)

        axios.put(config.rootPath + `/api/user/update/${tempID}`, this.state.user)
            .then(res => console.log(res))
            .catch(err => { console.log(err) })

    }

    render() {
        return (
            <div>
                <input type="text" id='7' className="input-newuser" placeholder="Dán ID Khách Hàng Cần Cập Nhật Vào Đây" onChange={this.getIDUser} />

                <Form>
                    <FormGroup row>
                        <Label for="textUser" sm={2}>Name</Label>
                        <Col sm={10}>
                            <input type="text" onChange={this.handleChange} name="name" id="0" disabled value={this.state.user.name} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Mật Khẩu</Label>
                        <Col sm={10}>
                            <Input type="password" onChange={this.handleChange} name="password" id="1" value={this.state.user.password} required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="textUser" sm={2}>Số Điện Thoại</Label>
                        <Col sm={10}>
                            <input type="text" value={this.state.user.numberPhone} onChange={this.handleChange} name="numberphone" id="2" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" onChange={this.handleChange} name="email" id="3" value={this.state.user.email} required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="textUser" sm={2}>Địa Chỉ</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={this.handleChange} name="address" id="4" value={this.state.user.addressCustomer} required />
                        </Col>
                    </FormGroup>


                    {/* Chọn giới tính */}
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Giới Tính</Label>
                        <Col sm={10}>
                            <Input type="select" onChange={this.handleChange} name="select" id="5" required>
                                <option >{this.state.user.sex}</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>LGBT</option>

                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="textUser" sm={2}>Ngày Sinh</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={this.handleChange} name="dateOfBirth" id="6" value={this.state.user.dateOfBirth} required />
                        </Col>
                    </FormGroup>
                </Form>

                <a href="/users">
                    <Button onClick={this.updateUser()} className="done-btn2"> Cập Nhật</Button>
                </a>
            </div>
        );
    }
}

export default UpdateUser;