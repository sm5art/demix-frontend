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
        const { style, currentUpload, uploading, stems } = this.props;
        let { data } = this.props;
        data = Object.assign([], data);
        if(currentUpload && uploading) {
            data.unshift({filename: currentUpload.name, loading: uploading, stems})
            console.log(data)
        }
        return <div style={{...style}}>
            <h2 style={{...theme.fonts.medium}}>Processed files</h2>
            { data && <ListS data={data}/> }
        </div>
    }
}

const ListS = ({data}) => (
    <List
        style={{overflow: 'hidden', background: theme.colors.textPrimary[0]}}
        bordered
        dataSource={data}
        renderItem={item => (
            <FileItem loading={item.loading} filename={item.filename} date={item.date} id={item._id} stems={item.stems}/>
        )}
  />
)

const FileItem = ({filename, date, id, stems, loading}) => (
    <List.Item
            actions={id ? [<a href={`${API_BASE}/result/${id}`} target="_blank"><DownloadOutlined /></a>,]: []}
        >
        <List.Item.Meta
            style={{overflow: 'hidden'}}
            title={filename}
            description={date}
        />

        <div>
            <span>{stems} stem</span>
            { loading && <Spin style={{marginLeft: theme.spacing.small}}/>}
        </div>
    </List.Item>
);

const mapState = state => ({data: state.api.files.data, currentUpload: state.upload.data, uploading: state.upload.loading, stems: state.upload.stems})
const mapDispatch = dispatch => ({files: ()=>dispatch(files())})
export default connect(mapState, mapDispatch)(FileList);