import EyeIcon from '@heroicons/react/24/outline/EyeIcon';
import EyeSlashIcon from '@heroicons/react/24/outline/EyeSlashIcon';

import { useBoolean } from '../../../hooks';
import { Button } from '../../button';
import type { FormLabelProps } from '../types';

import { FormInput } from './form-input';
import type { InputProps } from './types';

export const FormPasswordInput = ({
  type = 'password',
  className,
  ...props
}: InputProps & FormLabelProps) => {
  const [isHidden, hide] = useBoolean(true);

  return (
    <div className="relative">
      <FormInput
        {...props}
        className={`${className} pr-11`}
        type={isHidden ? type : 'text'}
      />
      <Button
        icon={isHidden ? EyeIcon : EyeSlashIcon}
        onClick={hide.toggle}
        size="sm"
        as="link"
        aria-label="Toggle secure field visibility"
        className="absolute top-7 right-[0.3125rem]"
      />
    </div>
  );
};
