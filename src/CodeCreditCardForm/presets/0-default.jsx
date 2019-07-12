import React from 'react';
import FormInput from '../../FormInput/FormInput';
import CodeCreditCardForm from '../CodeCreditCardForm';

export default (
  <CodeCreditCardForm uxpId="CodeCardForm1">
    <FormInput uxpId="CodeName1" type="name" />
    <FormInput uxpId="CodeName1" type="number" />
    <FormInput uxpId="CodeName1" type="expiry" />
    <FormInput uxpId="CodeName1" type="cvc" />
  </CodeCreditCardForm>
);
