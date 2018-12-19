import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Input } from 'reactstrap'
class DeleteUser extends Component {
    state = {
        idUser: {}

    }
    getID = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idUser = e.target.value
        }
        this.setState({ idUser: preID })
        console.log('id lấy đc để xóa là', this.state.idUser)
        // console.log(`vcllll${this.state.idUser}`)
    }
    handleDeleteCustomer = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idUser = e.target.value
        }
        this.setState({ idUser: preID })
        console.log('id lấy đc để xóa là', this.state.idUser)
        var tempID2 = this.state.idUser.idUser
        axios.delete(config.rootPath + `/api/user/delete-user/${tempID2}`)
            .then(res => alert(`Đã xóa User thành công, ID User : ${tempID2}`))
        // .catch(err => alert(err))
    }

    render() {

        return (
            <div>
                <Input type="text" id='0' onChange={this.getID} placeholder="Nhập ID Khách Hàng Bạn Muốn Xóa Vào Đây..." />
                <a href="/users">
                    <button onClick={this.handleDeleteCustomer} > Xóa User</button>
                </a>
            </div>
        );
    }
}

export default DeleteUser;