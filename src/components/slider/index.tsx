import * as React from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

import { Tooltip } from '../tooltip';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const steps = Array.from({ length: props.max ?? 0 }, (_, i) => i);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={twMerge(
        'relative flex w-full touch-none items-center select-none',
        className
      )}
      {...props}
    >
      <Tooltip content={1}>
        <div className="bg-primary ml-0.5 h-4 w-1 cursor-pointer rounded-md" />
      </Tooltip>
      <SliderPrimitive.Track className="bg-slider relative h-2 w-full grow overflow-hidden">
        <SliderPrimitive.Range className="bg-primary absolute h-full" />

        <div className="flex h-full items-center justify-between">
          {steps.map((item, i) => (
            <div
              key={item}
              className="bg-accent-light z-0 size-1 cursor-pointer rounded-full first-of-type:bg-transparent last-of-type:bg-transparent"
            >
              <Tooltip key={item} content={i + 1}>
                <div className="size-1.5" />
              </Tooltip>
            </div>
          ))}
        </div>
      </SliderPrimitive.Track>

      <Tooltip content={10}>
        <div className="bg-success mr-0.5 h-4 w-1 cursor-pointer rounded-md" />
      </Tooltip>
      <SliderPrimitive.Thumb className="focus-visible:ring-ring border-primary-light bg-primary ring-primary-light z-30 flex size-5 cursor-pointer items-center justify-center rounded-full border text-xs font-semibold text-white shadow transition-colors hover:ring-2 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
        {props?.value?.[0] ?? props?.defaultValue?.[0] ?? 1}
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
