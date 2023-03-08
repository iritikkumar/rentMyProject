import React from 'react'
import BookingCar from '../pages/BookingCar';
import { Menu, Dropdown, Button , Row, Col} from 'antd';
import { Link } from 'react-router-dom';

const DefaultLayout = (props) => {

  const user =JSON.parse(localStorage.getItem('user'))

  const menu = (
    <Menu>
      <Menu.Item>
      <a href="/">
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        {/* <a href="/booking">
          Bookings
        </a> */}
      </Menu.Item>
      <Menu.Item>
        <a  href="http://www.taobao.com/">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
        localStorage.removeItem('user')
        window.location.href='/login'
      }}>
        
        <li>LogOut</li>

      </Menu.Item>
    </Menu>
  );
  return (
    <div>
        <div className='header bs1'>

          <Row gutter ={16} justify='center'>
            <Col lg={20} sm={24} xs={24}>
              <div className='d-flex justify-content-between'>
                  <h1>RentCars24x7</h1>
                  <Dropdown overlay={menu} placement="bottomCenter">
                      <Button>{user.username}</Button>
                  </Dropdown>
              </div>            
            </Col>
          </Row>

        </div>
        <div className='content'>
            {props.children}
        </div>

    </div>
  )
}

export default DefaultLayout