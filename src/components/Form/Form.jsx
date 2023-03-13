import { nanoid } from 'nanoid';
import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  onHandleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value, id: nanoid() });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.onSubmit}>
          <FormSubTitle>Name</FormSubTitle>
          <FormInput
            onChange={this.onHandleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormSubTitle>Number</FormSubTitle>
          <FormInput
            value={this.state.number}
            onChange={this.onHandleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <div>
            <FormBtn type="submit">Add Contact</FormBtn>
          </div>
        </form>
      </FormContainer>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const FormContainer = styled.div`
  margin-bottom: 40px;
`;
const FormSubTitle = styled.p`
  margin-bottom: 30px;
`;
const FormInput = styled.input`
  width: 300px;
  padding: 10px 40px;
  border-radius: 20px;
  border: transparent;
  margin-bottom: 30px;
`;
const FormBtn = styled.button`
  border-radius: 20px;
  border: transparent;
  padding: 10px 25px;
  background-color: burlywood;
`;
