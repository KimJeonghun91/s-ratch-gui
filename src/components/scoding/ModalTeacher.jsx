import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
const isMobile = false;

const ModalTeacher = ({ ModalCb, isModalOpen }) => (
  <Modal
    width={isMobile ? 'calc(100% - 40px)' : '1400px'}
    visible={isModalOpen}
    title="Login"
    onOk={() => { ModalCb(true, {}) }}
    onCancel={() => { ModalCb(true, {}) }}
    footer={[]}
  >
    <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex',height:'600px' }}>
      <button onClick={() => { }} style={{ width: '300px', height: '40px' }}>Sign in with Google</button>
    </div>
  </Modal>
);

ModalTeacher.propTypes = {
  ModalCb: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

ModalTeacher.defaultProps = {
  isModalOpen: false,
  ModalCb: () => { }
};

export default ModalTeacher;
