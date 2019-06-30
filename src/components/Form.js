import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Coin</label>
                    <select className="form-control">
                        <option value="" defaultValue disabled>Select your coin</option>
                        <option value="USD">Dollar</option>
                        <option value="MXN">Mexican peso</option>
                        <option value="GBP">Pound sterling</option>
                        <option value="EUR">Euro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>CryptoCoin</label>
                    <select className="form-control">

                    </select>
                </div>
                <div className="form-group">
                    <input type="submit" value="Assess" className="btn btn-primary"/>
                </div>
            </form>
        );
    }
}

export default Form;