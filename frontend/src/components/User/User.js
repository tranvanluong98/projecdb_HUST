import React, { Component, Fragment } from 'react';
import axios from 'axios';
import config from '../../config'
import $ from 'jquery'
import { Table, CardHeader, Button } from 'reactstrap'
axios.defaults.withCredentials = true;
class User extends Component {
    constructor(props) {
        super(props);
    }
    state = {

        User: []
    }
    componentDidMount() {
        // get all user 
        axios.get(config.rootPath + "/api/user/all-user")
            .then(res => {
                if (res.data.UserFound) {
                    this.setState({
                        // Cập nhật data cho biến state User
                        User: res.data.UserFound
                    }, console.log('da set state'))
                    console.log(res.data, 'DATA USER FROM BACKEND')
                    console.log('do dai cua array :', res.data.UserFound.length)
                    for (let i = 0; i < this.state.email.length; i++) {
                        console.log('email:', this.state.email[i].email)
                    }

                    console.log('type of UserFound', typeof res.data.UserFound)


                }
                else {
                    alert("Not Found")
                }

            })
            .catch(err => console.error(err));
        // get user byID


    }

    renderUser = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] =
                <tr>
                    <td>{this.state.User ? this.state.User[i]._id : "error"}</td>
                    <td>{this.state.User ? this.state.User[i].name : "error"}</td>
                    <td>{this.state.User ? this.state.User[i].numberPhone : "error"}</td>
                    <td>{this.state.User ? this.state.User[i].email : "error"}</td>
                    <td>{this.state.User ? this.state.User[i].addressCustomer : "error"}</td>
                    <td>{this.state.User ? this.state.User[i].sex : "error"}</td>
                    <td>{this.state.User ? this.state.User[i].dateOfBirth : "error"}</td>
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
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Danh sách khách hàng của cửa hàng sách MLKM</CardHeader>

                <br /><br />
                <img className="img-search" src={'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'} />
                <input id="search" type="text" className="form-control" placeholder="Tìm kiếm tất cả..." />
                <Table striped id="table">
                    <thead className="text-center">
                        <tr>
                            {/* {this.renderUser(UserFound)} */}
                            {/* <th>#</th> */}
                            <th>ID Khách Hàng</th>
                            <th>Tên Khách Hàng</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Địa Chỉ</th>
                            <th>Giới tính</th>
                            <th>Ngày Sinh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> <td> dddddddddddddddd</td></tr> sẽ được data vào hết 1 cột*/}
                        {this.renderUser()}

                    </tbody>
                </Table>
                <div style={{ textAlign: 'center' }} >
                    <a href="/users/create-new-user">
                        <Button color="secondary" style={{ marginRight: '35px' }} >Thêm Khách Hàng</Button>
                    </a>
                    <a href="/users/update" target="_blank">
                        <Button color="info" style={{ marginRight: '35px' }} title="Hãy Sao Chép ID Khách Hàng Cần Cập Nhật">Cập Nhật Thông Tin Khách Hàng</Button>
                    </a>
                    <a href="/delete-user">
                        <Button color="danger" style={{ marginRight: '35px' }} title="Bạn Hãy Sao Chép ID Khách Hàng Bạn Muốn Xóa">Xóa Khách Hàng</Button>
                    </a>
                    <a href="/home">
                        <Button color="primary" style={{ marginRight: '35px' }} >Quay Lại Trang Chủ</Button>
                    </a>
                </div >
                <span className="sum-user"> Tổng số khách hàng: <p className='hihi' >{this.state.User ? this.state.User.length : "err"} </p></span>
            </div >
        );
    }
}

export default User;