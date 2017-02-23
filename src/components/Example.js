import React from 'react';
import { Button, SearchBar, Icon, SegmentedControl, WingBlank } from 'antd-mobile';

const Example = (props) => {
  return (
    <div>
      <Button loading>Start</Button>
      <Icon type="check" />
      <SearchBar />
      <SegmentedControl values={['切换一', '切换二']} />
    </div>
  );
};

Example.propTypes = {
};

export default Example;
