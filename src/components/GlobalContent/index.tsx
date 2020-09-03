import React, { FC } from 'react'
import './index.less'

const GlobalContent: FC = (props) => (
  <div className="global-content">
    {props.children}
  </div>
)

export default GlobalContent