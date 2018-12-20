import React, { Component } from 'react';
import $ from 'jquery'
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
            arr1[i] =
                <tr>

                    <td >{this.state.ListBook ? this.state.ListBook[i]._id : "error"}</td>
                    <td>{this.state.ListBook ? this.state.ListBook[i].nameBook : "error"}</td>
                    <td >{this.state.ListBook ? this.state.ListBook[i].nameAuthor : "error"}</td>
                    <td >{this.state.ListBook ? this.state.ListBook[i].supplier : "error"}</td>
                    <td >{this.state.ListBook ? this.state.ListBook[i].priceImport : "error"}</td>
                    <td >{this.state.ListBook ? this.state.ListBook[i].priceImport : "error"}</td>
                    <td >{this.state.ListBook ? this.state.ListBook[i].priceExport : "error"}</td>
                    <td  >{this.state.ListBook ? this.state.ListBook[i].weight : "error"}</td>
                    <td  >{this.state.ListBook ? this.state.ListBook[i].pageOfBook : "error"}</td>
                    <td  >{this.state.ListBook ? this.state.ListBook[i].typeOfBook : "error"}</td>
                    <td  >{this.state.ListBook ? this.state.ListBook[i].publisher : "error"}</td>
                </tr>
        }
        return arr1;
    }


    render() {

        $(document).ready(function () {

            $("#search").keyup(function () {
                var searchText = $(this).val().toLowerCase();
                // Show only matching TR, hide rest of them
                $.each($("#table tbody tr"), function () {
                    if ($(this).text().toLowerCase().indexOf(searchText) === -1)
                        $(this).hide();
                    else
                        $(this).show();
                });
            });
        });


        return (

            <div>
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Sách trong kho của cửa hàng sách MLKM</CardHeader>

                <br /><br />
                <img className="img-search" src={'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'} />
                <input id="search" type="text" className="form-control" placeholder="Tìm kiếm tất cả..." />
                <Table striped id="table">
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
                    <tbody  >
                        {this.renderBook_Supplier()}
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
                <span className="sum-user"> Tổng các đầu sách trong kho:<p className='hihi' > {this.state.ListBook ? this.state.count : "err"}</p> </span>
            </div >
        );
    }
}
export default WareHouse;