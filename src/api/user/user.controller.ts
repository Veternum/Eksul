import { Request, Response } from 'express';

export const index = async (req: Request, res: Response) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
}

export const create = async (req: Request, res: Response) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
}

export const remove = async (req: Request, res: Response) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
}

export const update = async (req: Request, res: Response) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
}

