import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            errorMessage: '',
        };
    }

    handleInputChange = event => {
        const { value } = event.target;

        this.setState({ searchTerm: value, searchError: false });
    }

    handleSearch = event => {
        event.preventDefault();

        const { searchTerm } = this.state;

        if (searchTerm === '') {
            this.setState({
                errorMessage: 'You can\'t search with an empty input field',
            });
            return;
        }

        this.props.onSearch(searchTerm);

        this.setState({ searchTerm: '' });

    }

    clearError = () => {
        this.setState({ errorMessage: '' });
    }

    render() {
        const { errorMessage } = this.state;
        const { totalPhotos } = this.props;

        return (
            <form className="SearchBar" onBlur={this.clearError}>
                <div className="SearchBar__content">
                    <div className="SearchBar__input-wrapper">
                        <label htmlFor="searchInput" className="SearchBar__label">Hey, try typing something...</label>
                        <input
                            className={`SearchBar__input ${errorMessage ? "SearchBar__input--error" : ""}`}
                            id="searchInput"
                            type="search"
                            autoComplete="off"
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="SearchBar__btn-wrapper">
                        <button
                            className="SearchBar__btn"
                            onClick={this.handleSearch}
                        >
                            <i className="fas fa-search SearchBar__btn-icon"></i>
                            Search
                    </button>
                    </div>
                </div>
                {errorMessage
                    && <p className="SearchBar__error-msg">{errorMessage}</p>
                }
                {totalPhotos === 0
                    && <p className="SearchCriteria__error">There are no results for this search term</p>
                }
            </form>
        );
    }
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    totalPhotos: PropTypes.number
};

