import React from 'react';
import PropTypes from 'prop-types';

import companyLogo from '../images/company-logo.jpg';

const PhotoContainer = ({ photos, searchTerm }) => {
    const renderImages = () => {
        let images;
        if (photos.length !== 0) {
            images = photos.map(photo => {
                const imgUrl = photo.urls.small;
                const author = photo.user.name;
                const authorImg = photo.user.profile_image.small;
                const userUrl = `${photo.user.links.html}?utm_source=kroon_image_search_app&utm_medium=referral`;

                return (
                    <article className="PhotoCard" key={photo.id}>
                        <div className="gray-layer"></div>
                        <div className="hover-overlay"></div>
                        <a
                            href={imgUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="PhotoCard__photo-link"
                        >
                            <img
                                src={imgUrl}
                                alt="images"
                                className="PhotoCard__photo"
                            />
                        </a>
                        <p className="PhotoCard__author">
                            <a
                                href={userUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={authorImg}
                                    alt="author-img"
                                    className="PhotoCard__author-img"
                                />
                                {author}
                            </a>
                            <span>on</span>
                            <a
                                href="https://unsplash.com"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                Unsplash
                                </a>
                        </p>
                    </article>
                );
            });
        }
        
        return images;
    }

    return (
        <div className="PhotoContainer">
            {photos.length === 0
                && (
                    <div className="PhotoContainer__logo-wrapper">
                        <img
                            src={companyLogo}
                            alt="company-logo"
                            className="PhotoContainer__photo"
                        />
                    </div>
                )
            }
            {photos.length > 0
                && (
                    <div className="PhotoContainer__outer-wrapper">
                        <h2 className="PhotoContainer__title">Results for: {searchTerm}</h2>
                        <div className="PhotoContainer__content">
                            {renderImages()}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

PhotoContainer.propTypes = {
    photos: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default PhotoContainer;