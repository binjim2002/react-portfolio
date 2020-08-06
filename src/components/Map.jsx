import React from 'react';

const Map = () => {
    return (
        <div>
            <h2 className="text-center">Where to find me</h2>
            <iframe className="w-100" src="https://maps.google.com/maps?q=atlanta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                allowfullscreen></iframe>
        </div>
    );
};

export default Map;