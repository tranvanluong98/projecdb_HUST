import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Input } from 'reactstrap'
class DeleteBook extends Component {
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
    handleDeleteBook = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idBook = e.target.value
        }
        this.setState({ idBook: preID })
        console.log('id lấy đc để xóa là', this.state.idBook)
        var tempID2 = this.state.idBook.idBook
        axios.delete(config.rootPath + `/api/import-item/delete-bill-imported/${tempID2}`)
            .then(res => alert(`Đã xóa Đầu sách thành công, ID Sách : ${tempID2}`))
        // .catch(err => alert(err))
    }

    render() {

        return (
            <div>
                <Input type="text" id='0' onChange={this.getID} placeholder="Nhập ID đầu sách Bạn Muốn Xóa Vào Đây..." />
                <a href="/books">
                    <button onClick={this.handleDeleteBook} > Ngừng Kinh Doanh</button>
                </a>
                <a href="/home">
                    <button  >Trang Chủ</button>
                </a>
            </div>
        );
    }
}

export default DeleteBook;