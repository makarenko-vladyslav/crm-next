"use client";

import React from "react";
import { Field } from "formik";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={id} className="text-base mb-2 color-gray-900">
                    {label}
                </label>
            )}
            <Field
                {...rest}
                id={id}
                className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
            />
        </div>
    );
}
