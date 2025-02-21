const apiRequest = async (url = '',
    optionsObj = null, errMsg = null) => {

    try {
        const response = await fetch(url, optionsObj)
        if (!response.ok) throw new Error('please reload the app')
    } catch (err) {
        errMsg = err.Message;

    } finally {
        return errMsg;
    }
}

export default apiRequest;
