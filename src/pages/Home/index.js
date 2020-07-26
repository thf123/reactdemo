import React from 'react'
import './index.css'
import { AdminRoutes } from '../../config/routes'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import FormItemInput from 'antd/lib/form/FormItemInput'
const { Header, Footer, Sider, Content } = Layout

export default function Home() {
  return (
    <Layout>
      <div className="leftfix" />
      <Sider
        className="taside"
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          {AdminRoutes.map(item => {
            return (
              <Menu.Item key={item.path} icon={<UserOutlined />}>
                {item.name}
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header className="Theader" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 760 }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout >
  )
}
