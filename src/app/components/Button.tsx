"use client";

import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            disabled={disabled}
            className={clsx(
                "py-2.5 px-5 bg-gray-900 text-zink-50 text-base text-center font-medium rounded",
                disabled ? "text-zinc-100" : "hover:bg-gray-800 active:bg-gray-950"
            )}
        />
    );
}
