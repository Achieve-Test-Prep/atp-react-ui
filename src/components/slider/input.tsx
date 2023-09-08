import * as React from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const steps = Array.from({ length: props.max ?? 0 }, (v, i) => i);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={twMerge('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <div className="h-4 w-1 cursor-pointer rounded-md bg-primary" />
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-slider">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />

        <div className="flex h-full items-center justify-between">
          {steps.map((item, i) => (
            <div
              key={item}
              className="z-0 h-1 w-1 cursor-pointer rounded-full bg-accent-light first-of-type:bg-transparent last-of-type:bg-transparent"
            />
          ))}
        </div>
      </SliderPrimitive.Track>

      <div className="h-4 w-1 cursor-pointer rounded-md bg-success" />
      <SliderPrimitive.Thumb className="focus-visible:ring-ring z-30 block h-5 w-5 cursor-pointer rounded-full border border-primary-light bg-primary shadow ring-primary-light transition-colors hover:ring-2 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
