import {connect} from 'react-redux'
import Home from '../components/home'

import {
    fetchPublicTransactions,
} from '../actions/transactionActions'

const mapStateToProps = (state) => {
    return {
        limit: state.transactionPublic.limit,
        page: state.transactionPublic.page,
        // transactions: state.transactionPublic.transactions,
        blocks: [{"hash":"00078d1d27cae93b09f1a2769d6ab4008c8db812141ac574970d28604f9ff484","nonce":2553,"version":1,"timestamp":1513958085,"difficulty":3,"transactions":[{"hash":"ce91809664e549f740c38fc6d5364511269a81e589fdcd640eefa652054bf76c","inputs":[{"unlockScript":"KCOIN BLOCKCHAIN BY KHA DO @ QUOINE JP DEC 2017","referencedOutputHash":"0000000000000000000000000000000000000000000000000000000000000000","referencedOutputIndex":-1}],"outputs":[{"value":281190,"lockScript":"ADD aa5f720c8080d81b9bd9781bf85c38c4d24cc010d0536e667f169ac8a5eb72d0"}],"version":1}],"transactionsHash":"ce91809664e549f740c38fc6d5364511269a81e589fdcd640eefa652054bf76c","previousBlockHash":"0000000000000000000000000000000000000000000000000000000000000000"},{"hash":"000023a2169f138d095294b7c23df837a1f1059b1ae338b5287316f16d64307f","nonce":1556,"version":1,"timestamp":1513958560,"difficulty":3,"transactions":[{"hash":"2a68277346418c850a2fcbcfc059d486222689fab237f1b20fe20c8b41a84d9b","inputs":[{"unlockScript":"DATETIME Fri Dec 22 2017 16:02:40 GMT+0000 (UTC)","referencedOutputHash":"0000000000000000000000000000000000000000000000000000000000000000","referencedOutputIndex":-1}],"outputs":[{"value":281190,"lockScript":"ADD aa5f720c8080d81b9bd9781bf85c38c4d24cc010d0536e667f169ac8a5eb72d0"}],"version":1}],"transactionsHash":"2a68277346418c850a2fcbcfc059d486222689fab237f1b20fe20c8b41a84d9b","previousBlockHash":"00078d1d27cae93b09f1a2769d6ab4008c8db812141ac574970d28604f9ff484"},{"hash":"0008f27b6f986dfa58760e4e5d1190031074059c5fc427e0edd202080725f022","nonce":4595,"version":1,"timestamp":1513959176,"difficulty":3,"transactions":[{"hash":"4225e689306c6f2f7681b71e33d9c3f27ef30d51ab87949fb91220783f97d4d4","inputs":[{"unlockScript":"DATETIME Fri Dec 22 2017 16:12:56 GMT+0000 (UTC)","referencedOutputHash":"0000000000000000000000000000000000000000000000000000000000000000","referencedOutputIndex":-1}],"outputs":[{"value":281190,"lockScript":"ADD aa5f720c8080d81b9bd9781bf85c38c4d24cc010d0536e667f169ac8a5eb72d0"}],"version":1}],"transactionsHash":"4225e689306c6f2f7681b71e33d9c3f27ef30d51ab87949fb91220783f97d4d4","previousBlockHash":"000023a2169f138d095294b7c23df837a1f1059b1ae338b5287316f16d64307f"},{"hash":"000a4f5f1c8cac5785e6ee1d615e1009d354089c6030b476498b1dc45b681542","nonce":1588,"version":1,"timestamp":1513959825,"difficulty":3,"transactions":[{"hash":"7d60a271b420f5ee9b2bcab98340b20ad4d8d6e540f1472ac09e2c6de1e15675","inputs":[{"unlockScript":"DATETIME Fri Dec 22 2017 16:23:45 GMT+0000 (UTC)","referencedOutputHash":"0000000000000000000000000000000000000000000000000000000000000000","referencedOutputIndex":-1}],"outputs":[{"value":281190,"lockScript":"ADD aa5f720c8080d81b9bd9781bf85c38c4d24cc010d0536e667f169ac8a5eb72d0"}],"version":1}],"transactionsHash":"7d60a271b420f5ee9b2bcab98340b20ad4d8d6e540f1472ac09e2c6de1e15675","previousBlockHash":"0008f27b6f986dfa58760e4e5d1190031074059c5fc427e0edd202080725f022"}],
        fetching:  state.transactionPublic.fetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPublicTransactions: (limit, page) => dispatch(fetchPublicTransactions(limit, page)),
    }
};



const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;

