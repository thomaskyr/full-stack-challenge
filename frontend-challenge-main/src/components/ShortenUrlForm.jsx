/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [shortenURL, setShortenURL] = useState('');

    const isValidURL = (link) => {
        try {
            const linkTest = new URL(link);
        } catch (err) {
            setIsValid(false);
            return false;
        }
        setIsValid(true);
        return true;
    };

    const onChange = useCallback(
        (e) => {
            // TODO: Set the component's new state based on the user's input
            setValue(e.target.value);
        },
        [setValue],
    );

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log(value);
            console.log(isValidURL(value));
            if (isValidURL(value)) {
                fetch('http://localhost:8080/feed/shortUrl', {
                method: 'POST',
                body: JSON.stringify({
                    full: value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(resData => {
                    console.log(resData)
                    setShortenURL(resData.post.short);
                })
                .catch(err => console.log(err));
            // TODO: shorten url and copy to clipboard
            }
        },
        [value, isValidURL],
    );

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="shorten">
                Url:
                <input
                    placeholder="Url to shorten"
                    id="shorten"
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            {/* TODO: show below only when the url has been shortened and copied */}
            <div>{isValid ? shortenURL : "Not valid URL"}</div>
        </form>
    );
};

export default ShortenUrlForm;
