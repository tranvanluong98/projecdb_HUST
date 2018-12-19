import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Input } from 'reactstrap'
class DeleteSupplier extends Component {
    state = {
        idSupplier: {}

    }
    getID = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idSupplier = e.target.value
        }
        this.setState({ idSupplier: preID })
        console.log('id lấy đc để xóa là', this.state.idSupplier)
        // console.log(`vcllll${this.state.idSupplier}`)
    }
    handleDeleteCustomer = (e) => {
        let preID = this.state
        if (e.target.id === '0') {
            preID.idSupplier = e.target.value
        }
        this.setState({ idSupplier: preID })
        console.log('id lấy đc để xóa là', this.state.idSupplier)
        var tempID2 = this.state.idSupplier.idSupplier
        axios.delete(config.rootPath + `/api/supplier/delete-supplier/${tempID2}`)
            .then(res => alert(`Đã xóa User thành công, ID User : ${tempID2}`))
        // .catch(err => alert(err))
    }

    render() {

        return (
            <div>
                <Input type="text" id='0' onChange={this.getID} placeholder="Nhập ID Nhà Cung Cấp Bạn Muốn Xóa Vào Đây..." />
                <a href="/suppliers">
                    <button onClick={this.handleDeleteCustomer} > Xóa Supplier</button>
                </a>
            </div>
        );
    }
}

export default DeleteSupplier;