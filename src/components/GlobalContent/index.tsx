import React, { FC } from 'react'
import './index.less'

// interface Props {
//   children: []
// }

const GlobalContent: FC = (props) => (
  <div className="global-content">
    {props.children}
  </div>
)

export default GlobalContent