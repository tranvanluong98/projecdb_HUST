import React, { Component } from 'react';
import axios from 'axios'
import config from "../../config"
import { Link } from 'react-router-dom'
import { CardHeader, Table, Button } from 'reactstrap'
axios.defaults.withCredentials = true;
class Supplier extends Component {
    state = {
        Supplier: []


    }
    componentDidMount() {
        axios.get(config.rootPath + "/api/supplier/all-suppliers")
            .then(res => {
                console.log(res)
                this.setState({ Supplier: res.data.docs })
                console.log(this.state.Supplier[0].nameSupplier)

            })

    }

    renderSupplierID = () => {
        var arr1 = []

        for (let i = 0; i < this.state.Supplier.length; i++) {

            console.log('name supplier', this.state.Supplier[i].nameSupplier)

            arr1[i] = <tr><td>{this.state.Supplier ? this.state.Supplier[i]._id : "error"}</td></tr>

        }
        return arr1;
    }
    renderSupplierName = () => {
        var arr1 = []

        for (let i = 0; i < this.state.Supplier.length; i++) {
            arr1[i] = <tr><td>{this.state.Supplier ? this.state.Supplier[i].nameSupplier : "error"}</td></tr>

        }
        return arr1;
    }
    renderSupplierAddress = () => {
        var arr1 = []

        for (let i = 0; i < this.state.Supplier.length; i++) {

            arr1[i] = <tr><td>{this.state.Supplier ? this.state.Supplier[i].addressSupplier : "error"}</td></tr>

        }
        return arr1;
    }
    renderSupplierPhone = () => {
        var arr1 = []

        for (let i = 0; i < this.state.Supplier.length; i++) {

            arr1[i] = <tr><td>{this.state.Supplier ? this.state.Supplier[i].numberPhone : "error"}</td></tr>

        }
        return arr1;
    }
    renderSupplierPhoneEmail = () => {
        var arr1 = []

        for (let i = 0; i < this.state.Supplier.length; i++) {

            arr1[i] = <tr><td>{this.state.Supplier ? this.state.Supplier[i].email : "error"}</td></tr>

        }
        return arr1;
    }

    render() {

        return (

            < div >

                < CardHeader className="text-center"> Danh Sách Các Nhà Cung Cấp Sách Cho Cửa Hàng</CardHeader >


                <Table striped>
                    <thead className='text-center'>
                        <tr>
                            <th>Mã Nhà Cung Cấp</th>
                            <th>Nhà Cung Cấp</th>
                            <th>Địa Chỉ</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                        </tr>

                    </thead>
                    <tbody >
                        <td className="text-center">

                            {/* <tr> <td> dddddddddddddddd</td></tr> sẽ được data vào hết 1 cột*/}
                            {this.renderSupplierID()}

                        </td>
                        <td className="text-center">

                            {this.renderSupplierName()}


                        </td>
                        <td className="text-center">

                            {this.renderSupplierAddress()}


                        </td>
                        <td className="text-center">

                            {this.renderSupplierPhone()}


                        </td>
                        <td className="text-center">

                            {this.renderSupplierPhoneEmail()}


                        </td>



                    </tbody>

                </Table>


                <div style={{ textAlign: 'center' }} >
                    <Link to="/suppliers/new-supplier">
                        <Button color="secondary" style={{ marginRight: '35px' }}>Thêm Nhà Cung Cấp</Button>
                    </Link>
                    <a href="/suppliers/update" target="_blank">
                        <Button color="info" style={{ marginRight: '35px' }} title="Hãy Sao Chép ID Nhà Cung Cấp Cần Cập Nhật">Cập Nhật Thông Tin Nhà Cung Cấp</Button>
                    </a>
                    <a href="/suppliers/delete">
                        <Button color="danger" style={{ marginRight: '35px' }} title="Bạn Hãy Sao Chép ID Nhà Cung Cấp Bạn Muốn Xóa">Xóa Khách Hàng</Button>
                    </a>
                    <a href='/home'>
                        <Button > Trang Home </Button>
                    </a>
                </div >
                <span> Tổng số nhà cung cấp: {this.state.Supplier ? this.state.Supplier.length : "err"} </span>
            </div >

        );

    }
}

export default Supplier;