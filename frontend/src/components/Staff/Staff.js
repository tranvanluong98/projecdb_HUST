import React, { Component, Fragment } from 'react';
import axios from 'axios';
import config from '../../config'

import { Table, CardHeader, Button } from 'reactstrap'
axios.defaults.withCredentials = true;
class Staff extends Component {
    constructor(props) {
        super(props);
    }
    state = {

        Staff: []
    }
    componentDidMount() {
        // get all Staff 
        axios.get(config.rootPath + "/api/Staff/all-Staff")
            .then(res => {
                if (res.data.FoundStaff) {
                    this.setState({
                        // Cập nhật data cho biến state Staff
                        Staff: res.data.FoundStaff
                    }, console.log('da set state'))
                    console.log(res.data, 'DATA Staff FROM BACKEND')
                    console.log('do dai cua array :', res.data.FoundStaff.length)
                   
                }
                else {
                    alert("Not Found")
                }

            })
            .catch(err => console.error(err));
        // get Staff byID


    }

    renderStaffID = () => {
        var arr1 = []
        for (let i = 0; i < this.state.Staff.length; i++) {
            arr1[i] = <tr><td>{this.state.Staff ? this.state.Staff[i]._id : "error"}</td></tr>
        }
        return arr1;
    }
    renderStaff_Name = () => {
        var arr1 = []
        for (let i = 0; i < this.state.Staff.length; i++) {
            arr1[i] = <tr><td>{this.state.Staff ? this.state.Staff[i].staff_Name : "error"}</td></tr>
        }
        return arr1;
    }
    renderStaff_NumberPhone = () => {
        var arr1 = []
        for (let i = 0; i < this.state.Staff.length; i++) {
            arr1[i] = <tr><td>{this.state.Staff ? this.state.Staff[i].staff_NumberPhone : "error"}</td></tr>
        }
        return arr1;
    }
    
    renderStaff_Address = () => {
        var arr1 = []
        for (let i = 0; i < this.state.Staff.length; i++) {
            arr1[i] = <tr><td>{this.state.Staff ? this.state.Staff[i].staff_Address : "error"}</td></tr>
        }
        return arr1;
    }
   
    renderStaff_Position = () => {
        var arr1 = []
        for (let i = 0; i < this.state.Staff.length; i++) {
            arr1[i] = <tr><td>{this.state.Staff ? this.state.Staff[i].staff_Position : "error"}</td></tr>
        }
        return arr1;
    }

    render() {


        return (

            <div>
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Danh sách Nhân Viên của cửa hàng sách MLKM</CardHeader>

                <br /><br />

                <Table striped>
                    <thead className="text-center">
                        <tr>
                            
                            <th>ID </th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Chức Vụ</th>
                            {/* <th>Ngày Sinh</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr> <td> dddddddddddddddd</td></tr> sẽ được data vào hết 1 cột*/}
                        <td className="text-center">

                            {this.renderStaffID()}
                        </td>
                        <td className="text-center">

                            {this.renderStaff_Name()}
                        </td>
                        <td className="text-center">

                            {this.renderStaff_NumberPhone()}
                        </td>
                        <td className="text-center">

                            {this.renderStaff_Address()}
                        </td>
                        <td className="text-center">

                            {this.renderStaff_Position()}
                        </td>
                        

                    </tbody>
                </Table>
                <div style={{ textAlign: 'center' }} >
                    <a href="/staff/new-staff">
                        <Button color="secondary" style={{ marginRight: '35px' }} >Nhân Viên Mới</Button>
                    </a>
                    {/* <a href="/Staffs/update" target="_blank">
                        <Button color="info" style={{ marginRight: '35px' }} title="Hãy Sao Chép ID Khách Hàng Cần Cập Nhật">Cập Nhật Thông Tin Khách Hàng</Button>
                    </a> */}
                    <a href="/staff/delete-staff">
                        <Button color="danger" style={{ marginRight: '35px' }} title="Bạn Hãy Sao Chép ID Nhân Viên Xin Nghỉ Việc">Dừng Hợp Đồng</Button>
                    </a>
                    <a href="/home">
                        <Button color="primary" style={{ marginRight: '35px' }} >Quay Lại Trang Chủ</Button>
                    </a>
                </div >
                <span> Tổng số khách hàng:<p className='hihi' > {this.state.Staff ? this.state.Staff.length : "err"}</p> </span>
            </div >
        );
    }
}

export default Staff;