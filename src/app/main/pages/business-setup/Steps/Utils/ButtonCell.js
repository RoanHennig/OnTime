import React from 'react';
import Button, { Size, Tooltip } from 'devextreme-react/button';

export default function ChartCell(cellData) {
  return (
    <div className={'button-cell'}>
      <Button
        text={cellData.text}
        argumentField={'date'}
        valueField={'close'}
        type={'line'}
        showMinMax={true}
        minColor={'#f00'}
        maxColor={'#2ab71b'}
        pointSize={6}>
        <Tooltip enabled={false} />
      </Button>
    </div>
  );
}
