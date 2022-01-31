import { Model } from 'mongoose';
import { Request, Response, Router } from 'express';

export default function <T>(collection: Model<T>) {
    const create = (req: Request, res: Response) => {
        const newEntry = req.body;
        collection.create(newEntry, (e, newEntry) => {
            if (e) {
                console.log(e);
                res.sendStatus(500);
            } else {
                res.send(newEntry);
            }
        });
    };

    const readMany = (req: Request, res: Response) => {
        let query = res.locals.query || {};

        collection.find(query, (e, result) => {
            if (e) {
                res.status(500).send(e);
                console.log(e.message);
            } else {
                res.send(result);
            }
        });
    };

    const readOne = (req: Request, res: Response) => {
        const { _id } = req.params;

        collection.findById(_id, (e: any, result: any) => {
            if (e) {
                res.status(500).send(e);
                console.log(e.message);
            } else {
                res.send(result);
            }
        });
    };

    const update = (req: Request, res: Response) => {
        const changedEntry = req.body;
        collection.update({ _id: req.params._id }, { $set: changedEntry }, (e: any) => {
            if (e) res.sendStatus(500);
            else res.sendStatus(200);
        });
    };

    const remove = (req: Request, res: Response) => {
        collection.remove({ _id: req.params._id }, (e) => {
            if (e) res.status(500).send(e);
            else res.sendStatus(200);
        });
    };

    let router = Router();

    router.post('/', create);
    router.get('/', readMany);
    router.get('/:_id', readOne);
    router.put('/:_id', update);
    router.delete('/:_id', remove);

    return router;
}
