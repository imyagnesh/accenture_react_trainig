import FormikInput from "../../components/FormikInput";
import {checkMendetory} from '../Register/fields' 

const fields = [
    {
      name: "username",
      component: FormikInput,
      label: 'Username',
      value: '',
      validate: (value) => checkMendetory(value, 'Username')
    },
    {
      name: "password",
      component: FormikInput,
      label: 'Password',
      value: '',
      validate: (value) => checkMendetory(value, 'Password')
    },
  ]

export default fields;