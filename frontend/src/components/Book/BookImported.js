import React, { Component } from 'react';
import config from '../../config'
import axios from 'axios'
import { Table, CardHeader, Button, Input, Form, FormGroup, Label, Col, Alert } from 'reactstrap'
class BookImported extends Component {
    state = {
        amountImport1: 0,

        bookimported: {

            // idBook: "",
            priceImport: 0,
            priceExport: 0,
            amountImport: "",
            nameBook: "",
            nameAuthor: "",
            weight: 0,
            typeOfBook: "",
            pageOfBook: 0,
            publisher: ""
        }

    }

    getIDbookimported = (e) => {
        let preID = this.state;
        if (e.target.id === '69') preID.idbookimported = e.target.value
        this.setState({ idbookimported: preID })
        console.log(this.state.idbookimported, 'ffffff')
        const tempID = this.state.idbookimported;


        if (this.state.idbookimported !== '') {

            axios.get(config.rootPath + `/api/import-item/${tempID}`)
                .then(res => {
                    this.setState({ bookimported: res.data.BookFound })
                })
                .catch(err => err)
        }
    }

    handleChange = (e) => {
        const prebook = this.state.bookimported;
        const preAmount = this.state;
        console.log("id: " + e.target.id)
        //if (e.target.id === '0') prebook.idBook = e.target.value
        if (e.target.id === '1') prebook.nameBook = e.target.value
        if (e.target.id === '2') prebook.nameAuthor = e.target.value
        if (e.target.id === '3') prebook.supplier = e.target.value
        if (e.target.id === '4') prebook.priceImport = e.target.value
        if (e.target.id === '5') prebook.priceExport = e.target.value
        if (e.target.id === '6') prebook.amountImport = e.target.value
        if (e.target.id === '7') prebook.weight = e.target.value
        if (e.target.id === '8') prebook.pageOfBook = e.target.value
        if (e.target.id === '9') prebook.typeOfBook = e.target.value
        if (e.target.id === '10') prebook.publisher = e.target.value

        this.setState({ bookimported: prebook, amountImport1: parseInt(prebook.amountImport) })

        console.log(this.state.bookimported)
        console.log('gia tri amount lay o in put', this.state.amountImport1)
    }


    updatebookimported = (e) => {
        // let preAmount = this.state
        let tempID = this.state.bookimported._id;
        console.log('got ID:', tempID)

        axios.put(config.rootPath + `/api/import-item/update-bill-import/${tempID}`, this.state.bookimported)
            .then(res => console.log(res))
            .catch(err => { console.log(err) })

    }

    render() {
        return (
            <div>
                <input type="text" id='69' className="input-newuser" placeholder="Dán ID Sách Mới Nhập Vào Đây" onChange={this.getIDbookimported} />
                <Form>


                    <FormGroup row>
                        <Label sm={2}>Tên Sách</Label>
                        <Col sm={10}>
                            <Input type="text" disabled value={this.state.bookimported.nameBook} onChange={this.handleChange} name="password" id="1" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={2}>Tên Tác Giả</Label>
                        <Col sm={10}>
                            <Input type="text" disabled value={this.state.bookimported.nameAuthor} onChange={this.handleChange} name="numberphone" id="2" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Nhà Cung Cấp</Label>
                        <Col sm={10}>
                            <Input type="text" disabled value={this.state.bookimported.supplier} onChange={this.handleChange} name="email" id="3" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Giá Nhập</Label>
                        <Col sm={10}>
                            <Input type="number" value={this.state.bookimported.priceImport} onChange={this.handleChange} id="4" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={2}>Giá Bán</Label>
                        <Col sm={10}>
                            <Input type="number" value={this.state.bookimported.priceExport} onChange={this.handleChange} name="password" id="5" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={2}>Số Lượng</Label>
                        <Col sm={10}>
                            <Input type="text" value={this.state.bookimported.amountImport} onChange={this.handleChange} name="numberphone" id="6" required />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Khối Lượng</Label>
                        <Col sm={10}>
                            <Input type="number" disabled value={this.state.bookimported.weight} onChange={this.handleChange} name="email" id="7" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Số Trang</Label>
                        <Col sm={10}>
                            <Input type="number" disabled value={this.state.bookimported.pageOfBook} onChange={this.handleChange} id="8" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Loại Sách</Label>
                        <Col sm={10}>
                            <Input type="text" disabled value={this.state.bookimported.typeOfBook} onChange={this.handleChange} id="9" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Nhà Xuất Bản</Label>
                        <Col sm={10}>
                            <Input type="text" disabled value={this.state.bookimported.publisher} onChange={this.handleChange} id="10" required />
                        </Col>
                    </FormGroup>
                </Form>
                <a href="/books">
                <Button onClick={this.updatebookimported} style={{ top: '93%', left: '45%' }} className="done-btn"> Cập Nhật</Button>
                </a>
            </div>
        );
    }

}

export default BookImported;