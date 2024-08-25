"use client";

import React from "react";
import Button from "@/app/components/Button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const CompanyFormModal = dynamic(() => import("./CompanyFormModal"), { ssr: false });

export default function AddCompanyButton() {
    const router = useRouter();

    return <Button onClick={() => router.push("/companies/new")}>Add company</Button>;
}
