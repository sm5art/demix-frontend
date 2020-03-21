import React from "react"
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { uploadStarted, uploadError, uploadSuccess } from '../redux/upload/actions';
import { API_BASE } from '../constants';

const { Dragger } = Upload;

const props = (access, onSuccess, onError, onStart) => ({
    action: `${API_BASE}/post_file`,
    method:'post',
    onChange: (info)=>{
      const { status } = info.file;
      if (status === 'uploading') {
        console.log('uploading')
        onStart();
      }
      if (status === 'done') {
        console.log('done')
      } else if (status === 'error') {
        console.log('error')
      }
      if(info.file.response && info.file.response.data_id)
        onSuccess(info.file.response.data_id);
      else if (info.file.response && info.file.response.error){
        onError(info.file.response.error);
      }
    },
    headers: {
      token: access
    }
  })

const onSuccess = (dispatch) => (data) => dispatch(uploadSuccess(data));
const onError = (dispatch) => (data) => {dispatch(uploadError(data)); message.error(data);}
const onStart = (dispatch) => () => dispatch(uploadStarted());

const DragUpload = ({style}) => {
  const dispatch = useDispatch();
  return (
    <div style={style}>
        <Dragger {...props(useSelector(state=>state.auth.token), onSuccess(dispatch), onError(dispatch), onStart(dispatch))}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Supported format: mp3, wav
          </p>
          <p className="ant-upload-hint">
            Max file size: 30 mb
          </p>
        </Dragger>
      </div>
)};

export default DragUpload;