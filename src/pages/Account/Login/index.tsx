import React, { FC, useState, FormEvent } from 'react';
import { NavLink } from 'react-router-dom'
import { Card, Input, Button, Form, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import '../common.less'

const Login: FC = () => {
  // const [username, setUsername] = useState('');
  // const [isLoading, seIsLoading] = useState(false);

  // const inputUsername = (e: FormEvent<HTMLInputElement>) => {
  //   let value = e.currentTarget?.value;
  //   setUsername(value);
  // }

  // const handleLogin = () => {
  //   seIsLoading(true);
  //   console.log(username);
  //   setTimeout(() => {
  //     seIsLoading(false);
  //   }, 1000);
  // }

  const onFinish = (values:any)  => {
    console.log('Success:', values);
    message.success('hahhaa')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('请输入必填项');
  };


  return (
    <div className="account">
      <NavLink className="account-logo" to="/">
        漫画屋
      </NavLink>
      <Card className="account-content">
      <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '用户名必填!' }]}
          >
            <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '密码必填!' }]}
          >
            <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>同意 <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">《哈哈条款》</a></Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登 录
            </Button>
          </Form.Item>
        </Form>
        {/* <Input placeholder="请输入账号" onInput={inputUsername} value={username} prefix={<UserOutlined />} />
        <Input placeholder="请输入密码" prefix={<LockOutlined />} />
        <Button block loading={isLoading} type="primary" onClick={handleLogin}>登 录</Button> */}
      </Card>
    </div>
  );
}

export default Login;
