import React, { Component } from 'react';
import axios from 'axios'
import config from "../../config"
import { Form, FormGroup, Input, Label, Col, Button } from 'reactstrap'
class NewBook extends Component {
    state = {
        book: {
            supplier: "",
            // idBook: "",
            priceImport: 0,
            priceExport: 0,
            amountImport: 0,
            nameBook: "",
            nameAuthor: "",
            weight: 502,
            typeOfBook: "",
            pageOfBook: 0,
            publisher: ""
        }
    }

    handleChange = (e) => {
        const prebook = this.state.book;
        console.log("id: " + e.target.id)
        // if (e.target.id === '0') prebook.idBook = e.target.value
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


        this.setState({ book: prebook })
        console.log(this.state.book)
    }


    createNewBook = (e) => {
        e.preventDefault();
        console.log(this.state.book)
        axios.post(config.rootPath + '/api/import-item/create-bill-imported', this.state.book)
            .then(res => {
                console.log(res)
                alert('Tạo thành công rồi');
                window.location.href = '/books'
            })
            .catch(err => {
                console.log(err)
                alert('Error, Trùng Lặp Dữ Liệu');

            })
    }

    renderBookExist = (e) => {

    }

    render() {
        return (
            <div style={{width:'100%'}}>


                <FormGroup row>
                    <Label sm={2}>Tên Sách</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} name="password" id="1" placeholder="Nhập Tên Sách Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2}>Tên Tác Giả</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} name="numberphone" id="2" placeholder=" Nhập Tên Tác Giả Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Nhà Cung Cấp</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} name="email" id="3" placeholder="Nhập Nhà Cung Cấp Vào Đây" required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Giá Nhập (VNĐ)</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="number" onChange={this.handleChange} id="4" placeholder=' Nhập "Giá Nhập" Vào Đây' required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2}>Giá Bán (VNĐ)</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="number" onChange={this.handleChange} name="password" id="5" placeholder="Nhập 'Giá Bán' Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2}>Số Lượng (Quyển )</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="number" onChange={this.handleChange} name="numberphone" id="6" placeholder="Nhập Số Lượng Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Khối Lượng (g)</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="number" onChange={this.handleChange} name="email" id="7" placeholder="Nhập Khối Lượng Vào Đây" required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Số Trang</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="number" onChange={this.handleChange} id="8" placeholder=' Nhập Số Trang Vào Đây' required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Loại Sách</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} id="9" placeholder=' Nhập Thể Loại Sách Vào Đây' required />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Nhà Xuất Bản</Label>
                    <Col sm={10}>
                        <Input style={{ width: '50%' }} type="text" onChange={this.handleChange} id="10" placeholder=' Nhập Xuất Bản Vào Đây' required />
                    </Col>
                </FormGroup>

                <div className="new-book-btn">
                    <Button onClick={this.createNewBook} color="success" > Xong </Button>

                    <a href='/home'>
                        <Button style={{ marginLeft: '10px' }} > Trang Home </Button>
                    </a>
                </div>
            </div>
        );
    }
}

export default NewBook;