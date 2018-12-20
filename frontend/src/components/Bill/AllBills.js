import React, { Component } from 'react';
import $ from 'jquery'
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

    renderBill = () => {
        var arr1 = []
        for (let i = 0; i < this.state.ListBill.length; i++) {
            arr1[i] = <tr>
                <td >{this.state.ListBill ? this.state.ListBill[i]._id : "error"}</td>
                <td >{this.state.ListBill ? this.state.ListBill[i].name : "error"}</td>
                <td >{this.state.ListBill ? this.state.ListBill[i].namebook : "error"}</td>
                <td >{this.state.ListBill ? this.state.ListBill[i].number : "error"}</td>

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

                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Danh sách hóa đơn cửa hàng sách MLKM</CardHeader>
                {/* {this.props.ListBook[1].publisher} */}
                <br /><br />
                <img className="img-search" src={'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'} />
                <input id="search" type="text" className="form-control" placeholder="Tìm kiếm tất cả..." />
                <Table striped id="table">
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
                        {this.renderBill()}
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
                <span className="sum-user"> Tổng số lượng hóa đơn:<p className='hihi' > {this.state.ListBill ? this.state.count : "err"} </p> </span>
                {/* <span> Tổng sach trong kho: {this.props.count} </span> */}
            </div >
        );
    }
}
export default AllBook;