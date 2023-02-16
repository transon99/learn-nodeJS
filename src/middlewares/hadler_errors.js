import createError from 'http-errors';

export const badResquest = (err, res) => {
    const error = createError.BadRequest(err);
    return res.status(error.status).json({
        err: 1,
        msg: error.message
    })
}

export const notFound = (req, res) => {
    const error = createError.NotFound('this page is not defined');
    return res.status(error.status).json({
        err: 1,
        msg: error.message
    })
}