import React from 'react';

import Button from '@airbnb/lunar/lib/components/Button';


export interface ILunarButtonProps {
  text?: string,
}

const LunarButton: React.SFC<ILunarButtonProps> = ({
  text
}) => (
  <Button>
    {text}
  </Button>
);

LunarButton.defaultProps = {
  text: 'Lunar Button!'
};

export default LunarButton;
