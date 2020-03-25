import React from 'react';
import { connect } from 'react-redux';
import { Spin, List } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import theme from '../theme';
import { API_BASE } from '../constants';
import { files } from '../redux/api/actions';


class FileList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const { files } = this.props;
        files();
    }

    render() {
        const { data, style, currentUpload, uploading } = this.props;
        return <div style={{...style}}>
            <h2 style={{...theme.fonts.medium}}>Processed files</h2>
            { uploading && <Spin/> }
            { data && <ListS data={data}/> }
        </div>
    }
}

const ListS = ({data}) => (
    <List
        style={{overflow: 'hidden'}}
        bordered
        dataSource={data}
        renderItem={item => (
            <FileItem filename={item.filename} date={item.date} id={item._id}/>
        )}
  />
)

const FileItem = ({filename, date, id}) => (
    <List.Item
            actions={[<a href={`${API_BASE}/result/${id}`} target="_blank"><DownloadOutlined /></a>,]}
        >
        <List.Item.Meta
            title={filename}
            description={date}
        >
            <div>content</div>
        </List.Item.Meta>
    </List.Item>
);

const mapState = state => ({data: state.api.files.data, currentUpload: state.upload.data, uploading: state.upload.loading})
const mapDispatch = dispatch => ({files: ()=>dispatch(files())})
export default connect(mapState, mapDispatch)(FileList);