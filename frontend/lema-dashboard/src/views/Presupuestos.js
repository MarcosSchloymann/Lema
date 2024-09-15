import React from "react";
import './../components/Sidebar/sidebar.css'

// reactstrap components
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Presupuestos() {

  const handleInputChange = (e) => {
    const [file] = e.target.value ?? []
    console.log(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('To Do')
  }
  return (

    <>
      <div className="content">
        <Form className="presupuesto">
          <FormGroup className="formgroup">
            <Label for="exampleEmail">
              Cliente
            </Label>
            <Input
              onChange={handleInputChange}
              id="exampleEmail"
              name="file"
              placeholder="Cliente"
              type="text"
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <Label for="pedido">
              N° de Pedido
            </Label>
            <Input
              id="pedido"
              name="pedido"
              placeholder="Ingrese N° de Pedido"
              type="number"
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <Label for="productos">
              Productos
            </Label>
            <Input
              id="predocutos"
              name="productos"
              placeholder="productos"
            />
          </FormGroup>
          <FormGroup className="formgroup">
            <Label for="productos">
              Cantidad
            </Label>
            <Input
              id="cantidad"
              name="cantidad"
              placeholder="cantidad"
              type="number"
            />
          </FormGroup>
          <Button
            onSubmit={handleSubmit}
            color="success"
          >
            Presupuestar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Presupuestos;
