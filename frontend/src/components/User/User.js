import React, { Component, Fragment } from 'react';
import axios from 'axios';
import config from '../../config'

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

    renderUserID = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i]._id : "error"}</td></tr>
        }
        return arr1;
    }
    renderUser_Name = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i].name : "error"}</td></tr>
        }
        return arr1;
    }
    renderUser_NumberPhone = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i].numberPhone : "error"}</td></tr>
        }
        return arr1;
    }
    renderUser_Email = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i].email : "error"}</td></tr>
        }
        return arr1;
    }
    renderUser_Address = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i].addressCustomer : "error"}</td></tr>
        }
        return arr1;
    }
    renderUser_DateOfBirth = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i].dateOfBirth : "error"}</td></tr>
        }
        return arr1;
    }
    renderUserSex = () => {
        var arr1 = []
        for (let i = 0; i < this.state.User.length; i++) {
            arr1[i] = <tr><td>{this.state.User ? this.state.User[i].sex : "error"}</td></tr>
        }
        return arr1;
    }

    render() {


        return (

            <div>
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Danh sách khách hàng của cửa hàng sách MLKM</CardHeader>

                <br /><br />

                <Table striped>
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
                        <td className="text-center">

                            {this.renderUserID()}
                        </td>
                        <td className="text-center">

                            {this.renderUser_Name()}
                        </td>
                        <td className="text-center">

                            {this.renderUser_NumberPhone()}
                        </td>
                        <td className="text-center">

                            {this.renderUser_Email()}
                        </td>
                        <td className="text-center">

                            {this.renderUser_Address()}
                        </td>
                        <td className="text-center">

                            {this.renderUserSex()}
                        </td>
                        <td className="text-center">

                            {this.renderUser_DateOfBirth()}
                        </td>

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