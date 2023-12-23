import { Button, Modal } from 'antd';
import { useState } from 'react';

function PolicyModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="mb-4 text-xs">By signing up, you agree to the <a href="#" className="text-purple-500 font-semibold" onClick={() => setOpenModal(true)}>Party Policy</a>.</div>
      <Modal
        title="Party Policy"
        centered
        open={openModal}
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
      >
        <p>Never.</p>
        <p>Stop.</p>
        <p>Partying.</p>
      </Modal>
    </>
  );
}

export default PolicyModal;
