import { Skeleton } from './skeleton';

export default function FormInputSkeleton() {
  return (
    <div>
      <Skeleton className="h-4 w-48" />
      <Skeleton className="mt-2 h-[2.625rem]" />
    </div>
  );
}
