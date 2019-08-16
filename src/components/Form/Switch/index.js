import React, { useState, useRef, useEffect } from 'react';

import { colors } from '~/assets/styles';
import { StyledSwitch } from './styles';

import { useField } from '@rocketseat/unform';

function Ratio(props) {
  const { name, initial } = props;
  const switchButton = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [active, setActive] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: switchButton.current,
      path: 'props.checked',
      parseValue: parseSelectedValue,
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [switchButton.current, fieldName, active]);

  useEffect(() => {
    initial && setActive(initial);
  }, [initial]);

  function parseSelectedValue() {
    return String(active);
  }

  return (
    <>
      <StyledSwitch
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={48}
        handleDiameter={25}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onColor={colors.pink}
        onHandleColor={colors.primary}
        name={fieldName}
        checked={active}
        ref={switchButton}
        onChange={() => setActive(!active)}
      />

      {error && <span>{error}</span>}
    </>
  );
}

export default Ratio;
