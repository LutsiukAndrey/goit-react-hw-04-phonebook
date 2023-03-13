import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ContactList = ({ data, delateContact }) => {
  const onDeleteBtn = event => {
    delateContact(event.currentTarget.id);
  };

  if (data.length > 0) {
    return (
      <ul>
        {data.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              {name} : {number}
              <DeleteBtn id={id} type="button" onClick={onDeleteBtn}>
                delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
      </ul>
    );
  }
};

ContactList.propTypes = {
  delateContact: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const ContactItem = styled.li`
  margin-bottom: 20px;
`;
const DeleteBtn = styled.button`
  margin-left: 20px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 25px;
  background-color: burlywood;
`;
