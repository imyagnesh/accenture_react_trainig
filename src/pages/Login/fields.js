import FormikInput from '../../components/FormikInput';

const wait = (time) => new Promise((resolve) => setTimeout(resolve, 5000));

const checkMandatory = (value, fieldName) => (!value ? `${fieldName} is mandatory` : '');

const fields = [{
  name: 'username',
  value: '',
  label: 'Username',
  component: FormikInput,
  validate: (value) => checkMandatory(value, 'Username'),
},
{
  name: 'password',
  value: '',
  label: 'Password',
  component: FormikInput,
  validate: (value) => checkMandatory(value, 'Password'),
}];

export default fields;
