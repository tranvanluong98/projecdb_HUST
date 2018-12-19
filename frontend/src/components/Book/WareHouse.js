import React, { Component } from 'react';

import axios from 'axios'
import config from "../../config"
import { Link } from 'react-router-dom'
import { CardHeader, Table, Button } from 'reactstrap'

import AllBill from '../Bill/AllBills'
axios.defaults.withCredentials = true;
class WareHouse extends Component {

    state = {
        statusComponent: false,
        // count: [],
        count: 0,
        ListBook: []
    }
    componentDidMount() {
        // get all user 
        axios.get(config.rootPath + "/api/import-item/all-book-imported/")
            .then(res => {
                if (res.data.docs) {
                    this.setState({
                        // Cập nhật data cho biến state User
                        ListBook: res.data.docs, count: res.data.docs.length
                    }, console.log('da set state'))
                    console.log(res.data, 'DATA USER FROM BACKEND')
                    console.log('do dai cua array :', res.data.docs.length)
                    console.log('type of docs', typeof res.data.docs)
                }
                else {
                    alert("Not Found")
                }
            })
            .catch(err => console.error(err));
        // get user byID

    }

    renderBook_Supplier = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i].supplier : "error"}</td></tr>
        }
        return arr1;
    }
    renderBook_ID = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i]._id : "error"}</td></tr>
        }
        return arr1;
    }
    renderBook_PriceImport = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i].priceImport : "error"}</td></tr>
        }
        return arr1;
    }

    renderBook_PriceExport = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i].priceExport : "error"}</td></tr>
        }
        return arr1;
    }
    renderBook_Amount = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i].amountImport : "error"}</td></tr>
        }
        return arr1;
    }
    renderBook_NameBook = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i].nameBook : "error"}</td></tr>
        }
        return arr1;
    }
    renderUser_NameAuthor = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td style={{ padding: "-0.25rem" }}>{this.state.ListBook ? this.state.ListBook[i].nameAuthor : "error"}</td></tr>
        }
        return arr1;
    }
    renderWeight_Weight = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td>{this.state.ListBook ? this.state.ListBook[i].weight : "error"}</td></tr>
        }
        return arr1;
    }



    renderBook_TypeOfBook = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td>{this.state.ListBook ? this.state.ListBook[i].pageOfBook : "error"}</td></tr>
        }
        return arr1;
    }
    renderBook_PageOfBook = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td>{this.state.ListBook ? this.state.ListBook[i].typeOfBook : "error"}</td></tr>
        }
        return arr1;
    }
    renderBook_Publisher = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBook.length; i++) {
            arr1[i] = <tr><td>{this.state.ListBook ? this.state.ListBook[i].publisher : "error"}</td></tr>
        }
        return arr1;
    }

    render() {

        return (

            <div>
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Sách trong kho của cửa hàng sách MLKM</CardHeader>

                <br /><br />

                {/* {this.state.statusComponent  }
                {<AllBill ListBook={this.state.ListBook} />}
                {this.state.ListBook.length > 0 ? this.state.ListBook[1].publisher : 'err'} */}
                <Table striped>
                    <thead>
                        <tr>

                            <th>ID Sách</th>
                            <th className='text-center'>Tên Sách</th>
                            <th className='text-center'>Tác Giả</th>

                            <th>Nhà Cung Cấp</th>
                            <th>Giá Nhập<br />(VNĐ)</th>
                            <th>Giá Bán<br />(VNĐ)</th>
                            <th className='text-center'>Còn Sẵn<br />(Bản)</th>

                            <th className='text-center'>Khối Lượng<br />(g)</th>
                            <th>Số Trang</th>
                            <th>Thể Loại</th>

                            <th>Nhà Xuất Bản</th>
                        </tr>
                    </thead>
                    <tbody className="edit-table" >
                        {/* <tr> <td> dddddddddddddddd</td></tr> sẽ được data vào hết 1 cột*/}
                        <td >

                            {this.renderBook_ID()}
                        </td>
                        <td>

                            {this.renderBook_NameBook()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderUser_NameAuthor()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderBook_Supplier()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderBook_PriceImport()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderBook_PriceExport()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderBook_Amount()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderWeight_Weight()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderBook_TypeOfBook()}
                        </td>
                        <td style={{ padding: "-0.25rem" }} >

                            {this.renderBook_PageOfBook()}
                        </td>
                        <td style={{ padding: "-0.25rem" }}>

                            {this.renderBook_Publisher()}
                        </td>

                    </tbody>
                </Table>
                <div style={{ textAlign: 'center' }} >
                    <a href="/books/new-book">
                        <Button color="secondary" style={{ marginRight: '35px' }} >Thêm Sách Cho Kho</Button>
                    </a>
                    <a href="/books/imported" target="_blank">
                        <Button color="info" style={{ marginRight: '35px' }} title="Hãy Sao Chép ID Sách Cần Cập Nhật">Nhập Thêm Sách Trong Kho</Button>
                    </a>
                    <a href="/books/delete" target="_blank">
                        <Button color="danger" style={{ marginRight: '35px' }} title="Bạn Hãy Sao Chép ID Sách Bạn Muốn Ngừng Kinh Doanh">Ngừng Kinh Doanh</Button>
                    </a>
                    <a href="/home">
                        <Button color="primary" style={{ marginRight: '35px' }} >Quay Lại Trang Chủ</Button>
                    </a>
                </div >
                <span> Tổng các đầu sách trong kho: {this.state.ListBook ? this.state.count : "err"} </span>
            </div >
        );
    }
}
export default WareHouse;