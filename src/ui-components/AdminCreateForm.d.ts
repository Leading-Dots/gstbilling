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
export declare type AdminCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    subscriptionPlanID?: string;
    company_id?: string;
    userID?: string;
};
export declare type AdminCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    subscriptionPlanID?: ValidationFunction<string>;
    company_id?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminCreateFormOverridesProps = {
    AdminCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    subscriptionPlanID?: PrimitiveOverrideProps<TextFieldProps>;
    company_id?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminCreateFormProps = React.PropsWithChildren<{
    overrides?: AdminCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdminCreateFormInputValues) => AdminCreateFormInputValues;
    onSuccess?: (fields: AdminCreateFormInputValues) => void;
    onError?: (fields: AdminCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdminCreateFormInputValues) => AdminCreateFormInputValues;
    onValidate?: AdminCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdminCreateForm(props: AdminCreateFormProps): React.ReactElement;
