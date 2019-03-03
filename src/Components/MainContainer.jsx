import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";

import { searchPhotos } from '../Redux/actions/searchPhotos';
import { filterPhotos } from '../Redux/actions/filterPhotos';

import Header from './Header';
import SearchBar from './SearchBar';
import PhotoContainer from './PhotoContainer';
import Filter from './Filter';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            searchTerm: '',
            filterTerm: '',
        };
    }

    onSearchRequest = searchTerm => {
        this.props.searchPhotos(searchTerm, 1);
        this.setState({
            searchTerm,
            activePage: 1,
            filterTerm: ''
        });
    }

    handlePageChange = activePage => {
        this.setState({ activePage });
        const { searchTerm, filterTerm } = this.state;

        if (filterTerm === '') {
            this.props.searchPhotos(searchTerm, activePage);
        } else {
            this.props.filterPhotos(searchTerm, activePage, filterTerm);
        }
    }

    filterPhotos = filterValue => {
        this.setState({ filterTerm: filterValue });

        const { searchTerm, activePage } = this.state;

        if (filterValue === '') {
            this.props.searchPhotos(searchTerm, activePage);
        } else {
            this.props.filterPhotos(searchTerm, activePage, filterValue);
        }
    }

    render() {
        const { photos, totalPages, totalPhotos } = this.props;
        const { searchTerm, filterTerm } = this.state;

        return (
            <div className="MainContainer">
                <Header />
                <SearchBar onSearch={this.onSearchRequest} totalPhotos={totalPhotos} />
                <Filter totalPages={totalPages} filterPhotos={this.filterPhotos} filterTerm={filterTerm}/>
                <PhotoContainer photos={photos} searchTerm={searchTerm} />
                {totalPages > 0
                    && (
                        <div className="Pagination">
                            <Pagination
                                activePage={this.state.activePage}
                                totalItemsCount={totalPhotos}
                                initialPage={1}
                                pageRangeDisplayed={6}
                                onChange={this.handlePageChange}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        photos: state.photos.photos,
        totalPages: state.photos.totalPages,
        totalPhotos: state.photos.totalPhotos,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        searchPhotos: (searchTerm, activePage) => {
            return dispatch(searchPhotos(searchTerm, activePage));
        },
        filterPhotos: (searchTerm, activePage, filterTerm) => {
            return dispatch(filterPhotos(searchTerm, activePage, filterTerm));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
