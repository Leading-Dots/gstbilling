/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getVendor } from "../graphql/queries";
import { updateVendor } from "../graphql/mutations";
const client = generateClient();
export default function VendorUpdateForm(props) {
  const {
    id: idProp,
    vendor: vendorModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    vendor_id: "",
    company_name: "",
    owner_name: "",
    email: "",
    phone: "",
    payable_amount: "",
    billing_address: "",
    vendor_status: "",
    gstin: "",
    shipping_address: "",
  };
  const [vendor_id, setVendor_id] = React.useState(initialValues.vendor_id);
  const [company_name, setCompany_name] = React.useState(
    initialValues.company_name
  );
  const [owner_name, setOwner_name] = React.useState(initialValues.owner_name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [payable_amount, setPayable_amount] = React.useState(
    initialValues.payable_amount
  );
  const [billing_address, setBilling_address] = React.useState(
    initialValues.billing_address
  );
  const [vendor_status, setVendor_status] = React.useState(
    initialValues.vendor_status
  );
  const [gstin, setGstin] = React.useState(initialValues.gstin);
  const [shipping_address, setShipping_address] = React.useState(
    initialValues.shipping_address
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vendorRecord
      ? { ...initialValues, ...vendorRecord }
      : initialValues;
    setVendor_id(cleanValues.vendor_id);
    setCompany_name(cleanValues.company_name);
    setOwner_name(cleanValues.owner_name);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setPayable_amount(cleanValues.payable_amount);
    setBilling_address(cleanValues.billing_address);
    setVendor_status(cleanValues.vendor_status);
    setGstin(cleanValues.gstin);
    setShipping_address(cleanValues.shipping_address);
    setErrors({});
  };
  const [vendorRecord, setVendorRecord] = React.useState(vendorModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getVendor.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getVendor
        : vendorModelProp;
      setVendorRecord(record);
    };
    queryData();
  }, [idProp, vendorModelProp]);
  React.useEffect(resetStateValues, [vendorRecord]);
  const validations = {
    vendor_id: [],
    company_name: [],
    owner_name: [],
    email: [],
    phone: [],
    payable_amount: [],
    billing_address: [],
    vendor_status: [],
    gstin: [],
    shipping_address: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          vendor_id: vendor_id ?? null,
          company_name: company_name ?? null,
          owner_name: owner_name ?? null,
          email: email ?? null,
          phone: phone ?? null,
          payable_amount: payable_amount ?? null,
          billing_address: billing_address ?? null,
          vendor_status: vendor_status ?? null,
          gstin: gstin ?? null,
          shipping_address: shipping_address ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateVendor.replaceAll("__typename", ""),
            variables: {
              input: {
                id: vendorRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "VendorUpdateForm")}
      {...rest}
    >
      <TextField
        label="Vendor id"
        isRequired={false}
        isReadOnly={false}
        value={vendor_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id: value,
              company_name,
              owner_name,
              email,
              phone,
              payable_amount,
              billing_address,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.vendor_id ?? value;
          }
          if (errors.vendor_id?.hasError) {
            runValidationTasks("vendor_id", value);
          }
          setVendor_id(value);
        }}
        onBlur={() => runValidationTasks("vendor_id", vendor_id)}
        errorMessage={errors.vendor_id?.errorMessage}
        hasError={errors.vendor_id?.hasError}
        {...getOverrideProps(overrides, "vendor_id")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={company_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name: value,
              owner_name,
              email,
              phone,
              payable_amount,
              billing_address,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.company_name ?? value;
          }
          if (errors.company_name?.hasError) {
            runValidationTasks("company_name", value);
          }
          setCompany_name(value);
        }}
        onBlur={() => runValidationTasks("company_name", company_name)}
        errorMessage={errors.company_name?.errorMessage}
        hasError={errors.company_name?.hasError}
        {...getOverrideProps(overrides, "company_name")}
      ></TextField>
      <TextField
        label="Owner name"
        isRequired={false}
        isReadOnly={false}
        value={owner_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name: value,
              email,
              phone,
              payable_amount,
              billing_address,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.owner_name ?? value;
          }
          if (errors.owner_name?.hasError) {
            runValidationTasks("owner_name", value);
          }
          setOwner_name(value);
        }}
        onBlur={() => runValidationTasks("owner_name", owner_name)}
        errorMessage={errors.owner_name?.errorMessage}
        hasError={errors.owner_name?.hasError}
        {...getOverrideProps(overrides, "owner_name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email: value,
              phone,
              payable_amount,
              billing_address,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email,
              phone: value,
              payable_amount,
              billing_address,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Payable amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={payable_amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email,
              phone,
              payable_amount: value,
              billing_address,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.payable_amount ?? value;
          }
          if (errors.payable_amount?.hasError) {
            runValidationTasks("payable_amount", value);
          }
          setPayable_amount(value);
        }}
        onBlur={() => runValidationTasks("payable_amount", payable_amount)}
        errorMessage={errors.payable_amount?.errorMessage}
        hasError={errors.payable_amount?.hasError}
        {...getOverrideProps(overrides, "payable_amount")}
      ></TextField>
      <TextField
        label="Billing address"
        isRequired={false}
        isReadOnly={false}
        value={billing_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email,
              phone,
              payable_amount,
              billing_address: value,
              vendor_status,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.billing_address ?? value;
          }
          if (errors.billing_address?.hasError) {
            runValidationTasks("billing_address", value);
          }
          setBilling_address(value);
        }}
        onBlur={() => runValidationTasks("billing_address", billing_address)}
        errorMessage={errors.billing_address?.errorMessage}
        hasError={errors.billing_address?.hasError}
        {...getOverrideProps(overrides, "billing_address")}
      ></TextField>
      <SelectField
        label="Vendor status"
        placeholder="Please select an option"
        isDisabled={false}
        value={vendor_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email,
              phone,
              payable_amount,
              billing_address,
              vendor_status: value,
              gstin,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.vendor_status ?? value;
          }
          if (errors.vendor_status?.hasError) {
            runValidationTasks("vendor_status", value);
          }
          setVendor_status(value);
        }}
        onBlur={() => runValidationTasks("vendor_status", vendor_status)}
        errorMessage={errors.vendor_status?.errorMessage}
        hasError={errors.vendor_status?.hasError}
        {...getOverrideProps(overrides, "vendor_status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "vendor_statusoption0")}
        ></option>
        <option
          children="Inactive"
          value="INACTIVE"
          {...getOverrideProps(overrides, "vendor_statusoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Gstin"
        isRequired={false}
        isReadOnly={false}
        value={gstin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email,
              phone,
              payable_amount,
              billing_address,
              vendor_status,
              gstin: value,
              shipping_address,
            };
            const result = onChange(modelFields);
            value = result?.gstin ?? value;
          }
          if (errors.gstin?.hasError) {
            runValidationTasks("gstin", value);
          }
          setGstin(value);
        }}
        onBlur={() => runValidationTasks("gstin", gstin)}
        errorMessage={errors.gstin?.errorMessage}
        hasError={errors.gstin?.hasError}
        {...getOverrideProps(overrides, "gstin")}
      ></TextField>
      <TextField
        label="Shipping address"
        isRequired={false}
        isReadOnly={false}
        value={shipping_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              vendor_id,
              company_name,
              owner_name,
              email,
              phone,
              payable_amount,
              billing_address,
              vendor_status,
              gstin,
              shipping_address: value,
            };
            const result = onChange(modelFields);
            value = result?.shipping_address ?? value;
          }
          if (errors.shipping_address?.hasError) {
            runValidationTasks("shipping_address", value);
          }
          setShipping_address(value);
        }}
        onBlur={() => runValidationTasks("shipping_address", shipping_address)}
        errorMessage={errors.shipping_address?.errorMessage}
        hasError={errors.shipping_address?.hasError}
        {...getOverrideProps(overrides, "shipping_address")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || vendorModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || vendorModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
