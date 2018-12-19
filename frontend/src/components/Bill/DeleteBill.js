import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Input, Button } from 'reactstrap'
class DeleteBill extends Component {
    state = {
        idBook: {}

    }
    getID = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idBook = e.target.value
        }
        this.setState({ idBook: preID })
        console.log('id lấy đc để xóa là', this.state.idBook)
        // console.log(`vcllll${this.state.idBook}`)
    }
    handleDeleteBill = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idBook = e.target.value
        }
        this.setState({ idBook: preID })
        console.log('id lấy đc để xóa là', this.state.idBook)
        var tempID2 = this.state.idBook.idBook
        axios.delete(config.rootPath + `/api/book/delete-bill/${tempID2}`)
            .then(res => alert(`Đã xóa Đơn Hàng thành công, ID Đơn Hàng : ${tempID2}`))
        // .catch(err => alert(err))
    }

    render() {

        return (
            <div>
                <Input type="text" id='0' onChange={this.getID} placeholder="Nhập ID Đơn Hàng Bạn Muốn Xóa Vào Đây..." />
                <a href="/bill/all-bills">
                    <Button color="danger" onClick={this.handleDeleteBill} > Hủy Đơn</Button>
                </a>
                <a href="/home">
                    <Button color="primary"  >Trang Chủ</Button>
                </a>
            </div>
        );
    }
}

export default DeleteBill;