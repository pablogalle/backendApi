const Serie = require('../models/serie.model');

const serieCtrl = {};

serieCtrl.addSerie = async (req, res) => {
    const mySerie = new Serie(req.body);
    await mySerie.save()
        .then(() => {
            res.json({message: 'Serie Successfully Inserted'})
        })
        .catch(err => res.send(err.message));
}

serieCtrl.getSeries = async (req, res) => {
    const series = await Serie.find()   /* TODO: .sort({name: "desc"})*/
        .then((data) => res.json(data))
        .catch((err) => console.log(err));
}

serieCtrl.getSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
        .then((data) => {
            if (data != null) res.json(data)
            else res.json({message: "Serie doesn't exist"})
        })
        .catch(err => console.log(err));

}

serieCtrl.getSerieName = async (req, res) => {
    const serie = await Serie.find({title: req.params.name})
        .then((data) => {
            if (data != null) res.json(data)
            else res.json({message: "Serie doesn't exist"})
        })
        .catch(err => console.log(err));

}

serieCtrl.getSeriesGenre = async (req, res) => {
    const series = await Serie.find({ "genres.name" : req.params.genre})
        .then((data) => {
            if (data != null) res.json(data)
            else res.json({message: "Genre doesn't exist"})
        })
        .catch(err => console.log(err));
}

serieCtrl.updateSerie = async (req, res) => {
    const serie = req.body;
    await Serie.findByIdAndUpdate(
        req.params.id,
        {$set: serie},
        {new: true}
    )
        .then((data) => {
            if (data != null) res.json({message: 'Series Successfully Updated'})
            else res.json({message: "Series doesn't exist"})
        })
        .catch(err => res.send(err.message));


}
serieCtrl.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id)
        .then((data) => {
            if (data != null) res.json({message: 'Movie Successfully Deleted'})
            else res.json({message: "Serie doesn't exist"})
        })
        .catch(err => res.send(err.message));
}

serieCtrl.getGenres = async (req, res) => {
    await Serie.find().distinct("genres")
        .then((data) => res.json(data))
        .catch((err) => console.error(err))
}


module.exports = serieCtrl;