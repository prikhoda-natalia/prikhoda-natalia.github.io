import React, { useState } from 'react';
import PropTypes from 'prop-types';

import messages from './messages';
import s from './Form.module.scss';

const Form = ({ children }) => {
  const [status, setStatus] = useState(false);

  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <React.Fragment>
      {!status && (
        <form
          action="https://formspree.io/mayyqzld"
          className={s.this}
          method="POST"
          onSubmit={submitForm}
        >
          {children}
        </form>
      )}
      {status === 'SUCCESS' && <p>{messages.success}</p>}
      {status === 'ERROR' && <p>{messages.error}</p>}
    </React.Fragment>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired
};

export { default as Form_ActionsGroup } from './atoms/_ActionsGroup';
export { default as Form_Intro } from './atoms/_Intro';
export { default as Form_FieldsGroup } from './atoms/_FieldsGroup';
export default Form;
