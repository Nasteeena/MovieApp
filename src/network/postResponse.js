const postRequest = async (token, filmId, url, fav) => {
    if(token) {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({media_type: 'movie', media_id: filmId, favorite: fav})
        };

        try {
            const response = await fetch(url, options);
            if(!response.ok) {
                console.error('Could not fetch. ' + response.status);
                return false;
            }
            return await response.json();
        } catch (error) {
            console.error('Could not fetch. ' + error.message);
            return false;
        }
    }
};

export default postRequest;