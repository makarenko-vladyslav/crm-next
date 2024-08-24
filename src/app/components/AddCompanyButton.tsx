"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";
import dynamic from "next/dynamic";

const CompanyFormModal = dynamic(() => import("./CompanyFormModal"), { ssr: false });

export default function AddCompanyButton() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button className="caret-white" onClick={() => setShowModal(true)}>
                Add company
            </Button>
            <CompanyFormModal
                onSubmit={console.log}
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
}
