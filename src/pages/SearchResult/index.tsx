import React, { FC } from 'react';
import { RouteComponentProps, match } from 'react-router-dom';
import './index.less'

interface Props extends RouteComponentProps {
  match: match<{ searchValue?: string }>
}

const SearchResult: FC<Props> = (props: Props) => {
  const searchValue = props.match.params.searchValue;
  return (
    <div className="search">
      <div className="search-title">
        <span>"{searchValue}"</span> 搜索结果如下
      </div>
    </div>
  );
}

export default SearchResult;
