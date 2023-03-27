import React from 'react'
import { Link } from 'react-router-dom'
import { Form
 } from '../componnets/FromDangKy/FromDangKy'
const DangKy = () => {
  return (
    <main>
        <div className="dangky">
            <h1>Đây là trang đăng ký nhưng mà đang code :))))</h1>
            <Link to='/'>Back</Link>
            <Form />
        </div>
    </main>
  )
}

export default DangKy