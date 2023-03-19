import '../css/phongkham.css'
const PhongKham = () => {
  return (
      <main>
        <div className="header_phongkham"></div>
        <div className="banner">
            <div className="wrapper">
                <div className="info">
                    <h1>Hệ thống quản lý Phòng khám/phòng mạch</h1>
                    <p>Hiện đại hóa Phòng khám của bạn thành Hệ thống tối ưu với Ứng dụng Bệnh Viện E.</p>
                </div>
                <div className="title">
                    <img src="https://medpro.vn/static/media/laptop_banner.5b289611.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="thongke">
            <div className="contents">
                <p>Thông Số Thống Kê</p>
            </div>
            <div className="show">
                <div className="thongso">
                <img src="https://medpro.vn/static/media/LuotDatKham.ee5fdeb7.svg" alt="" />
                <p className='content'>500.000</p>
                <p className='decs'>Lượt Đặt Khám</p>
                </div>
                <div className="thongso">
                <img src="https://medpro.vn/static/media/BenhVien.fc30f870.svg" alt="" />
                <p className='content'>50</p>
                <p className='decs'>Phòng khám/Phòng mạch</p>
                </div>
                <div className="thongso">
                <img src="https://medpro.vn/static/media/BacSi.dac5ffcc.svg" alt="" />
                <p className='content'>150</p>
                <p className='decs'>Bác Sĩ</p>
                </div>
                <div className="thongso">
                <img src="https://medpro.vn/static/media/LuotTruyCap.53245e54.svg" alt="" />
                <p className='content'>3713</p>
                <p className='decs'>Lượt Truy Cập</p>
                </div>
                <div className="thongso">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABwCAYAAAApIp91AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA42SURBVHgB7Z1rkBxVFcfPvT2zM5tdkiGBJJjEna3wCATIBhECaGXXgpJSlAmoBSpKxNcHrECJVGkhSSwLC6oU4gdUKE0iJb6QDKCo8CGLFrAoRVJAiDwzm0BeJGTz2N3Zne57PefOs2d6ntszfXe3f1WzM9PT3TPb/z7nnnvOvd0MJimjz8einEOPZUE0YECXlDzKmIxKCZHMKlGHzRL0h+GzBDbEmEiYFgwyBtvDYdjOlseHYBLCYJKAovWiQD0G5ysBZC8uioD7DOEB2W5J+Qy+7m+/JN4PkwBtRZTbYpFkEmKc8aubKFo10DJZv5DiMUiLmgAN0U5EsjiDsbUSoAe8Ea4CLE6CopibQCO0EJGszhzna4SUt4B2wjmS4IzFTSE26GCdnoqoghMGa/FnxGByiFcCA7bJkmK9l2J6IiJZ3vgY3ItffyNMEbwUs6UiTkK3WTfoZtcFL350PbSQlolIAQv+gxvBuf821Ujgibq+VQFQ00Uk60uN87UybX3Tila52KaKOM2srxxklaubmTjg0CRSL1yzFgXcCtNbQCJKx4GOBzQJ1y1Ruc8xtgU7673gUwSLt4XEardztK6KmO73+dZXBXKvfW62k6650xPPxnp8AWtCneh0woNLuGKJJGDQUAJOyb5fU2AwlDJlX+dl8e0wQSYsoi/gBHBJyAmJ6AvoAi4I2bCIfhDjIiikEHJ5o8FOQ4GNL6DLSIhMJNhpSESDsy3gC+g2UTqu1M+GOqlbxPEXrrmXxrqAj+vQcU2N8bozO3WJOD5w7ZrpmMhuJRLkLcmBWF3HuObAJtMObgM/Em0+dQY6NVtiJpDxBWwFGOgY6epPTdQkYiYDHwWflkEFhFrdalV3mnGju8Cn9dToVqtaYno0mo8n1OhWK4qIVnjjVBqRNhkht0ojJCqtU1FEdKO+FWoAJgHurfR5WRHTVugHMzpASYCMHo6UFdG3Qr2opIejiL4Vakl0+LlYzOkDRxFR9TXgox1B7qxLiYiZSMhPcGtIuUi1RETsF34VfLSFMShxqbaMjdwai4y3syPgoy+YxWlrk92FY1dtlpgMQwx89AazODQNvnCRTURM8UwNV8oDwEJzgIcXAp/RDby9C1jbHDyLmzZroaUU65Rzp5PWlfI24J1LgEUuQKFmA+s8E59PcRYMe81ybB/I0b0A+CyGtoE4OuFhn62nyKUGssvHQ5No7gQPAY98FPjcTwCfeX7tFoZRAQt/SD3UbuZ/Rj2LD54HcfjfKOqL+MYE7UGXOjKq9IrT25yI6FivBt0JdIAx7yo8+J8GFugEt+CzL1EPOXYQxKFnwDr4FJ7Vh0FnDJ4XMedOxwZWUc0wCjoSmJEW70MxNLowNB1zGKwDT4C173EAKwmakgit2NJNL5SIOhd+eeQjYHR/Ox2Y1IC0RkAeeQHEkf+CHE4oF8rnXg7GaaugXsgyrd2b0N0OgI60heTJ1C4qd8ppCKJulyVCdxmIfhP4nI/VvIk48BRY7/0RZMoen1l7H2tIRBaaC4Ezbgdx8Gkwd2/GHY2ATmTbRRURCKZZmm1GFILn/tRRQJnc67iJNbgRzMQvSwQEHgRj/qegVuSJN0uW8blXQPC8nwGE5oFOZNrFdGDDOSyjxJwO8DkfByP6LQxcZtiWy/EjYL19H7A5l4CRiS6zWO8+DNb+J/L76DwH+AJsPztOx/3MUi61VqjLIff+BYyurylLzEKv25bejSfLr8HCSFYLRDqGScfmkkVBA8hiAqffWiKg2P83MF/+Dojht7GNvMj2mTz6MrrQR/L7WHAdBJb+GNe7EFgwUpeA2d8gjr0KqVe+i8HNP+wfBmeCgb/PmH8V6ADjbBk9ZztYnrtTAyNPo+vr9oViDK3v52Di2U8BC595nurQF2ImfpXfx4LPgbHwCzAhjA7gJ52F5o0RauIBZXn0O2yroJUa82p30U0kSn+4m9OOG4XPvgyMRTfYlknsp6V2fB+sQ/25ZWzmEvs6yf342Jd+g+7OWDBBAbO/56Rzc68t9AKpV78H0jxhW8eI3gT85AvBa+RL13SRJUbBS9oXKhdaWFCh0N587Q6QIwnbqrxjse29OPpS7rUxZyXuIgBuwDrt3yNH3wXz1dvwd71fuBYEFq/B7M988JLkmOjmXHo4NB9dY/CsO2xpM7JAc+daPGAHStenIKWQ0X25lyzsYuTYdmrJInVi0e9KHc0vRNcbWLJOJSM8JMqxe+GZiMaCz9siQEoKmq//xFlAApPd9h20516qpLdrOAdDcmw/mG/eTRmF/JrUl+z6BngJlx5ZIkf3Z8z9pG2ZNfgbdKHvlN+oKAVmLLgW86hXYaBxE7BZ54NrmMfKfiSP/w+sPQ/ZlvFTVqYT8R6AwTfNMvZGRGPR9bb3ApPOFERUQo4UZQaxmhGgSBET4m5ib/tKoZyqdWirbZnR7Y01khF6UiUlF1ToRlWOcu8jVbcTDtmUZiCGXqq6jjW4yRaxsvAC7JfOBC/QpNTNsJmpXi2QLRJRDr9VfSUDqynWqH07j2qRnohI7kqODObes9CpKtlddTs8uPL4DmgmEq1Qju6pul6A2uFQPoolb+JVgpwCG1ev+FcbEvOdv7MtoWS3cVr1cVrWu3+AZmK+96eq61BUzU+2p/8sTL57AcY0QxTYeCAitjtHXsQK+tO2ZcaHbwA+a1nl7Y7twOr7v6Apv+n9reiy36i4Do9cgKm96+zbHfwntqPejNUhI/S0TbR2/zbthnJgFuSM24BhFqcS5uCDRdtNHBVc7dlUeaUZ3RA483awZ5cOYK3xIfAKkRExAV6BSWZz5zo8EgUBAWZBgpgFYeHTym9n0nZ3uiZkOhuD+0sdL7sOQwGDZ/+Isgr5hdYJTE7c5WmxmDOvRYRsFuQegMKCJqXjzrkLE95LK2yXOfBlisQ1fz/mZ82dP6x4QtAQkcDZeGIFOmzLzXd+UVMQ1EzCIb5L+YWxgVWel4SptGNEi0pRFADt+X3lPiSm4oyF12OH/7P11Q5lCuuQfwZx4O/oCIbLrkbBlrHoyyXDIlWZqrje6AGhFVvSaX8JMsGARcFDrANPqgNFtbo8DA/gF1ViwMTqPaQcYjAxjm3rZiUG1RNV1Bgo3+kmwcTBJ/GxVXmBstAYn+6bsUx2Uelv3b1JCwERFU0pEekmkKhkFDzG2v9XVSM0Ft+MrisvBI1WC0aWoVU+rMaFOqHc6zv346v7sf2Kph/t8/F/C2EEN4afH8I+5us1uT8+e0V6hF3xyYBtH7lQ8cGzoANSSNXZTluihEFdBrvRKGy54wdY4rnTPsYFy0NUv5PzrkRX9iCI4fKJcmrnimuRtcBPWgocuw/coS1WUegb95Tmbz1EsrQlpttEmkacvvylPgRnQWDRl4Cfernjx/LoK2Ad7kfL7FdnYcPwoBqcxU/pRfHOdVyFvsPavbFi9OoFppCrOi6Nx5WIOk+m4bMvxSTAV4rqjnmojaNUnDj8HJ6NB0GMvFV5PgWJRqPlOs7AfV+MVfwlJVFnbt+pD8Da9QAmJv4DOiKk7KarTeW8aHIgtsvr4KYsPAwc3WiAMiXFheFisGArR3ejAFgTNI9n+qBczeNQk2ko31ltGAcN0NoXB7E3ju3OGGhKbhh/4X9D983V84ILIgkCD2oKa3h87pXoYvvKWiYwQ3XMG2njJYouMEoWFGBV6HboABpcf/Z1TkQmoB9PWK2vmkHjW2iYPvUbeWQ5inmFSggwo/ExLkqs4bcxMn4c5LHX0PK0nUBjIyXUzaoVORHbxqB/vF0lw/W/pim6TEqg04MsjwIS1nkWsI7F+fmHTh1/KUCOH1J1SZl8D9vSnWq4hcYusywz2tHoMtj+0/GBVVunxI26yKVSHw+DmBzUVppHJ8ck0iqgaP1tK7b0Zd/bWnhLys1Ym+qFyQ4Jlpq6FwEhnQrf2xKC4aSaeepJfdGndsLh9AzhLDYRWV98CPOom8FHW+gWt8X3XywpCmPyIw4+2mJJUWJkjt2pKRPgTD22Ywd/efFCx+EZmB3fAD7agWk2R13KJja0vprG9CSXZium7EApVH09+GhDJT0qphjRGum2Qv61T72nrBUSFYcsovq3go/nVPOKVZP9fqTqLdQvbFvx6OpK61QdPIwpHtqBn8XxCOwXVo1NqopIlWPM4vhBjgeQG63l9ns11059t9pyKgYzhdQ8F8N3qy1lCK2wr9aVaxbRd6utg45zPbdrr3soSnIgdh9GTP7NT5oECrghvCJe1z2F657aFhqFdZAZPu7jLjQSv14BibpFpJoj+mu6eGgCfNwkYQlZ/0VZoQF3msW/27erJCiQqacdLKThmcL0hSlLRVB+xDoxhvA4rmpUQGLC82hOPBvrCRr+7dsbhATs67wsPqEYw5XJUL6QDeGKgIQrF16gH4I+nYYNJMCnFhJuCUi4Oi0xE+yQRUbBpxwTCmKccPUSKPTD2kbJIpk/Ys4BNXI7JJe7KWBmv80BrXKdf3PpPJmKxDpoAk2d5U23TkUhN8L0dq/kPlejgP3QJJp6RSn64eT/hZyeo8opD5pxn/3QRFp2vQW67XvGvUZh6tN06yukZSJmmeJtJeWVN4TDcF/xfIlm0nIRicy9OEjMKXMncRrQFAyJW1spXv67PWQKiDmE4sVpMJPb3YZ68FTELCQm1tJuwQNCd1ONgv544jbLoYWIhaQDII5iyuqXIW4taHWw3Ur39/pBI7QTMUvG1fZmBO0Fb5LraGUMu0niMZqdq4PVOaGtiMVQ4gCfeg3GVsr0/JBmiKpEs4R4hoZK6GZx5Zg0IhYjt8UiyST0SAk9nEOUAe9iICMy36ZGHTZLZJ5JrIQEMSgEJAzq16VFS8Ak5P/d8d00nBAe3wAAAABJRU5ErkJggg==" alt="" />
                <p className='content'>2773</p>
                <p className='decs'>Lượt Truy Cập Hiện Tại</p>
                </div>

            </div>
        </div>
        <div className="containerStyle">
            <p className='content'>
            TẠI SAO BẠN NÊN CHỌN CHÚNG TÔI?
            </p>
            <p className="tilte">
            Chúng tôi đã tích hợp Hệ thống Quản lý Phòng khám/Phòng mạch hoàn chỉnh của mình với nhiều tính năng ưu việt.
            </p>
            <p className="tilte">
            Điều này giúp chúng tôi tạo ra một hệ sinh thái tiện dụng và an toàn cho Bệnh viện và Phòng khám/Phòng mạch.
            </p>
        </div>
      </main>
  )
}

export default PhongKham