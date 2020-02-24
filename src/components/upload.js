import React from "react"

import { Button, Upload, Icon } from 'antd';
import { API_BASE } from '../constants';

const props = {
    action: API_BASE,
    method:'post',
    onChange: (file)=>{
      if(file.file.response)
        window.open(`${API_BASE}/result/${file.file.response.data_id}`)
    }
  }
const UploadContainer = () => 
(<Upload {...props}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>);

export default UploadContainer;