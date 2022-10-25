import {NextApiRequest, NextApiResponse} from "next";
import {FamilyDTO} from "../../dtos/familyDTO";
import {clearParseAndGenerateServicesCalls} from "@typescript-eslint/typescript-estree/dist/parser";

type ResponseBody = {
    success: boolean,
    data: FamilyDTO[]
}

const familyMembers: FamilyDTO[] = [
    {
        name: "Baby Shark",
        role: "baby"
    },
    {
        name: "Mommy Shark",
        role: "mom"
    },
    {
        name: "Daddy Shark",
        role: "dad"
    },
    {
        name: "Grandma Shark",
        role: "grandma"
    },
    {
        name: "Grandpa Shark",
        role: "grandpa"
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseBody>) {
    switch (req.method) {
        case "POST":
            const data: FamilyDTO = req.body;
            if (data?.name !== "" && data?.role !== "") {
                const record: FamilyDTO = {name: data.name, role: data.role};
                familyMembers.push(record);
                res.status(201).json({success: true, data: []});
                break;
            }
            res.status(400).json({success: false, data: []});
            break;
        case "GET":
            const {name} = req.query;
            if (name) {
                const shark = familyMembers.find((member => member.name === name));
                if (shark) res.status(200).json({success: true, data: [shark]});
                res.end();
                break;
            }
            res.status(200).json({success: true, data: familyMembers});
            break;
    }

    // const { name } = req.query;
    // if (name){
    //     const shark = familyMembers.find((member => member.name===name));
    //     if (shark) res.status(200).json({success:true, data: [shark]});
    //     res.end();
    //     return;
    // }
    // res.status(200).json({success: true, data: familyMembers});
}
