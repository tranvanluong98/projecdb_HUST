import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Table, CardHeader, Button, Input, Form, FormGroup, Label, Col, Alert } from 'reactstrap'
axios.defaults.withCredentials = true;
class NewStaff extends Component {

    state = {
        staff: {
            staff_Name: '',
            staff_NumberPhone: '',
            staff_Address: '',
            staff_Position: ''
        }
    }
    handleChange = (e) => {
        const prestaff = this.state.staff;
        console.log("id: " + e.target.id)
        if (e.target.id === '0') prestaff.staff_Name = e.target.value
        if (e.target.id === '1') prestaff.staff_NumberPhone = e.target.value
        if (e.target.id === '2') prestaff.staff_Address = e.target.value
        if (e.target.id === '3') prestaff.staff_Position = e.target.value
        
        this.setState({ staff: prestaff })
        console.log(this.state.staff)
    }


    createNewStaff = (e) => {
        e.preventDefault();
        console.log(this.state.staff)
        axios.post(config.rootPath + '/api/staff/new-staff', this.state.staff)
            .then(res => {
                console.log(res)
                alert('Tạo thành công rồi');
                window.location.href = '/staff/all-staff'
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
                        <Label for="textstaff" sm={2}>Tên Nhân Viên</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={this.handleChange} id="0" placeholder='Bạn Hãy Nhập Tên Vào Đây' required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Số Điện Thoại</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={this.handleChange} name="password" id="1" placeholder="Nhập Số Điện Thoại Vào Đây" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="textstaff" sm={2}>Địa Chỉ</Label>
                        <Col sm={10}>
                            <Input type="text" onChange={this.handleChange} name="numberphone" id="2" placeholder="Bạn Hãy Nhập Địa Chỉ Vào Đây" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Vị Trí</Label>
                        <Col sm={10}>
                            <Input type="select" onChange={this.handleChange} name="email" id="3" placeholder="Bạn Hãy Nhập Vị Trí Nhân Viên Vào Đây" >
                                    <option> </option>
                                    <option>Nhân Viên </option>
                                    <option>Chăm Sóc Khách Hàng </option>
                                    <option> Tư Vấn Viên</option>
                                    <option>Marketing </option>
                                    <option>Lao Công </option>
                                    <option>Kế Toán </option>
                            </Input >
                        </Col>
                    </FormGroup>

                    
                </Form>

                <Button onClick={this.createNewStaff} color="success" > Xong </Button>

                <a href='/staff/all-staff'>
                    <Button > Trang Home </Button>
                </a>
            </div >
        );
    }
}

export default NewStaff;