import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ totalPages, filterPhotos }) => {

    const handleSelect = event => {
        const selectedItem = event.target.value;

        filterPhotos(selectedItem);
    }

    return (

        <div className="Filter">
            <label>Sort by:</label>
            <select
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
};

export default Filter;