/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SubscriptionPlan } from "../API.ts";
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
export declare type SubscriptionPlanUpdateFormInputValues = {
    title?: string;
    description?: string;
    cost?: string;
    users?: number;
    isPaid?: boolean;
};
export declare type SubscriptionPlanUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
    users?: ValidationFunction<number>;
    isPaid?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubscriptionPlanUpdateFormOverridesProps = {
    SubscriptionPlanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    users?: PrimitiveOverrideProps<TextFieldProps>;
    isPaid?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type SubscriptionPlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubscriptionPlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    subscriptionPlan?: SubscriptionPlan;
    onSubmit?: (fields: SubscriptionPlanUpdateFormInputValues) => SubscriptionPlanUpdateFormInputValues;
    onSuccess?: (fields: SubscriptionPlanUpdateFormInputValues) => void;
    onError?: (fields: SubscriptionPlanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubscriptionPlanUpdateFormInputValues) => SubscriptionPlanUpdateFormInputValues;
    onValidate?: SubscriptionPlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubscriptionPlanUpdateForm(props: SubscriptionPlanUpdateFormProps): React.ReactElement;
