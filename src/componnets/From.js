import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập tên đăng nhập"),
    email: yup.string().email().required("Vui lòng nhập email"),
    age: yup.number().typeError('Nhập số điện thoại'),
    password: yup.string().required("Nhập mật khẩu").typeError('you must specify a number')
    .min(6, 'Mật khẩu nhiều hơn 6 kí tự.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp")
      .required("Nhập vào đây cmm"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};