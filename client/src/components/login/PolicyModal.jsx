import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

function PolicyModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="mb-4 text-xs">By signing up, you agree to the <a href="#" className="text-purple-500 font-semibold" onClick={() => setOpenModal(true)}>Party Policy</a>.</div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Party Policy</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Never. Ever. Stop. Partying. 🤘
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PolicyModal;
