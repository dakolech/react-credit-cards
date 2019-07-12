import React from 'react';
import FormInput from '../../FormInput/FormInput';
import SubmitButton from '../../SubmitButton/SubmitButton';
import CodeCreditCardForm from '../CodeCreditCardForm';

export default (
  <CodeCreditCardForm uxpId="CodeCardForm1" sumbitButton={<SubmitButton uxpId="CodeSubmit1" text="Pay" className="btn btn-primary btn-block" />}>
    <FormInput uxpId="CodeName1" type="name" />
    <FormInput uxpId="CodeName2" type="number" />
    <FormInput uxpId="CodeName3" type="expiry" />
    <FormInput uxpId="CodeName4" type="cvc" />
  </CodeCreditCardForm>
);
