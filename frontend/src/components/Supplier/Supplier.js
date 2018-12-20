import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery'
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

    renderSupplier = () => {
        var arr1 = []

        for (let i = 0; i < this.state.Supplier.length; i++) {

            console.log('name supplier', this.state.Supplier[i].nameSupplier)

            arr1[i] = <tr>
                <td>{this.state.Supplier ? this.state.Supplier[i]._id : "error"}</td>
                <td>{this.state.Supplier ? this.state.Supplier[i].nameSupplier : "error"}</td>
                <td>{this.state.Supplier ? this.state.Supplier[i].addressSupplier : "error"}</td>
                <td>{this.state.Supplier ? this.state.Supplier[i].numberPhone : "error"}</td>
                <td>{this.state.Supplier ? this.state.Supplier[i].email : "error"}</td>
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

            < div >

                < CardHeader className="text-center" style={{ fontWeight: 'bold', fontSize: '35px' }}> Danh Sách Các Nhà Cung Cấp Sách Cho Cửa Hàng</CardHeader >

                <br /><br />
                <img className="img-search" src={'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'} />
                <input id="search" type="text" className="form-control" placeholder="Tìm kiếm tất cả..." />
                <Table striped id="table">
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
                        {this.renderSupplier()}

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
                <span className="sum-user"> Tổng số nhà cung cấp:<p className='hihi' > {this.state.Supplier ? this.state.Supplier.length : "err"} </p> </span>
            </div >

        );

    }
}

export default Supplier;