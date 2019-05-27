import styled from 'styled-components';

const SearchForm = styled.form`
display: initial;
`;
const SearchFormContainer = styled.div`
border: solid #ebebeb;
border-radius: 5px;
border-width: thin;
`;
const InputStyle = styled.input`
border: none;
background-color: transparent;
font-size: var(--font-form-element-small-font-size, 14px);
line-height: var(--font-form-element-small-line-height, 22px);
letter-spacing: var(--font-form-element-small-letter-spacing, normal);
font-family: var(--font-form-element-small-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif);
text-transform: var(--font-form-element-small-text-transform, undefined);
color: #484848;
padding-top: var(--spacing-form-element-small-vertical, 6px);
padding-bottom: var(--spacing-form-element-small-vertical, 6px);
font-weight: var(--font-book-font-weight, 600);
padding-left: var(--spacing-form-element-small-horizontal, 7px);
padding-right: var(--spacing-form-element-small-horizontal, 7px);
display: inline-flex;
`;
export {
  SearchForm,
  SearchFormContainer,
  InputStyle,
};
