import { Skeleton } from './skeleton';

export function FormInputSkeleton() {
  return (
    <div>
      <Skeleton className="h-4 w-48" />
      <Skeleton className="mt-2 h-10.5" />
    </div>
  );
}
