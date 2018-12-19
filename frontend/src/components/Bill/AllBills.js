import React, { Component } from 'react';

import axios from 'axios'
import config from "../../config"
import { Link } from 'react-router-dom'
import { CardHeader, Table, Button } from 'reactstrap'
axios.defaults.withCredentials = true;
class AllBook extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 0,
        ListBill: []
    }
    componentDidMount() {
        // get all user 
        axios.get(config.rootPath + "/api/book/allbillbook")
            .then(res => {
                if (res.data.docs) {
                    this.setState({
                        // Cập nhật data cho biến state User
                        ListBill: res.data.docs, count: res.data.docs.length
                    }, console.log('da set state'))

                }
                else {
                    alert("Not Found")
                }

            })
            .catch(err => console.error(err));
        // get user byID


    }

    renderBill_ID = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBill.length; i++) {
            arr1[i] = <tr><td className="row-edit">{this.state.ListBill ? this.state.ListBill[i]._id : "error"}</td></tr>
        }
        return arr1;
    }
    renderBill_NameCustomer = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBill.length; i++) {
            arr1[i] = <tr><td >{this.state.ListBill ? this.state.ListBill[i].name : "error"}</td></tr>
        }
        return arr1;
    }

    renderBill_NameBook = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBill.length; i++) {
            arr1[i] = <tr><td >{this.state.ListBill ? this.state.ListBill[i].namebook : "error"}</td></tr>
        }
        return arr1;
    }


    renderBill_Number = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBill.length; i++) {
            arr1[i] = <tr><td >{this.state.ListBill ? this.state.ListBill[i].number : "error"}</td></tr>
        }
        return arr1;
    }

    render() {

        return (

            <div>
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Danh sách hóa đơn cửa hàng sách MLKM</CardHeader>
                {/* {this.props.ListBook[1].publisher} */}
                <br /><br />

                <Table striped>
                    <thead>
                        <tr>

                            <th>Mã Đơn Hàng</th>
                            <th>Khách Hàng</th>
                            <th >Tên Sách</th>
                            <th >Số Lượng<br />(Bản)</th>

                        </tr>
                    </thead>
                    <tbody  >
                        {/* <tr> <td> dddddddddddddddd</td></tr> sẽ được data vào hết 1 cột*/}
                        <td >

                            {this.renderBill_ID()}
                        </td>
                        <td >

                            {this.renderBill_NameCustomer()}
                        </td>
                        <td>

                            {this.renderBill_NameBook()}
                        </td>

                        <td >

                            {this.renderBill_Number()}
                        </td>

                    </tbody>
                </Table>
                <div style={{ textAlign: 'center' }} >
                    {/* <a href="/bill/new-bill">
                        <Button color="secondary" style={{ marginRight: '35px' }} >Tạo Hóa Đơn</Button>
                    </a> */}

                    <a href="/bill/delete" target="_blank">
                        <Button color="danger" style={{ marginRight: '35px' }} title="Bạn Hãy Sao Chép ID Hóa Đơn Bạn Muốn Xóa">Xóa Hóa Đơn</Button>
                    </a>
                    <a href="/home">
                        <Button color="primary" style={{ marginRight: '35px' }} >Quay Lại Trang Chủ</Button>
                    </a>
                </div >
                <span> Tổng hóa đơn trong kho: {this.state.ListBill ? this.state.count : "err"} </span>
                {/* <span> Tổng sach trong kho: {this.props.count} </span> */}
            </div >
        );
    }
}
export default AllBook;