import Head from "next/head";
import Router from "next/router"
import React, {useState} from "react";
import {FamilyDTO} from "../dtos/familyDTO";

function AddMember() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value);
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name !== "" && role !== "") {
            const data: FamilyDTO = {name, role};
            const res = await fetch("http://localhost:3000/api/family-members", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await res.json();
            if (resData.success) {
                await Router.push("/");
            } else {
                console.error("Hmmm, something went wrong...");
            }

        }
    }


    return (
        <>
            <Head>
                <title>Add member</title>
            </Head>
            <h1>Add Member</h1>
            <form className="add-form" onSubmit={onSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={onNameChange}/>
                </label>
                <label>
                    Role:
                    <input type="text" name="role" onChange={onRoleChange}/>
                </label>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default AddMember
