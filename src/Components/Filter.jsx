import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ totalPages, filterPhotos, filterTerm }) => {

    const handleSelect = event => {
        const selectedItem = event.target.value;

        filterPhotos(selectedItem);
    }

    return (

        <div className="Filter">
            <label htmlFor="selectPhotos">Sort by:</label>
            <select
                id="selectPhotos"
                onChange={handleSelect}
                className={`FilterSelect ${totalPages === null ? "FilterSelect--disabled" : ""}`}
            >
                <option value="">All</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="squarish">Squarish</option>
            </select>
        </div>
    );
}

Filter.propTypes = {
    totalPages: PropTypes.number,
    filterPhotos: PropTypes.func.isRequired,
    filterTerm: PropTypes.string.isRequired
};

export default Filter;