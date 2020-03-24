import React from "react"
import { Upload, message, Radio, Alert } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from 'gatsby';

import { uploadStarted, uploadError, uploadSuccess, switchStem } from '../redux/upload/actions';
import { API_BASE } from '../constants';
import theme from '../theme';

const { Dragger } = Upload;

const props = (access, stems, onSuccess, onError, onStart) => ({
    action: `${API_BASE}/post_file`,
    method:'post',
    data: { stems },
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
      if(info.file.response && info.file.response.data)
        onSuccess(info.file);
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
  const token = useSelector(state=>state.auth.token);
  const stems = useSelector(state=>state.upload.stems);
  return (
    <div style={style}>
      <PremiumWarning max={15}/>
      <div style={{textAlign: 'center', marginTop: theme.spacing.medium, marginBottom: theme.spacing.medium}}>
          <StemsSelect disabled/>
      </div>
      <Dragger {...props(token, stems, onSuccess(dispatch), onError(dispatch), onStart(dispatch))}>
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

const PremiumMessage = ({num, max}) => (
  <span>You have {num} of your {max} free uploads left until you will need to <a onClick={()=>navigate('/pricing')}>upgrade your plan</a></span>
)

const PremiumWarning = ({max}) => (
  <Alert message={<PremiumMessage num={useSelector(state=>state.api.files.uploadedFileCount)} max={max}/>} type="warning" showIcon />
);

const StemsSelect = ({ style, disabled }) => {
  const dispatch = useDispatch();
  return ( <>
    <p style={{...theme.fonts.tiny, color: theme.colors.primary[6], marginBottom: theme.spacing.small}}>Choose an output option {disabled && "(premium only)"}</p>
    <Radio.Group disabled={disabled} style={style} buttonStyle="solid" onChange={(val)=>dispatch(switchStem(val))} defaultValue="2">
      <Radio.Button value="2">Vocals, and instrumental</Radio.Button>
      <Radio.Button value="4">Vocals, drums, bass, and others</Radio.Button>
    </Radio.Group>
    </>
  ); 
}

export default DragUpload;