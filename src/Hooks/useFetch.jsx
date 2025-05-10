import React from 'react'

export const useFetch = () => {

    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null)
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
            if (!response.ok) throw new Error(json.message)
                setLoading(false)
            return json
        } catch (error) {
            json = null
            setLoading(false)
            setError(error.message)
            throw error
        } finally {
            setData(json)
            setLoading(false)
            return {response, json}
        }
    }, [])

    return {
        data,
        error,
        loading,
        request
    }
}

export default useFetch