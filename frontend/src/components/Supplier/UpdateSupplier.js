import React, { Component } from 'react';
import config from '../../config'
import axios from 'axios'
import { Table, CardHeader, Button, Input, Form, FormGroup, Label, Col, Alert } from 'reactstrap'
class UpdateSupplier extends Component {
    state = {

        idSupplier: '',
        supplier: {
            nameSupplier: '',
            addressSupplier: '',
            numberPhone: '',
            email: ''
        }

    }

    getIDSupplier = (e) => {
        let preID = this.state;
        if (e.target.id === '7') preID.idSupplier = e.target.value
        this.setState({ idSupplier: preID })
        console.log(this.state.idSupplier, 'ffffff')
        const tempID = this.state.idSupplier;


        if (this.state.idSupplier !== '') {

            axios.get(config.rootPath + `/api/supplier/${tempID}`)
                .then(res => {
                    this.setState({ supplier: res.data.FoundSupplier })
                })
                .catch(err => err)
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

    updateSupplier = () => {

        let tempID = this.state.supplier._id;
        console.log('got ID:', tempID)

        axios.put(config.rootPath + `/api/supplier/update-supplier/${tempID}`, this.state.supplier)
            .then(res => console.log(res))
            .catch(err => { console.log(err) })

    }

    render() {
        return (
            <div>
                <input type="text" id='7' className="input-newuser" placeholder="Dán ID Nhà Cung Cấp Cần Cập Nhật Vào Đây" onChange={this.getIDSupplier} />
                <Form>
                    <FormGroup row>
                        <Label for="textUser" sm={2}>Name</Label>
                        <Col sm={10}>
                            <input type="text" onChange={this.handleChange} name="name" id="0" disabled value={this.state.supplier.nameSupplier} />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Địa Chỉ</Label>
                        <Col sm={10}>
                            <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} name="password" id="1" value={this.state.supplier.addressSupplier} required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Số Điện Thoại</Label>
                        <Col sm={10}>
                            <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} name="password" id="2" value={this.state.supplier.numberPhone} required />
                        </Col>
                    </FormGroup>



                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input style={{ width: '50%' }} type="email" onChange={this.handleChange} name="email" id="3" value={this.state.supplier.email} required />
                        </Col>
                    </FormGroup>
                </Form>
                <a href="/suppliers">
                    <Button onClick={this.updateSupplier()} style={{ top: '50%' }} className="done-btn"> Cập Nhật</Button>
                </a>
            </div>
        );
    }

}

export default UpdateSupplier;