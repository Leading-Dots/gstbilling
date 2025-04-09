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
import { createCustomer } from "../graphql/mutations";
const client = generateClient();
export default function CustomerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    customer_id: "",
    company_name: "",
    owner_name: "",
    email: "",
    phone: "",
    outstanding_amount: "",
    billing_address: "",
    customer_status: "",
    gstin: "",
    shipping_address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    pan_number: "",
    credit_limit: "",
    note: "",
    printColor: "",
  };
  const [customer_id, setCustomer_id] = React.useState(
    initialValues.customer_id
  );
  const [company_name, setCompany_name] = React.useState(
    initialValues.company_name
  );
  const [owner_name, setOwner_name] = React.useState(initialValues.owner_name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [outstanding_amount, setOutstanding_amount] = React.useState(
    initialValues.outstanding_amount
  );
  const [billing_address, setBilling_address] = React.useState(
    initialValues.billing_address
  );
  const [customer_status, setCustomer_status] = React.useState(
    initialValues.customer_status
  );
  const [gstin, setGstin] = React.useState(initialValues.gstin);
  const [shipping_address, setShipping_address] = React.useState(
    initialValues.shipping_address
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [pincode, setPincode] = React.useState(initialValues.pincode);
  const [country, setCountry] = React.useState(initialValues.country);
  const [pan_number, setPan_number] = React.useState(initialValues.pan_number);
  const [credit_limit, setCredit_limit] = React.useState(
    initialValues.credit_limit
  );
  const [note, setNote] = React.useState(initialValues.note);
  const [printColor, setPrintColor] = React.useState(initialValues.printColor);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCustomer_id(initialValues.customer_id);
    setCompany_name(initialValues.company_name);
    setOwner_name(initialValues.owner_name);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setOutstanding_amount(initialValues.outstanding_amount);
    setBilling_address(initialValues.billing_address);
    setCustomer_status(initialValues.customer_status);
    setGstin(initialValues.gstin);
    setShipping_address(initialValues.shipping_address);
    setCity(initialValues.city);
    setState(initialValues.state);
    setPincode(initialValues.pincode);
    setCountry(initialValues.country);
    setPan_number(initialValues.pan_number);
    setCredit_limit(initialValues.credit_limit);
    setNote(initialValues.note);
    setPrintColor(initialValues.printColor);
    setErrors({});
  };
  const validations = {
    customer_id: [],
    company_name: [],
    owner_name: [],
    email: [],
    phone: [],
    outstanding_amount: [],
    billing_address: [],
    customer_status: [],
    gstin: [],
    shipping_address: [],
    city: [],
    state: [],
    pincode: [],
    country: [],
    pan_number: [],
    credit_limit: [],
    note: [],
    printColor: [],
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
          customer_id,
          company_name,
          owner_name,
          email,
          phone,
          outstanding_amount,
          billing_address,
          customer_status,
          gstin,
          shipping_address,
          city,
          state,
          pincode,
          country,
          pan_number,
          credit_limit,
          note,
          printColor,
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
            query: createCustomer.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomerCreateForm")}
      {...rest}
    >
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customer_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id: value,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.customer_id ?? value;
          }
          if (errors.customer_id?.hasError) {
            runValidationTasks("customer_id", value);
          }
          setCustomer_id(value);
        }}
        onBlur={() => runValidationTasks("customer_id", customer_id)}
        errorMessage={errors.customer_id?.errorMessage}
        hasError={errors.customer_id?.hasError}
        {...getOverrideProps(overrides, "customer_id")}
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
              customer_id,
              company_name: value,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
              customer_id,
              company_name,
              owner_name: value,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
              customer_id,
              company_name,
              owner_name,
              email: value,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
              customer_id,
              company_name,
              owner_name,
              email,
              phone: value,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
        label="Outstanding amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={outstanding_amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount: value,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.outstanding_amount ?? value;
          }
          if (errors.outstanding_amount?.hasError) {
            runValidationTasks("outstanding_amount", value);
          }
          setOutstanding_amount(value);
        }}
        onBlur={() =>
          runValidationTasks("outstanding_amount", outstanding_amount)
        }
        errorMessage={errors.outstanding_amount?.errorMessage}
        hasError={errors.outstanding_amount?.hasError}
        {...getOverrideProps(overrides, "outstanding_amount")}
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
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address: value,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
        label="Customer status"
        placeholder="Please select an option"
        isDisabled={false}
        value={customer_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status: value,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.customer_status ?? value;
          }
          if (errors.customer_status?.hasError) {
            runValidationTasks("customer_status", value);
          }
          setCustomer_status(value);
        }}
        onBlur={() => runValidationTasks("customer_status", customer_status)}
        errorMessage={errors.customer_status?.errorMessage}
        hasError={errors.customer_status?.hasError}
        {...getOverrideProps(overrides, "customer_status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "customer_statusoption0")}
        ></option>
        <option
          children="Inactive"
          value="INACTIVE"
          {...getOverrideProps(overrides, "customer_statusoption1")}
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
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin: value,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address: value,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
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
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city: value,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state: value,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Pincode"
        isRequired={false}
        isReadOnly={false}
        value={pincode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode: value,
              country,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.pincode ?? value;
          }
          if (errors.pincode?.hasError) {
            runValidationTasks("pincode", value);
          }
          setPincode(value);
        }}
        onBlur={() => runValidationTasks("pincode", pincode)}
        errorMessage={errors.pincode?.errorMessage}
        hasError={errors.pincode?.hasError}
        {...getOverrideProps(overrides, "pincode")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country: value,
              pan_number,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Pan number"
        isRequired={false}
        isReadOnly={false}
        value={pan_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number: value,
              credit_limit,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.pan_number ?? value;
          }
          if (errors.pan_number?.hasError) {
            runValidationTasks("pan_number", value);
          }
          setPan_number(value);
        }}
        onBlur={() => runValidationTasks("pan_number", pan_number)}
        errorMessage={errors.pan_number?.errorMessage}
        hasError={errors.pan_number?.hasError}
        {...getOverrideProps(overrides, "pan_number")}
      ></TextField>
      <TextField
        label="Credit limit"
        isRequired={false}
        isReadOnly={false}
        value={credit_limit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit: value,
              note,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.credit_limit ?? value;
          }
          if (errors.credit_limit?.hasError) {
            runValidationTasks("credit_limit", value);
          }
          setCredit_limit(value);
        }}
        onBlur={() => runValidationTasks("credit_limit", credit_limit)}
        errorMessage={errors.credit_limit?.errorMessage}
        hasError={errors.credit_limit?.hasError}
        {...getOverrideProps(overrides, "credit_limit")}
      ></TextField>
      <TextField
        label="Note"
        isRequired={false}
        isReadOnly={false}
        value={note}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note: value,
              printColor,
            };
            const result = onChange(modelFields);
            value = result?.note ?? value;
          }
          if (errors.note?.hasError) {
            runValidationTasks("note", value);
          }
          setNote(value);
        }}
        onBlur={() => runValidationTasks("note", note)}
        errorMessage={errors.note?.errorMessage}
        hasError={errors.note?.hasError}
        {...getOverrideProps(overrides, "note")}
      ></TextField>
      <TextField
        label="Print color"
        isRequired={false}
        isReadOnly={false}
        value={printColor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              customer_id,
              company_name,
              owner_name,
              email,
              phone,
              outstanding_amount,
              billing_address,
              customer_status,
              gstin,
              shipping_address,
              city,
              state,
              pincode,
              country,
              pan_number,
              credit_limit,
              note,
              printColor: value,
            };
            const result = onChange(modelFields);
            value = result?.printColor ?? value;
          }
          if (errors.printColor?.hasError) {
            runValidationTasks("printColor", value);
          }
          setPrintColor(value);
        }}
        onBlur={() => runValidationTasks("printColor", printColor)}
        errorMessage={errors.printColor?.errorMessage}
        hasError={errors.printColor?.hasError}
        {...getOverrideProps(overrides, "printColor")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
