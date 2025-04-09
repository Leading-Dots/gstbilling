/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Vendor } from "../API.ts";
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
export declare type VendorUpdateFormInputValues = {
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
export declare type VendorUpdateFormValidationValues = {
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
export declare type VendorUpdateFormOverridesProps = {
    VendorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type VendorUpdateFormProps = React.PropsWithChildren<{
    overrides?: VendorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vendor?: Vendor;
    onSubmit?: (fields: VendorUpdateFormInputValues) => VendorUpdateFormInputValues;
    onSuccess?: (fields: VendorUpdateFormInputValues) => void;
    onError?: (fields: VendorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VendorUpdateFormInputValues) => VendorUpdateFormInputValues;
    onValidate?: VendorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VendorUpdateForm(props: VendorUpdateFormProps): React.ReactElement;
