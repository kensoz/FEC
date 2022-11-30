// * ------------------------------
// *
// * Modal Template
// *
// * ------------------------------
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type { IModal } from '../../types'
import Disclaimer from './modal/disclaimer'
import Star from './modal/star'

/**
 * Modal Template
 * @param {IModal} props
 * @return {JSX.Element}
 */
const Modal = (props: IModal): JSX.Element => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-20' onClose={() => {}}>
        {/* layer */}
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

        {/* Modalレイアウト */}
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {/* Modal本体 */}
              <Dialog.Panel className='w-11/12 md:w-1/3 mt-3 base-box transform bg-slate-50 dark:bg-slate-800 transition-all'>
                {props.mode === 'star' ? (
                  // マイスキル
                  <Star
                    closeModalContent={() => {
                      props.closeModal()
                    }}
                  />
                ) : (
                  // 免責事項
                  <Disclaimer
                    closeModalContent={() => {
                      props.closeModal()
                    }}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal