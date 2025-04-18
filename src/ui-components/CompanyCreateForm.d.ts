/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CompanyCreateFormInputValues = {
    company_name?: string;
    owner_name?: string;
    gstin?: string;
    billing_address?: string;
    email?: string;
    phone?: string;
    gst_category?: string;
    adminID?: string;
    shipping_address?: string;
    pincode?: string;
    city?: string;
    state?: string;
    country?: string;
};
export declare type CompanyCreateFormValidationValues = {
    company_name?: ValidationFunction<string>;
    owner_name?: ValidationFunction<string>;
    gstin?: ValidationFunction<string>;
    billing_address?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    gst_category?: ValidationFunction<string>;
    adminID?: ValidationFunction<string>;
    shipping_address?: ValidationFunction<string>;
    pincode?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CompanyCreateFormOverridesProps = {
    CompanyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    company_name?: PrimitiveOverrideProps<TextFieldProps>;
    owner_name?: PrimitiveOverrideProps<TextFieldProps>;
    gstin?: PrimitiveOverrideProps<TextFieldProps>;
    billing_address?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    gst_category?: PrimitiveOverrideProps<TextFieldProps>;
    adminID?: PrimitiveOverrideProps<TextFieldProps>;
    shipping_address?: PrimitiveOverrideProps<TextFieldProps>;
    pincode?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CompanyCreateFormProps = React.PropsWithChildren<{
    overrides?: CompanyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CompanyCreateFormInputValues) => CompanyCreateFormInputValues;
    onSuccess?: (fields: CompanyCreateFormInputValues) => void;
    onError?: (fields: CompanyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CompanyCreateFormInputValues) => CompanyCreateFormInputValues;
    onValidate?: CompanyCreateFormValidationValues;
} & React.CSSProperties>;
export default function CompanyCreateForm(props: CompanyCreateFormProps): React.ReactElement;
