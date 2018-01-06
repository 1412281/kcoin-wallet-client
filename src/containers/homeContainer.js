import {connect} from 'react-redux'
import Home from '../components/home'

import {
    fetchPublicBlocks,
} from '../actions/blockActions'

const mapStateToProps = (state) => {
    return {
        limit: state.block.limit,
        page: state.block.page,
        // transactions: state.transactionPublic.transactions,
        blocks: state.block.blocks,
        fetching:  state.block.fetching,
        fetched: state.block.fetched
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPublicBlocks: (limit, page) => dispatch(fetchPublicBlocks(limit, page)),
    }
};



const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;

