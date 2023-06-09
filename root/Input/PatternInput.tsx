import { ChangeEvent, useEffect, useRef, useState, forwardRef } from 'react';

import Input from './Input';
import { InputProps } from './use-input';

export type PatternInputProps = Omit<InputProps, 'value'> & {
  pattern: string;
  value?: string;
  as?: 'alpha' | 'numeric' | 'alphanumeric';
  onValueChange: (v: string) => void;
};

const PatternInput = forwardRef<HTMLInputElement, PatternInputProps>(
  ({ pattern, onValueChange, onChange, value: userValue = '', as = 'numeric', ...rest }, ref) => {
    const [value, setValue] = useState(format(userValue, pattern));
    const inputRef = useRef<HTMLInputElement | null>(null);

    const infoRef = useRef({
      cursorPosition: userValue?.length ?? 0,
      endOfSection: false,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue, selectionStart } = event.target;

      const didDelete = inputValue.length < value.length;
      const cursorPosition = selectionStart as number;

      if (infoRef.current) {
        infoRef.current.cursorPosition = cursorPosition;
      }

      let rawValue = stripPatternCharacters(inputValue);

      if (rawValue !== '') {
        if (as === 'numeric') {
          if (!/^\d+$/.test(rawValue)) {
            return;
          }
        } else if (as === 'alpha') {
          if (!/^[a-zA-Z]+$/.test(rawValue)) {
            return;
          }
        }
      }

      if (didDelete) {
        const patternCharacterDeleted = !isUserCharacter(value.split('')[cursorPosition]);

        if (patternCharacterDeleted) {
          const firstBit = inputValue.substr(0, cursorPosition);
          const rawFirstBit = stripPatternCharacters(firstBit);

          rawValue =
            rawFirstBit.substr(0, rawFirstBit.length - 1) +
            stripPatternCharacters(inputValue.substr(cursorPosition, inputValue.length));

          if (infoRef.current) {
            infoRef.current.cursorPosition = firstBit.replace(/([\d\w]+)[^\dA-z]+$/, '$1').length - 1;
          }
        }
      }

      const formattedValue = format(rawValue, pattern);

      if (infoRef.current) {
        infoRef.current.endOfSection = false;
      }

      if (!didDelete) {
        const formattedCharacters = formattedValue.split('');
        const nextCharacter = formattedCharacters[cursorPosition];
        const nextCharacterIsPattern = !isUserCharacter(nextCharacter);
        const nextUserCharacterIndex = formattedValue.substr(cursorPosition).search(/[\dA-z]/);
        const numbersAhead = nextUserCharacterIndex !== -1;

        if (infoRef.current) {
          infoRef.current.endOfSection = nextCharacterIsPattern && !numbersAhead;
        }

        if (
          infoRef.current &&
          nextCharacterIsPattern &&
          !isUserCharacter(formattedCharacters[cursorPosition - 1]) &&
          numbersAhead
        )
          infoRef.current.cursorPosition = cursorPosition + nextUserCharacterIndex + 1;
      }

      onValueChange(rawValue);

      // if (typeof onChange === 'function') {
      //   onChange(event);
      // }

      setValue(formattedValue);
    };

    useEffect(() => {
      if (inputRef.current && infoRef.current) {
        const { cursorPosition, endOfSection } = infoRef.current;

        if (endOfSection) return;
        inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }, [inputRef, value]);

    useEffect(() => {
      if (userValue !== '' && value === '') {
        setValue(format(userValue, pattern));
      }
    }, [value, userValue, pattern]);

    return <Input maxLength={pattern.length} onChange={handleChange} ref={inputRef} value={value} {...rest} />;
  }
);

PatternInput.displayName = 'PatternInput';

export { PatternInput };

function format(value: string, pattern: string) {
  if (!pattern) return value;

  const placeholder = '#';

  let endOfValue = 0;
  let characterIndex = 0;
  const newValue = value;

  return pattern
    .split('')
    .map((patternCharacter, index) => {
      const character = newValue[characterIndex];
      const patternLength = pattern.length;

      if (!endOfValue) {
        if (index === patternLength - 1) endOfValue = patternLength;
        if (character === undefined) endOfValue = pattern.indexOf(placeholder, index);
      }

      if (patternCharacter === placeholder) {
        characterIndex += 1;
        return character;
      }

      return patternCharacter;
    })
    .splice(0, endOfValue)
    .join('');
}

function stripPatternCharacters(value: string) {
  return value.replace(/[^\dA-z]/g, '');
}

function isUserCharacter(character: string) {
  return /[\dA-z]/.test(character);
}
