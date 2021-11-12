import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
// import {isMobile} from 'react-device-detect';
// import * as SG from '../constants/Signature'



const ModalTeacher = ({ ModalCb, isModalOpen }) => {
  // const [loading, setLoading] = useState(false)

  return (
    <Modal
      width={isMobile ? 'calc(100% - 40px)' : '400px'}
      visible={isModalOpen}
      title="Login"
      onOk={() => { ModalCb(true, {}) }}
      onCancel={() => { ModalCb(true, {}) }}
      footer={[]}
    >
      <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <button onClick={() => {  }} style={{ width: '300px', height: '40px' }}>Sign in with Google</button>
      </div>
    </Modal>
  );
}
export default ModalTeacher;