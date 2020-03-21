import React from 'react';
import { connect } from 'react-redux';

import theme from '../theme';
import { files } from '../redux/api/actions';
import { getFilesForUser } from '../api';


class FileList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const { files } = this.props;
        files();
    }

    render() {
        const { data, style } = this.props;
        return <div style={{marginTop: theme.spacing.medium, ...style}}>
            <h2>Uploaded files</h2>
            <ul>
                {data && data.map(e=><li>{e.filename}</li>)}
            </ul>
        </div>
    }
}

const mapState = state => ({data: state.api.data['FILES']})
const mapDispatch = dispatch => ({files: ()=>dispatch(files())})
export default connect(mapState, mapDispatch)(FileList);