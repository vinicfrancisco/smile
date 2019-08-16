import React, { useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';
import Async from 'react-select/lib/Async';

import { Loading, Form } from '~/components';

import { StyledSelect } from './styles';
import { colors } from '~/assets/styles';

function Select(props) {
  const { name, label, options, multiple, async, disabled, placeholder, noIndicator, ...rest } = props;
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const styles = {
    control: (base, state) => ({
      ...base,
      '&:hover': { borderColor: colors.primary },
      border: '1px solid lightgray',
      boxShadow: 'none',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? colors.primary : colors.white,
      color: state.isSelected || state.isFocused ? colors.white : colors.darkGray,
    }),

    multiValue: provided => ({
      ...provided,
      borderRadius: 100,
      backgroundColor: colors.primary,
      color: colors.white,
    }),

    multiValueLabel: provided => ({
      ...provided,
      color: colors.white,
      fontSize: 13,
    }),

    multiValueRemove: (provided, state) => ({
      ...provided,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      backgroundColor: state.isFocused || state.isSelected ? colors.primary : colors.primary,
    }),

    indicatorsContainer: provided => ({
      ...provided,
      display: noIndicator ? 'none' : 'flex',
    }),
  };

  function parseSelectValue(selectValue) {
    if (!multiple) {
      return selectValue ? selectValue.value : '';
    }

    return selectValue ? selectValue.map(option => option.value) : [];
  }

  useEffect(() => {
    if (defaultValue !== null) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: async ? 'select.state.value' : 'state.value',
        parseValue: parseSelectValue,
        clearValue: selectRef => {
          selectRef.select.clearValue();
        },
      });
    }
  }, [defaultValue, ref.current, fieldName]);

  return (
    <>
      {defaultValue === undefined && multiple ? (
        <Loading />
      ) : disabled ? (
        <Form.Input disabled name={name} placeholder={placeholder} />
      ) : (
        <StyledSelect
          name={fieldName}
          aria-label={fieldName}
          options={options}
          isMulti={multiple}
          defaultValue={defaultValue}
          ref={ref}
          placeholder={placeholder}
          styles={styles}
          as={async && Async}
          {...rest}
        />
      )}

      {error && <span>{error}</span>}
    </>
  );
}

export default Select;
