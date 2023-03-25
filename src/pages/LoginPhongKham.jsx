import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Navbar
 from "./Nav";
const schema = yup.object({
  firstName: yup.string().required(),
  password: yup.string().required().min(6),
}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="a">
      <Navbar />
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder='Tên đăng nhập' />
      <p>{errors.firstName?.message}</p>
        
      <input type='password' {...register("password")} />
      <p>{errors.password?.message}</p>
      
      <input type="Dang Nhap" />
    </form> */}
    </div>
  );
}
