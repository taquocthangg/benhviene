import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';
import './LoginPhongKham.css'
import { TbArrowBackUp } from "react-icons/tb"
const LoginPhongKham = () => {
  const schema = yup.object().shape({
    taiKhoan: yup.string().required("Vui lòng nhập tên đăng nhập").min(5, 'Vui lòng nhập nhiều hơn 5 kí tự'),
    matKhau: yup.string().required("Nhập mật khẩu")
      .min(6, 'Mật khẩu nhiều hơn 6 kí tự.'),
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
    <div class="dangnhap">
      <div className="dangnhap-back">
        <Link to='/'><TbArrowBackUp />Về trang chủ</Link>
      </div>
      <div className="login__wrapper">
        <div className="wrapper-logo">
          <img src="https://clinic.medpro.vn/javax.faces.resource/medpro-logo.svg.xhtml?ln=images" alt="" />
        </div>
        <form className="from__dangnhap" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            <p>Họ và tên :</p>
            <input type="text" placeholder="Vui lòng nhập tên đăng nhập" {...register("taiKhoan")} />
            <p className="err">{errors.taiKhoan?.message}</p>
          </label>
          <label htmlFor="">
            <p>Nhập mật khẩu: </p>
            <input
              type="password"
              placeholder="Vui lòng nhập mật khẩu"
              {...register("matKhau")}
            />
            <p className="err">{errors.matKhau?.message}</p>
          </label>
          <button className='btn' type="submit">Đăng Nhập</button>
          <div className="forget">
            <p>Chưa có tài khoản? </p> <Link to=''>Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPhongKham