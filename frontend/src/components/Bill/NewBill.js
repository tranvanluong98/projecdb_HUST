import React, { Component } from 'react';
import axios from 'axios'
import config from "../../config"
import { Form, FormGroup, Input, Label, Col, Button } from 'reactstrap'
class NewBill extends Component {
    state = {
        book: {


            name: "",
            number: 0,
            nameBook: "",



        }
    }

    handleChange = (e) => {
        const prebook = this.state.book;
        console.log("id: " + e.target.id)
        // if (e.target.id === '0') prebook.idBook = e.target.value
        if (e.target.id === '1') prebook.name = e.target.value
        if (e.target.id === '2') prebook.nameBook = e.target.value
        if (e.target.id === '3') prebook.number = parseInt(e.target.value)


        this.setState({ book: prebook })
        console.log(this.state.book)
    }


    createNewBook = (e) => {
        //  e.preventDefault();
        console.log(this.state.book)
        axios.post(config.rootPath + '/api/book/buy-book', this.state.book)
            .then(res => {
                console.log(res)
                alert('Tạo thành công rồi');
               // window.location.href = '/books'
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
            <div>


                <FormGroup row>
                    <Label sm={2}>Nhập Tên Người Mua</Label>
                    <Col sm={10}>
                        <Input type="text" onChange={this.handleChange} name="password" id="1" placeholder="Nhập Tên Người Mua Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label sm={2}>Tên Sách</Label>
                    <Col sm={10}>
                        <Input type="text" onChange={this.handleChange} name="numberphone" id="2" placeholder=" Nhập Tên Sách Vào Đây" required />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Số lượng</Label>
                    <Col sm={10}>
                        <Input type="number" value={this.state.book.number} onChange={this.handleChange} name="email" id="3" placeholder="Nhập Số Lượng Vào Đây" required />
                    </Col>
                </FormGroup>


                {/* <a href="/bill/all-bills"> */}
                <Button onClick={this.createNewBook} color="success" > Xong </Button>
                {/* </a> */}
                <a href='/home'>
                    <Button > Trang Home </Button>
                </a>
            </div>
        );
    }
}

export default NewBill;