import React from "react";

import Toolbar from "@/app/components/Toolbar";
import SearchInput from "@/app/components/SearchInput";
import AddPromotionButton from "@/app/components/add-promotion-button";

export interface PageProps {
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    return (
        <Toolbar action={<AddPromotionButton companyId={params.id} />}>
            <SearchInput />
        </Toolbar>
    );
}
