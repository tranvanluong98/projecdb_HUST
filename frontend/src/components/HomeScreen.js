import React, { Component } from 'react';
import axios from 'axios'
import config from "../config"
import { Button } from 'reactstrap'
class HomeScreen extends Component {
    _onLogout = (e) => {
        axios.get(config.rootPath + '/api/auth/logout')
            .then((res) => {
                alert('log out thành công')
                this.props.history.push(`/`);
            })
    }
    render() {
        return (
            <div className="home">
                <h3 className="main">Trình Quản Lý Hệ Thống Bán Sách</h3>
                <div className="edit1">
                    <a href='/users'>
                        <Button color='silver' className="btn-freestyle">
                            Danh sách khách hàng</Button>
                    </a>
                    <a href='/books'>
                        <Button className="btn-freestyle" color='primary'>
                            Kho Sách</Button>
                    </a>
                    <a href='/suppliers' color='primary'>
                        <Button className="btn-freestyle">
                            Danh Sách Nhà Cung Cấp</Button>
                    </a>
                    <a href='/bill/all-bills'>
                        <Button className="btn-freestyle" color='info'>
                            Danh Sách Hóa Đơn</Button>
                    </a>
                    <a href='/staff/all-staff'>
                        <Button className="btn-freestyle" color='danger'>
                            Danh Sách Nhân Viên</Button>
                    </a>



                    <Button color="dark" onClick={this._onLogout} className="btn-freestyle logout">
                        Logout</Button>
                </div>
                <span className="admin-text"> Welcome,admin </span>

            </div>
        );
    }
}

export default HomeScreen;