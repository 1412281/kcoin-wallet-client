import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Block from "./listBlock";

export default class Home extends Component {

    componentDidMount() {
        console.log(this.props.blocks);
        const {limit, page} = this.props;
        // this.props.dispatch(fetchPublicTransactions(limit, page));
        // this.props.fetchPublicTransactions(limit, page);
    }


    handleButtonNext() {
        const {limit, page} = this.props;
        this.props.fetchPublicTransactions(limit, page + 1);

    }
    handleButtonPrevious() {
        const {limit, page} = this.props;
        const {fetchPublicTransactions} = this.props;

        fetchPublicTransactions(limit, page - 1);

    }

    render() {
        const {blocks, fetching} = this.props;
        const isEmpty = blocks.length === 0;
        console.log(fetching);
        return(
            <div>
                <h1>Lastest blocks</h1>
                <div>
                    {isEmpty ? (!fetching ? <h2>Empty...</h2> : <h2>Loading...</h2>) :
                        <Block data={blocks}/>
                    }
                </div>

                <Button onClick={() => this.handleButtonPrevious()}>Previous</Button>
                <Button onClick={() => this.handleButtonNext()}>Next</Button>

            </div>


        );
    };
}

