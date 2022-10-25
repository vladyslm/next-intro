import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {FamilyDTO} from "../dtos/familyDTO";


const Member = () => {
    const [member, setMember] = useState<FamilyDTO>();

    const getMember = async () => {
        // use window.location.href, because next router works weird
        // after a refresh the query value is undefined
        const href = window.location.href.split("/");
        const name = href[href.length - 1];
        const url = `/api/family-members?name=${name}`;

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                if (data?.success) {
                    setMember(data?.data[0]);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        getMember();
    }, [])

    return (
        <>
            {member && <h2>{`Name: ${member.name}`}</h2>}
            {member && <h3>{`Role: ${member.role}`}</h3>}
        </>
    )
}

export default Member
