import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Message = styled.div`
  margin-top: 0.5em;
  max-height: 0;
  transition: max-height 0.5s;

  @media (prefers-reduced-motion: reduce) {
    .animation {
      transition: none;
    }
  }

  ${({ displayMe }) =>
    displayMe &&
    `
    max-height: 80px;
  `}
`;

Message.displayName = "Message";

Message.propTypes = {
  displayMe: PropTypes.bool
};

Message.defaultProps = {
  displayMe: false
};

const MessageText = styled.div`
  color: red;
  font-size: 0.875em;
  line-height: 1.5;
  font-weight: 700;
`;

MessageText.displayName = "MessageText";

const ErrorMessage = ({ error, id }) => {
  return (
    <Message displayMe={error ? true : false}>
      <MessageText id={`error-${id}`} aria-live="polite">
        {error}
      </MessageText>
    </Message>
  );
};

ErrorMessage.displayName = "ErrorMessage";

ErrorMessage.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired
};

ErrorMessage.defaultProps = {
  error: ""
};

export default ErrorMessage;
