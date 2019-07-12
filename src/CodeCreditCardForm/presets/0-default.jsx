import React from 'react';
import FormInput from '../../FormInput/FormInput';
import Row from '../../Row/Row';
import SubmitButton from '../../SubmitButton/SubmitButton';
import CodeCreditCardForm from '../CodeCreditCardForm';

export default (
  <CodeCreditCardForm uxpId="CodeCardForm1" sumbitButton={<SubmitButton uxpId="CodeSubmit1" text="Pay" className="btn btn-primary btn-block" />}>
    <Row uxpId="CodeRow1">
      <FormInput uxpId="CodeName1" type="name" />
    </Row>
    <Row uxpId="CodeRow2">
      <FormInput uxpId="CodeName2" type="number" />
    </Row>
    <Row uxpId="CodeRow3">
      <FormInput uxpId="CodeName3" type="expiry" className="col-6" />
      <FormInput uxpId="CodeName4" type="cvc" className="col-6" />
    </Row>
  </CodeCreditCardForm>
);
