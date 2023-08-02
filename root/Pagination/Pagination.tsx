import React, { useEffect, useState } from 'react';

import ArrowSmallLeftIcon from '@heroicons/react/24/outline/ArrowSmallLeftIcon';
import ArrowSmallRightIcon from '@heroicons/react/24/outline/ArrowSmallRightIcon';

import Button from '../Button/Button';
import { ButtonAsButtonProps } from '../Button/types';
import { useTheme } from '../themes/use-theme';

interface NavigationButtonProps extends ButtonAsButtonProps {
  directionIcon: 'prev' | 'next';
}

export const NavigationButton: React.FC<React.PropsWithChildren<NavigationButtonProps>> = function NavigationButton({
  onClick,
  disabled,
  directionIcon,
}) {
  const ariaLabel = directionIcon === 'prev' ? 'Previous' : 'Next';

  const icon = directionIcon === 'prev' ? ArrowSmallLeftIcon : ArrowSmallRightIcon;

  return (
    <Button size="pagination" as="link" icon={icon} onClick={onClick} disabled={disabled} aria-label={ariaLabel} />
  );
};

interface PageButtonProps extends ButtonAsButtonProps {
  /**
   * The page the button represents
   */
  page: string | number;
  /**
   * Defines if the button is active
   */
  isActive?: boolean;
}

export const PageButton: React.FC<React.PropsWithChildren<PageButtonProps>> = function PageButton({
  page,
  isActive,
  onClick,
}) {
  return (
    <Button size="pagination" as={isActive ? 'contained' : 'link'} onClick={onClick}>
      {page}
    </Button>
  );
};

export function EmptyPageButton() {
  return <span className="px-2 py-1">...</span>;
}

export interface PaginationProps {
  /**
   * The total number of results
   */
  totalResults: number;
  /**
   * The number of results shown per page
   */
  resultsPerPage?: number;
  /**
   * The accessible name of the pagination (what does it refer to?)
   */
  label: string;
  /**
   * The function executed on page change
   */
  onChange: (activePage: number) => void;
}

type Ref = HTMLDivElement;

export const Pagination = React.forwardRef<Ref, PaginationProps>((props, ref) => {
  const { totalResults, resultsPerPage = 10, label, onChange, ...other } = props;
  const [pages, setPages] = useState<(number | string)[]>([]);
  const [activePage, setActivePage] = useState(1);

  const TOTAL_PAGES = Math.ceil(totalResults / resultsPerPage);
  const FIRST_PAGE = 1;
  const LAST_PAGE = TOTAL_PAGES;
  const MAX_VISIBLE_PAGES = 7;

  const handlePreviousClick = () => {
    setActivePage(activePage - 1);
  };

  const handleNextClick = () => {
    setActivePage(activePage + 1);
  };

  useEffect(() => {
    // [1], 2, 3, 4, 5, ..., 12 case #1
    // 1, [2], 3, 4, 5, ..., 12
    // 1, 2, [3], 4, 5, ..., 12
    // 1, 2, 3, [4], 5, ..., 12
    // 1, ..., 4, [5], 6, ..., 12 case #2
    // 1, ..., 5, [6], 7, ..., 12
    // 1, ..., 6, [7], 8, ..., 12
    // 1, ..., 7, [8], 9, ..., 12
    // 1, ..., 8, [9], 10, 11, 12 case #3
    // 1, ..., 8, 9, [10], 11, 12
    // 1, ..., 8, 9, 10, [11], 12
    // 1, ..., 8, 9, 10, 11, [12]
    // [1], 2, 3, 4, 5, ..., 8
    // always show first and last
    // max of 7 pages shown (incl. [...])
    if (TOTAL_PAGES <= MAX_VISIBLE_PAGES) {
      setPages(Array.from({ length: TOTAL_PAGES }).map((_, i) => i + 1));
    } else if (activePage < 5) {
      // #1 active page < 5 -> show first 5
      setPages([1, 2, 3, 4, 5, '...', TOTAL_PAGES]);
    } else if (activePage >= 5 && activePage < TOTAL_PAGES - 3) {
      // #2 active page >= 5 && < TOTAL_PAGES - 3
      setPages([1, '...', activePage - 1, activePage, activePage + 1, '...', TOTAL_PAGES]);
    } else {
      // #3 active page >= TOTAL_PAGES - 3 -> show last
      setPages([1, '...', TOTAL_PAGES - 4, TOTAL_PAGES - 3, TOTAL_PAGES - 2, TOTAL_PAGES - 1, TOTAL_PAGES]);
    }
  }, [activePage, TOTAL_PAGES]);

  useEffect(() => {
    onChange(activePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const { pagination } = useTheme();

  return (
    <div className={pagination.base} ref={ref} {...other}>
      {/*
       * This (label) should probably be an option, and not the default
       */}
      <span className="flex items-center font-semibold uppercase tracking-wide">
        Showing {activePage * resultsPerPage - resultsPerPage + 1}-{Math.min(activePage * resultsPerPage, totalResults)}{' '}
        of {totalResults}
      </span>

      <div className="mt-2 flex sm:mt-auto sm:justify-end">
        <nav aria-label={label}>
          <ul className="inline-flex items-center gap-0.5">
            <li>
              <NavigationButton
                directionIcon="prev"
                disabled={activePage === FIRST_PAGE}
                onClick={handlePreviousClick}
              />
            </li>
            {pages.map((p, i) => (
              <li key={p}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton page={p} isActive={p === activePage} onClick={() => setActivePage(+p)} />
                )}
              </li>
            ))}
            <li>
              <NavigationButton directionIcon="next" disabled={activePage === LAST_PAGE} onClick={handleNextClick} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
