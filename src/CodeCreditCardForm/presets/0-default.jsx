import React from 'react';
import NameInput from '../../NameInput/NameInput';
import ReactCreditCard from '../../ReactCreditCard/ReactCreditCard';
import CodeCreditCardForm from '../CodeCreditCardForm';

export default (
  <CodeCreditCardForm uxpId="CodeCardForm1">
    <ReactCreditCard uxpId="CodeCard1"></ReactCreditCard>
    <NameInput uxpId="CodeName1"></NameInput>
  </CodeCreditCardForm>
);
