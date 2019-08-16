import { setLocale } from 'yup';

setLocale({
  mixed: {
    required: 'Campo obrigatório',
    typeError: 'Valor inválido',
  },
  string: {
    email: 'Preencha um e-mail válido',
  },
  number: {
    min: 'O numero informado deve ser no mínimo ${min}',
    integer: 'Este número deve ser um inteiro',
    typeError: 'O valor precisa ser um número válido',
  },
  array: {
    required: 'Esta lista naão pode estar vazia',
  },
});
