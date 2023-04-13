/* eslint-disable jsx-a11y/anchor-is-valid */
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

export default function InPage() {
  return (
    <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800 p-2">
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">We announced a new product!</span>
                <span className="hidden md:inline">Big news! Were excited to announce a brand new product.</span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Example() {
  return (
    <div className="relative bg-indigo-600">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">Big news! Were excited to announce a brand new product.</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="font-bold text-white underline">
                {' '}
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pr-1 pt-1 sm:items-start sm:pr-2 sm:pt-1">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FooterSticky() {
  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-indigo-600">
          <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-indigo-800 p-2">
                  <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">We announced a new product!</span>
                  <span className="hidden md:inline">Big news! Were excited to announce a brand new product.</span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                >
                  Learn more
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
