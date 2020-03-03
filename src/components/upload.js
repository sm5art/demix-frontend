import React from "react"

import { Button, Upload, Icon } from 'antd';
import { API_BASE } from '../constants';
import { isClient } from '../utils/client';

const getToken = () => window.localStorage.getItem('access')

const props = (access) => ({
    action: `${API_BASE}/post_file`,
    method:'post',
    onChange: (file)=>{
      if(file.file.response)
        window.open(`${API_BASE}/result/${file.file.response.data_id}`)
    },
    headers: {
      token: access || (isClient ? getToken() : null )
    }
  })
const UploadContainer = ({access}) => 
(<Upload {...props(access)}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>);

export default UploadContainer;