import * as yup from "yup";

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email geçerli bir formatta olmalı")
    .required("Email zorunlu bir alan"),
  age: yup
    .number()
    .min(18, "Yaş 18'den büyük olmalıdır")
    .max(100, "Yaş 100'den küçük olmamaz")
    .integer("Lütfen tam sayı giriniz")
    .required("Yaş zorunlu bir alan"),
  password: yup
    .string()
    .min(6, "Şifreniz en az 6 karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alan"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Onay şifreniz eşleşmiyor")
    .required("Lütfen şifrenizi onaylayınız"),
});
