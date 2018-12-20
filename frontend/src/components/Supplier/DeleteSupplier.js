import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config'

import { Input, Button } from 'reactstrap'
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
                <Input type="text" id='0' onChange={this.getID} style={{ marginTop: '20px', marginLeft: '20%', textAlign: 'center', width: '50%' }} placeholder="Nhập ID Nhà Cung Cấp Bạn Muốn Xóa Vào Đây..." />
                <a href="/suppliers">
                    <Button color="danger" className="update-user" onClick={this.handleDeleteCustomer} > Xóa Supplier</Button>
                </a>
            </div>
        );
    }
}

export default DeleteSupplier;