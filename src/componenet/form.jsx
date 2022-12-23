import React, { Component } from 'react'

class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        alert("melumat gonderildi") 
        location.reload(); 
    }
    clickInput1 = ()=>{
       const inputV1 = document.querySelector("#nameHelp");
       inputV1.className = "error" 
    }
    clickInput2 = ()=>{
        const inputV2 = document.querySelector("#numberHelp");
        inputV2.className = "error" 
     }
     clickInput3 = ()=>{
        const inputV3 = document.querySelector("#emailHelp");
        inputV3.className = "error" 
     }
     clickInput4 = ()=>{
        const inputV4 = document.querySelector("#textHelp");
        inputV4.className = "error" 
     }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Ad soyad və ata adı</label>
                            <input type="text" onChange={this.clickInput1}  className="form-control" id="formGroupExampleInput" />
                            <small id="nameHelp" className="form-text text-muted ">Ad və soyadınızı daxil edin</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Telefon nömrəsi</label>
                            <input type="phone" onChange={this.clickInput2}  className="form-control " id="formGroupExampleInput"  />
                            <small id="numberHelp" className="form-text text-muted">Telefon nömrəsini daxil edin </small>
                        </div>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={this.clickInput3}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                        <small id="emailHelp" className="form-text text-muted ">Elektron poçt adresinizi daxil edin:(mes:meselen@gmail.com)</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Geribildirimin mətni</label>
                        <textarea className="form-control" onChange={this.clickInput4}  id="exampleFormControlTextarea1" rows="3"></textarea>
                        <small id="textHelp" className="form-text text-muted ">Mətn sahəsini boş saxlamayın!</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Göndər</button>
                </form>
            </div>
        )
    }
}
export default Form