// * ------------------------------
// *
// * ダイアログPanelコンポーネント
// *
// * ------------------------------

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type { IPanel } from '../../types'

/**
 * ダイアログPanel
 * @param {IPanel} props
 * @return {JSX.Element}
 */
const Panel = (props: IPanel) => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='base-box w-1/3 transform overflow-hidden bg-slate-50 dark:bg-slate-800 p-6 text-left align-middle transition-all'>
                <Dialog.Title as='h3' className='text-lg leading-6'>
                  title
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm'>lai</p>
                </div>

                <div className='mt-4'>
                  <button type='button' className='base-btn' onClick={props.closePanel}>
                    close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Panel
