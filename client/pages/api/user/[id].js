import db from '../../../utils/db/firebase_db'

export default (req, res) => {
    return new Promise((resolve, reject) => {
        db
            .collection('users')
            .doc(req.query.id)
            .get()
            .then((doc) => {
                res.json({...doc.data(), id: req.query.id});
                resolve()
            })
            .catch((error) => {
                res.json({ error });
                resolve()
            });
    })
};

