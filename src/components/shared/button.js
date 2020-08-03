import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const Button = ({
  disabled,
  label,
  type,
  to,
}) => (
  <>
    {label && to && (
      <StyledLink to={to}>
        {label}
      </StyledLink>
    )}
    {label && !to && (
      <StyledButton type={type} disabled={disabled}>
        {label}
      </StyledButton>
    )}
  </>
);

export default Button;

Button.defaultProps = {
  disabled: false,
  to: null,
  type: 'button',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

const sharedButtonStyles = css`
  display: inline-block;
  background-color: #fff;
  font-size: 1.25em;
  line-height: 1;
  font-weight: bold;
  color: ${(props) => props.theme.colours.nearlyBlack};
  padding: .5em 2em;
  margin: .5em 0;
  box-shadow: .25rem .25rem 0 rgba(0,0,0,1);
  transition: background-color .33s ease, color .33s ease, box-shadow .33s ease;
  &:hover {
    background-color: ${(props) => props.theme.colours.nearlyBlack};
    color: #fff;
    box-shadow: inset 0 0 0 1px #fff;
  }
`;

const StyledLink = styled(Link)`
  ${sharedButtonStyles}
  text-decoration: none;
`;

const StyledButton = styled.button`
  ${sharedButtonStyles}
  cursor: pointer;
  border: none;
`;
