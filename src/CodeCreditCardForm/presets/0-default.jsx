import React from 'react';
import FormInput from '../../FormInput/FormInput';
import CodeCreditCardForm from '../CodeCreditCardForm';

export default (
  <CodeCreditCardForm uxpId="CodeCardForm1">
    <FormInput uxpId="CodeName1" type="name" />
    <FormInput uxpId="CodeName2" type="number" />
    <FormInput uxpId="CodeName3" type="expiry" />
    <FormInput uxpId="CodeName4" type="cvc" />
  </CodeCreditCardForm>
);
