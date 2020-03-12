import React from "react"

import { Button, Upload, Icon, Alert } from 'antd';
import { API_BASE } from '../constants';
import { isClient } from '../utils/client';
import { sleep } from "../utils/promise";

const getToken = () => window.localStorage.getItem('access')
const ERROR_POPUP_DURATION = 3000;

const props = (access, onError) => ({
    action: `${API_BASE}/post_file`,
    method:'post',
    onChange: (file)=>{
      if(file.file.response && file.file.response.data_id)
        window.open(`${API_BASE}/result/${file.file.response.data_id}`)
      else if (file.file.response && file.file.response.error){
        onError(file.file.response.error).then();
      }
    },
    headers: {
      token: access || (isClient ? getToken() : null )
    }
  })

class UploadContainer extends React.Component {
  state = {error: null}
  constructor(props, context) {
    super(props, context);
    this.onError = this.onError.bind(this);
  }

  onError(error) {
    return new Promise(res=>{
      this.setState({error: error})
      sleep(ERROR_POPUP_DURATION).then(()=>{this.setState({error: null}); res();});
    });
  }

  render () {
    const { access } = this.props;
    const { error } = this.state;
    return (<Upload {...props(access, this.onError)}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
      { error &&  <Alert type="error" message={error} banner />}
    </Upload>);
  }   
}




export default UploadContainer;