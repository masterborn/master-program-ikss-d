import axios from 'axios';

class FormCarryClient {
  api = axios.create({
    baseURL: `https://formcarry.com/s`,
  });

  sendForm(formValues) {
    return this.api
      .post(`${process.env.NEXT_PUBLIC_FORMCARRY_FORM_ID}`, formValues, {
        headers: { Accept: 'application/json' },
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}

const FormCarryApi = new FormCarryClient();

export default FormCarryApi;
