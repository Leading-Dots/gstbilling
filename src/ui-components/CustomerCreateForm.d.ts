/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerCreateFormInputValues = {
    customer_id?: string;
    company_name?: string;
    owner_name?: string;
    email?: string;
    phone?: string;
    outstanding_amount?: number;
    billing_address?: string;
    customer_status?: string;
    gstin?: string;
    shipping_address?: string;
    city?: string;
    state?: string;
    pincode?: string;
    country?: string;
    pan_number?: string;
    credit_limit?: string;
    note?: string;
    adminID?: string;
};
export declare type CustomerCreateFormValidationValues = {
    customer_id?: ValidationFunction<string>;
    company_name?: ValidationFunction<string>;
    owner_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    outstanding_amount?: ValidationFunction<number>;
    billing_address?: ValidationFunction<string>;
    customer_status?: ValidationFunction<string>;
    gstin?: ValidationFunction<string>;
    shipping_address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    pincode?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    pan_number?: ValidationFunction<string>;
    credit_limit?: ValidationFunction<string>;
    note?: ValidationFunction<string>;
    adminID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerCreateFormOverridesProps = {
    CustomerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customer_id?: PrimitiveOverrideProps<TextFieldProps>;
    company_name?: PrimitiveOverrideProps<TextFieldProps>;
    owner_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    outstanding_amount?: PrimitiveOverrideProps<TextFieldProps>;
    billing_address?: PrimitiveOverrideProps<TextFieldProps>;
    customer_status?: PrimitiveOverrideProps<SelectFieldProps>;
    gstin?: PrimitiveOverrideProps<TextFieldProps>;
    shipping_address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    pincode?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    pan_number?: PrimitiveOverrideProps<TextFieldProps>;
    credit_limit?: PrimitiveOverrideProps<TextFieldProps>;
    note?: PrimitiveOverrideProps<TextFieldProps>;
    adminID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerCreateFormInputValues) => CustomerCreateFormInputValues;
    onSuccess?: (fields: CustomerCreateFormInputValues) => void;
    onError?: (fields: CustomerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerCreateFormInputValues) => CustomerCreateFormInputValues;
    onValidate?: CustomerCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerCreateForm(props: CustomerCreateFormProps): React.ReactElement;
