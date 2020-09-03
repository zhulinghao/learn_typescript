import React, { FC } from 'react'
import { NavLink, useHistory, withRouter, RouteProps } from 'react-router-dom'
import { Affix, Input } from 'antd'
import './index.less'
const { Search } = Input


const HomeList: FC = (props: RouteProps) => {

  const history = useHistory()

  /**
   * 搜索结果
   * @param {string} value - 搜索关键词
   */
  const handleSearch = (value: string) => {
    if (!value) return;
    history.push(`/index/search/${value}`)
  }

  const pathname = props.location?.pathname;
  const navItems = [
    {
      path: '/index',
      name: '主页'
    },
    {
      path: '/index/category',
      name: '分类'
    }
  ]
  return (
    <Affix offsetTop={0}>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <NavLink to="/">
              <div className="header-logo">漫画屋</div>
            </NavLink>
            {
              navItems.map((item, key) => (
                <NavLink to={item.path} key={key}>
                  <div className={`header-item${item.path === pathname ? ' active' : ''}`}>{item.name}</div>
                </NavLink>
              ))
            }
          </div>
          <div className="header-right">
            <Search
              placeholder="请输入搜索关键词"
              onSearch={handleSearch}
              style={{ width: 240, marginRight: 20 }}
            />
            <NavLink to="/register">
              <div className="header-item">注册</div>
            </NavLink>
            <NavLink to="/login">
              <div className="header-item">登录</div>
            </NavLink>
          </div>
        </div>
      </header>
    </Affix>
  )
}
export default withRouter(HomeList)