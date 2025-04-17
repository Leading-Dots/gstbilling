/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCompany } from "../graphql/mutations";
const client = generateClient();
export default function CompanyCreateForm(props) {
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
    company_name: "",
    owner_name: "",
    gstin: "",
    address: "",
    email: "",
    phone: "",
    gst_category: "",
    adminID: "",
  };
  const [company_name, setCompany_name] = React.useState(
    initialValues.company_name
  );
  const [owner_name, setOwner_name] = React.useState(initialValues.owner_name);
  const [gstin, setGstin] = React.useState(initialValues.gstin);
  const [address, setAddress] = React.useState(initialValues.address);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [gst_category, setGst_category] = React.useState(
    initialValues.gst_category
  );
  const [adminID, setAdminID] = React.useState(initialValues.adminID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompany_name(initialValues.company_name);
    setOwner_name(initialValues.owner_name);
    setGstin(initialValues.gstin);
    setAddress(initialValues.address);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setGst_category(initialValues.gst_category);
    setAdminID(initialValues.adminID);
    setErrors({});
  };
  const validations = {
    company_name: [],
    owner_name: [],
    gstin: [],
    address: [],
    email: [],
    phone: [],
    gst_category: [],
    adminID: [],
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
          company_name,
          owner_name,
          gstin,
          address,
          email,
          phone,
          gst_category,
          adminID,
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
            query: createCompany.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CompanyCreateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={company_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company_name: value,
              owner_name,
              gstin,
              address,
              email,
              phone,
              gst_category,
              adminID,
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
              company_name,
              owner_name: value,
              gstin,
              address,
              email,
              phone,
              gst_category,
              adminID,
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
        label="Gstin"
        isRequired={false}
        isReadOnly={false}
        value={gstin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company_name,
              owner_name,
              gstin: value,
              address,
              email,
              phone,
              gst_category,
              adminID,
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
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company_name,
              owner_name,
              gstin,
              address: value,
              email,
              phone,
              gst_category,
              adminID,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
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
              company_name,
              owner_name,
              gstin,
              address,
              email: value,
              phone,
              gst_category,
              adminID,
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
              company_name,
              owner_name,
              gstin,
              address,
              email,
              phone: value,
              gst_category,
              adminID,
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
        label="Gst category"
        isRequired={false}
        isReadOnly={false}
        value={gst_category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company_name,
              owner_name,
              gstin,
              address,
              email,
              phone,
              gst_category: value,
              adminID,
            };
            const result = onChange(modelFields);
            value = result?.gst_category ?? value;
          }
          if (errors.gst_category?.hasError) {
            runValidationTasks("gst_category", value);
          }
          setGst_category(value);
        }}
        onBlur={() => runValidationTasks("gst_category", gst_category)}
        errorMessage={errors.gst_category?.errorMessage}
        hasError={errors.gst_category?.hasError}
        {...getOverrideProps(overrides, "gst_category")}
      ></TextField>
      <TextField
        label="Admin id"
        isRequired={false}
        isReadOnly={false}
        value={adminID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              company_name,
              owner_name,
              gstin,
              address,
              email,
              phone,
              gst_category,
              adminID: value,
            };
            const result = onChange(modelFields);
            value = result?.adminID ?? value;
          }
          if (errors.adminID?.hasError) {
            runValidationTasks("adminID", value);
          }
          setAdminID(value);
        }}
        onBlur={() => runValidationTasks("adminID", adminID)}
        errorMessage={errors.adminID?.errorMessage}
        hasError={errors.adminID?.hasError}
        {...getOverrideProps(overrides, "adminID")}
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
