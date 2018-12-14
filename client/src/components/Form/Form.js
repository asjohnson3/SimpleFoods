import React from "react";
import "./Form.css";
import { Container, Row, Col } from 'reactstrap';

const Form = props => (
  <form>
    <Container>
    <label htmlFor="Query">
        <strong>Ingredients</strong>
      </label>
      <Row>
        <Col>
        <div className="form-group">
      <input
        className="form-control"
        id="Title"
        type="text"
        value={props.q}
        placeholder="Chicken"
        name="q"
        onChange={props.handleInputChange}
        required
      />
    </div>
        </Col>
        <Col xs="auto" className="searchCol">
        <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-md btn-success float-right"
      >
        Search
      </button>
    </div>
        </Col>
      </Row>
    </Container>



  </form>
);

export default Form;
