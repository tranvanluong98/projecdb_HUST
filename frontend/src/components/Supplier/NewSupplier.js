import React, { Component } from 'react';
import axios from 'axios'
import config from "../../config"
import { Form, FormGroup, Input, Label, Col, Button } from 'reactstrap'
class NewSupplier extends Component {
    state = {
        supplier: {
            nameSupplier: '',
            addressSupplier: '',
            numberPhone: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const preSupplier = this.state.supplier;
        console.log("id: " + e.target.id)
        if (e.target.id === '0') preSupplier.nameSupplier = e.target.value
        if (e.target.id === '1') preSupplier.addressSupplier = e.target.value
        if (e.target.id === '2') preSupplier.numberPhone = e.target.value
        if (e.target.id === '3') preSupplier.email = e.target.value


        this.setState({ supplier: preSupplier })
        console.log(this.state.supplier)
    }


    createNewSupplier = (e) => {
        e.preventDefault();
        console.log(this.state.supplier)
        axios.post(config.rootPath + '/api/supplier/create-supplier', this.state.supplier)
            .then(res => {
                console.log(res)
                alert('Tạo thành công rồi');
                window.location.href = '/suppliers'
            })
            .catch(err => {
                console.log(err)
                alert('lỗi r');

            })
    }


    render() {
        return (
            <div>
                <FormGroup row>
                    <Label sm={2}>Tên Nhà Cung Cấp Mới</Label>
                    <Col sm={10}>
                        <Input type="text" onChange={this.handleChange} id="0" placeholder=' Nhập Tên Nhà Cung Cấp Vào Đây' required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2}>Mật Khẩu</Label>
                    <Col sm={10}>
                        <Input type="text" onChange={this.handleChange} name="password" id="1" placeholder="Nhập Địa Chỉ Của Bạn Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2}>Số Điện Thoại</Label>
                    <Col sm={10}>
                        <Input type="text" onChange={this.handleChange} name="numberphone" id="2" placeholder="Bạn Hãy Nhập Số Điện Thoại Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" onChange={this.handleChange} name="email" id="3" placeholder="Bạn Hãy Nhập Email Vào Đây" required />
                    </Col>
                </FormGroup>

                <Button onClick={this.createNewSupplier} className="done-btn" color="success" > Xong </Button>

                <a href='/home'>
                    <Button > Trang Home </Button>
                </a>
            </div>
        );
    }
}

export default NewSupplier;