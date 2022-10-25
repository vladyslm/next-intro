import type {NextPage} from 'next'
import Image from "next/image";
import sharkImg from "../public/shark.jpg"
import Head from "next/head";
import {useEffect, useState} from "react";
import {FamilyDTO} from "../dtos/familyDTO";
import Link from "next/link";

const Home: NextPage = () => {
    const [members, setMembers] = useState<FamilyDTO[]>([]);

    const getMembers = async () => {
        fetch("/api/family-members")
            .then(res => res.json())
            .then((data) => {
                if (data?.success) {
                    setMembers(data?.data);
                }
            });
    }

    useEffect(() => {
        getMembers();
    }, [])

    const listMembers = members.map(({name, role}: FamilyDTO) => {
        return (
            <li key={`${name}-${role}`}>
                <Link href={name}>{`${name} --- ${role}`}</Link>
            </li>
        )
    })

    return (
        <div>
            <Head>
                <title>Shark Family</title>
            </Head>
            <Image
                priority={true}
                src={sharkImg}
                height={250}
                width={350}
                layout={"fixed"}
                alt={"Shark family"}
            />
            <h1>Family Members:</h1>
            <ul>{listMembers}</ul>
        </div>
    )
}

export default Home
