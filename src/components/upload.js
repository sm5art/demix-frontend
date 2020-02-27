import React from "react"

import { Button, Upload, Icon } from 'antd';
import { API_BASE } from '../constants';

const props = (access) => ({
    action: API_BASE,
    method:'post',
    onChange: (file)=>{
      if(file.file.response)
        window.open(`${API_BASE}/result/${file.file.response.data_id}`)
    },
    headers: {
      token: window.localStorage.getItem('access') || access
    }
  })
const UploadContainer = ({access}) => 
(<Upload {...props(access)}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>);

export default UploadContainer;