import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';

class  PostShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params

        this.props.fetchPost(id);
        
        this.buildPlayer();
        
    }

    buildPlayer() {
        if(this.pplayer || !this.props.post) {
            return;
        }

        const { id } = this.props.match.params;

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if(!this.props.post) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.post;
        
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchPost })(PostShow);
