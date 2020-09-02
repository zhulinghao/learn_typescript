import React, { FC } from 'react';
import { match } from 'react-router-dom';
import { Button } from 'antd';
interface Props {
  match: match<{ id?: string }>
}
const CartoonDetail: FC<Props> = ({ match }: Props) => {
  return <div className="App">
    <div>{match.params.id}</div>
    <Button type="primary">Button</Button>
  </div>
}

export default CartoonDetail;
