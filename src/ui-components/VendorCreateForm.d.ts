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
export declare type VendorCreateFormInputValues = {
    vendor_id?: string;
    company_name?: string;
    owner_name?: string;
    email?: string;
    phone?: string;
    payable_amount?: number;
    billing_address?: string;
    vendor_status?: string;
    garin?: string;
    shipping_address?: string;
};
export declare type VendorCreateFormValidationValues = {
    vendor_id?: ValidationFunction<string>;
    company_name?: ValidationFunction<string>;
    owner_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    payable_amount?: ValidationFunction<number>;
    billing_address?: ValidationFunction<string>;
    vendor_status?: ValidationFunction<string>;
    garin?: ValidationFunction<string>;
    shipping_address?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VendorCreateFormOverridesProps = {
    VendorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    vendor_id?: PrimitiveOverrideProps<TextFieldProps>;
    company_name?: PrimitiveOverrideProps<TextFieldProps>;
    owner_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    payable_amount?: PrimitiveOverrideProps<TextFieldProps>;
    billing_address?: PrimitiveOverrideProps<TextFieldProps>;
    vendor_status?: PrimitiveOverrideProps<SelectFieldProps>;
    garin?: PrimitiveOverrideProps<TextFieldProps>;
    shipping_address?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VendorCreateFormProps = React.PropsWithChildren<{
    overrides?: VendorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VendorCreateFormInputValues) => VendorCreateFormInputValues;
    onSuccess?: (fields: VendorCreateFormInputValues) => void;
    onError?: (fields: VendorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VendorCreateFormInputValues) => VendorCreateFormInputValues;
    onValidate?: VendorCreateFormValidationValues;
} & React.CSSProperties>;
export default function VendorCreateForm(props: VendorCreateFormProps): React.ReactElement;
