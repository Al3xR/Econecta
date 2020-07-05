import React from "react";
import axios from "axios";
import { BigBtnBlack, BigBtnColor2 } from "./btns";
import PageBanner from "./pageBanner";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        document.getElementById("goodResponse").html("Mensaje Enviado");
        console.log("good");
        this.resetForm();
      } else if (response.data.status === "fail") {
        document
          .getElementById("badResponse")
          .html("El mensaje no pudo ser enviado");
        console.log("bad");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="generalHolder contact">
        <PageBanner title="Contacto" />

        <div className="section1 container backCover backCenter">
          <div className="content layout-column heightFull layout-align-center-center padTop60 padBottom80">
            <h2 className="textCenter fontSizeXBig padBottom10">
              Tu opinion es importante para nosotros
            </h2>
            <p className="textCenter padBottom20 fontSizeMedium">
              Dejanos un mensaje y responderemos lo antes posible
            </p>

            <p
              id="goodResponse"
              className="goodResponse textCenter padBottom10"
            ></p>
            <p
              id="badResponse"
              className="badResponse color1 textCenter padBottom10"
            ></p>
            <form
              className="contactForm"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="inputHolder padBottom10 widthFull">
                <label htmlFor="name">
                  <p className="fontSizeMedium">Nombre</p>
                </label>
                <input
                  className=""
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
                <p className="badResponse textCenter color1"></p>
              </div>

              <div className="inputHolder padBottom10 widthFull">
                <label htmlFor="email">
                  <p className="fontSizeMedium">Correo</p>
                </label>
                <input
                  className=""
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
                <p className="badResponse textCenter color1"></p>
              </div>

              <div className="inputHolder padBottom10 widthFull">
                <label htmlFor="message">
                  <p className="fontSizeMedium">Mensaje</p>
                </label>
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                ></textarea>
                <p className="badResponse textCenter color1"></p>
              </div>

              <button type="submit" className="anim2 fontSizeRegular">
                <strong>Enviar</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
      //end general holder
    );
  }
}

export default Contact;
