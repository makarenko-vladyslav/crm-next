import React from "react";
import clsx from "clsx";

export enum Status {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending",
    Suspend = "suspend",
}

export interface StatusLabelProps {
    children: React.ReactNode;
    status?: Status;
    disabled?: boolean;
}

export default function StatusLabel({ children, status, disabled }: StatusLabelProps) {
    return (
        <div
            className={clsx(
                "inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium list-none",
                status === Status.Active && "text-green-700 bg-green-100",
                status === Status.Inactive && "text-red-700 bg-red-100",
                status === Status.Pending && "text-orange-700 bg-orange-100",
                status === Status.Suspend && "text-blue-700 bg-blue-100",
                disabled && "opacity-30 cursor-not-allowed bg-gray-300"
            )}
        >
            <div className="h-1 w-1 rounded-full bg-current" />
            {children}
        </div>
    );
}
