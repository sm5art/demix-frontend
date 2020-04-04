import React from 'react';
import { Upload, Radio, Alert } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from 'gatsby';

import {
  uploadStarted, uploadError, uploadSuccess, switchStem,
} from '../redux/upload/actions';
import { API_BASE } from '../constants';
import theme from '../theme';

const { Dragger } = Upload;

const props = (access, stems, onSuccess, onError, onStart) => ({
  action: `${API_BASE}/post_file`,
  method: 'post',
  data: { stems },
  supportServerRender: true,
  showUploadList: false,
  onChange: (info) => {
    const { status } = info.file;
    if (status === 'uploading') {
      console.log('uploading');
      onStart(info.file);
    }
    if (status === 'done') {
      console.log('done');
    } else if (status === 'error') {
      console.log('error');
    }
    if (info.file.response && info.file.response.data) { onSuccess(info.file); } else if (info.file.response && info.file.response.error) {
      onError(info.file.response.error);
    }
  },
  headers: {
    token: access,
  },
});

const onSuccess = (dispatch) => (data) => dispatch(uploadSuccess(data));
const onError = (dispatch) => (data) => { dispatch(uploadError(data)); };
const onStart = (dispatch) => (data) => dispatch(uploadStarted(data));

const DragUpload = ({ style }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const stems = useSelector((state) => state.upload.stems);
  return (
    <div style={style}>
      <div style={{ textAlign: 'center', marginTop: theme.spacing.medium, marginBottom: theme.spacing.medium }}>
        <StemsSelect />
      </div>
      <Dragger {...props(token, stems, onSuccess(dispatch), onError(dispatch), onStart(dispatch))}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Supported formats: mp3, wav
        </p>
        <p className="ant-upload-hint">
          Max file size: 30 mb
        </p>
      </Dragger>
      <PremiumWarning style={{ marginTop: theme.spacing.tiny }} max={7} />
    </div>
  );
};

const PremiumMessage = ({ num, max }) => (
  <span>
    You have
    {' '}
    {num}
    {' '}
    of your
    {' '}
    {max}
    {' '}
    free weekly uploads.
  </span>
);

const PremiumWarning = ({ max, style }) => {
  const data = useSelector((state) => state.api.count.data);
  return (
    <Alert style={style} message={<PremiumMessage num={max - (data || 0)} max={max} />} type="warning" showIcon />
  );
};

const StemsSelect = ({ style, disabled }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p style={{ ...theme.fonts.tiny, color: theme.colors.textPrimary[7], marginBottom: theme.spacing.small }}>
        Choose an output option
        {disabled && '(premium only)'}
      </p>
      <Radio.Group disabled={disabled} style={style} buttonStyle="solid" onChange={(val) => dispatch(switchStem(val.target.value))} defaultValue="2">
        <Radio.Button value="2">Vocals, and instrumental</Radio.Button>
        <Radio.Button value="4">Vocals, drums, bass, and others</Radio.Button>
      </Radio.Group>
    </>
  );
};

export default DragUpload;
