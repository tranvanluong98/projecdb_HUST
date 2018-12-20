import React, { Component, Fragment } from 'react';
import axios from 'axios';
import config from '../../config'
import $ from 'jquery'
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
        axios.get(config.rootPath + "/api/staff/all-staff")
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


    renderStaff = () => {
        var arr1 = []
        for (let i = 0; i < this.state.Staff.length; i++) {
            arr1[i] =
                <tr>
                    <td>{this.state.Staff ? this.state.Staff[i]._id : "error"}</td>
                    <td>{this.state.Staff ? this.state.Staff[i].staff_Name : "error"}</td>
                    <td>{this.state.Staff ? this.state.Staff[i].staff_NumberPhone : "error"}</td>
                    <td>{this.state.Staff ? this.state.Staff[i].staff_Address : "error"}</td>
                    <td>{this.state.Staff ? this.state.Staff[i].staff_Position : "error"}</td>
                </tr>
            console.log(arr1)
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
                <CardHeader className='text-center' style={{ fontWeight: 'bold', fontSize: '35px' }}>Danh sách Nhân Viên của cửa hàng sách MLKM</CardHeader>

                <br /><br />

                <input id="search" type="text" className="form-control" placeholder="Tìm kiếm tất cả..." />
                <img className="img-search" src={'https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png'} />
                <Table striped id="table">
                    <thead>
                        <tr>

                            <th >ID </th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Chức Vụ</th>

                        </tr>
                    </thead>
                    <tbody id="table">
                        {this.renderStaff()}
                    </tbody>
                </Table>
                {/* <tr> <td> dddddddddddddddd</td></tr> sẽ được data vào hết 1 cột*/}
                <div style={{ textAlign: 'center' }} >
                    <a href="/staff/new-staff">
                        <Button color="secondary" style={{ marginRight: '35px' }} >Nhân Viên Mới</Button>
                    </a>

                    <a href="/staff/delete-staff">
                        <Button color="danger" style={{ marginRight: '35px' }} title="Bạn Hãy Sao Chép ID Nhân Viên Xin Nghỉ Việc">Dừng Hợp Đồng</Button>
                    </a>
                    <a href="/home">
                        <Button color="primary" style={{ marginRight: '35px' }} >Quay Lại Trang Chủ</Button>
                    </a>
                </div >
                <span className="sum-user"> Tổng số nhân viên:<p className='hihi' > {this.state.Staff ? this.state.Staff.length : "err"}</p> </span>
            </div >
        );
    }
}

export default Staff;