
const notFound = (res) => {
    return res.status(404).send("not found")
}

export default notFound