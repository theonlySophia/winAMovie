const notFound = (req, res) => {
    res.status(404).json({msg:  `Requested Route, ${req.originalUrl} Does Not Exist`})
}

module.exports = notFound;