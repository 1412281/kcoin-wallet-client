import React, {Component} from 'react';
import {Col, Grid, Row, Pager} from 'react-bootstrap';
import ListBlock from "./listBlock";

export default class Home extends Component {

    componentDidMount() {
        console.log(this.props.blocks);
        const {limit, page} = this.props;
        this.props.fetchPublicBlocks(limit, page);
    }


    handleButtonNext() {
        const {limit, page} = this.props;
        this.props.fetchPublicBlocks(limit, page + 1);

    }
    handleButtonPrevious() {
        const {limit, page} = this.props;
        this.props.fetchPublicBlocks(limit, page - 1);

    }

    render() {
        const {blocks, fetching} = this.props;
        const isEmpty = blocks === 0;
        console.log(fetching);
        return(
            <Grid>
                <Row className="show-grid">
                    <Col md={12} >
            <div>
                <h1>Lastest blocks</h1>
                <div>
                    {isEmpty ? (!fetching ? <h2>Empty...</h2> : <h2>Loading...</h2>) :
                        <ListBlock data={blocks}/>
                    }
                </div>
                <Pager>
                    <Pager.Item onClick={() => this.handleButtonPrevious()}>
                        &larr; Previous Page
                    </Pager.Item>{' '}
                    <Pager.Item onClick={() => this.handleButtonNext()}>
                        Next Page &rarr;
                    </Pager.Item>
                </Pager>


            </div>
                    </Col>
                </Row>
            </Grid>

        );
    };
}

