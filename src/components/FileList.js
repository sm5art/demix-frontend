import React from 'react';

import { API_BASE } from '../constants';
import { sleep } from '../utils/promise';
import { rhythm } from '../utils/typography';
import { isClient } from '../utils/client';

const WAIT = 1000;
const TOP_MARGIN = 0.7;

const getToken = () => window.localStorage.getItem('access')

const getFilesForUser = () => {
    return new Promise((res, rej) => {
        const token = isClient ? getToken() : null;
        if(!token) rej();
        fetch(API_BASE+'/files', {
            method: 'GET',
            headers: {token}
        }).then(response=>response.json()).then(res).catch(rej)
    });
    
}

class FileList extends React.Component {
    state = {
        data: null
    }
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        sleep(WAIT).then(()=>getFilesForUser().then(data=>this.setState({data})))
    }

    render() {
        const { data } = this.state;
        return <div style={{marginTop: rhythm(TOP_MARGIN)}}>
            <h2>Uploaded files</h2>
            <ul>
                {data && data.map(e=><li>{e.filename}</li>)}
            </ul>
        </div>
    }
}

export default FileList;