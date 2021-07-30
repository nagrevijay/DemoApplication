const fetchData = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    const json = await res.json()
    return json.result
}
export default fetchData;
