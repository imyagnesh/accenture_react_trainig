import FormikInput from "../../components/FormikInput";

const checkMendetory = (value, fieldName) => (!value ? `${fieldName} is mendetory` : '');

const fields = [
{
  name: 'username',
  value: '',
  label: 'Username',
  component: FormikInput,
  validate: (value) => checkMendetory(value, 'Username'),
},
{
  name: 'password',
  value: '',
  label: 'Password',
  component: FormikInput,
  validate: (value) => checkMendetory(value, 'Password'),
}];

export default fields;
