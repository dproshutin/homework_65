import React, {Component} from 'react';

class PageLoader extends Component {
    render() {
        const {match: {params}} = this.props;

        const {page} = params;
        return (
            <div>
                <p>
                    {page}
                </p>
            </div>
        );
    }
}

export default PageLoader;