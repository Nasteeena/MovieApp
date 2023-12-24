const getRequest = async (token, url) => {
    if(token) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
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

export default getRequest;