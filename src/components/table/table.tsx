import type { TableProps } from './types';

export const Table = ({ children, ...other }: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-nowrap" {...other}>
        {children}
      </table>
    </div>
  );
};
