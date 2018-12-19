import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Input } from 'reactstrap'
class DeleteStaff extends Component {
    state = {
        idStaff: {}

    }
    getID = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idStaff = e.target.value
        }
        this.setState({ idStaff: preID })
        console.log('id lấy đc để xóa là', this.state.idStaff)
        // console.log(`vcllll${this.state.idStaff}`)
    }
    handleDeleteStaff = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idStaff = e.target.value
        }
        this.setState({ idStaff: preID })
        console.log('id lấy đc để xóa là', this.state.idStaff)
        var tempID2 = this.state.idStaff.idStaff
        axios.delete(config.rootPath + `/api/staff/delete-staff/${tempID2}`)
            .then(res => alert(`Đã xóa Staff thành công, ID Staff : ${tempID2}`))
        // .catch(err => alert(err))
    }

    render() {

        return (
            <div>
                <Input type="text" id='0' onChange={this.getID} placeholder="Nhập ID Nhân Viên Bạn Muốn Dừng Hợp Đồng Vào Đây..." />
                <a href="/staff/all-staff">
                    <button onClick={this.handleDeleteStaff} >Dừng Hợp Đồng Nhân Viên</button>
                </a>
            </div>
        );
    }
}

export default DeleteStaff;