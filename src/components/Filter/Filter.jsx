import { StyledInput, Styledlabel } from './Filter.styled';

export const Filter = ({ onFilter, filter }) => {
  return (
    <Styledlabel>
      Find contacts by name
      <StyledInput
        onChange={e => onFilter(e.currentTarget.value)}
        name="filter"
        placeholder="Filter..."
        value={filter}
      />
    </Styledlabel>
  );
};
