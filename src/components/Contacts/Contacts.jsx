import {
  StyledButton,
  StyledItem,
  StyledList,
  StyledText,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <StyledText>
              {name}: {number}
            </StyledText>
            <StyledButton onClick={() => onDelete(id)}>Delete</StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
