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
import { getAdmin } from "../graphql/queries";
import { updateAdmin } from "../graphql/mutations";
const client = generateClient();
export default function AdminUpdateForm(props) {
  const {
    id: idProp,
    admin: adminModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subscriptionPlanID: "",
    company_id: "",
    userID: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [subscriptionPlanID, setSubscriptionPlanID] = React.useState(
    initialValues.subscriptionPlanID
  );
  const [company_id, setCompany_id] = React.useState(initialValues.company_id);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = adminRecord
      ? { ...initialValues, ...adminRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setSubscriptionPlanID(cleanValues.subscriptionPlanID);
    setCompany_id(cleanValues.company_id);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [adminRecord, setAdminRecord] = React.useState(adminModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAdmin.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAdmin
        : adminModelProp;
      setAdminRecord(record);
    };
    queryData();
  }, [idProp, adminModelProp]);
  React.useEffect(resetStateValues, [adminRecord]);
  const validations = {
    name: [],
    email: [],
    phone: [],
    subscriptionPlanID: [],
    company_id: [],
    userID: [],
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
          name: name ?? null,
          email: email ?? null,
          phone: phone ?? null,
          subscriptionPlanID: subscriptionPlanID ?? null,
          company_id: company_id ?? null,
          userID: userID ?? null,
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
            query: updateAdmin.replaceAll("__typename", ""),
            variables: {
              input: {
                id: adminRecord.id,
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
      {...getOverrideProps(overrides, "AdminUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              phone,
              subscriptionPlanID,
              company_id,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              name,
              email: value,
              phone,
              subscriptionPlanID,
              company_id,
              userID,
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
              name,
              email,
              phone: value,
              subscriptionPlanID,
              company_id,
              userID,
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
        label="Subscription plan id"
        isRequired={false}
        isReadOnly={false}
        value={subscriptionPlanID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              subscriptionPlanID: value,
              company_id,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionPlanID ?? value;
          }
          if (errors.subscriptionPlanID?.hasError) {
            runValidationTasks("subscriptionPlanID", value);
          }
          setSubscriptionPlanID(value);
        }}
        onBlur={() =>
          runValidationTasks("subscriptionPlanID", subscriptionPlanID)
        }
        errorMessage={errors.subscriptionPlanID?.errorMessage}
        hasError={errors.subscriptionPlanID?.hasError}
        {...getOverrideProps(overrides, "subscriptionPlanID")}
      ></TextField>
      <TextField
        label="Company id"
        isRequired={false}
        isReadOnly={false}
        value={company_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              subscriptionPlanID,
              company_id: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.company_id ?? value;
          }
          if (errors.company_id?.hasError) {
            runValidationTasks("company_id", value);
          }
          setCompany_id(value);
        }}
        onBlur={() => runValidationTasks("company_id", company_id)}
        errorMessage={errors.company_id?.errorMessage}
        hasError={errors.company_id?.hasError}
        {...getOverrideProps(overrides, "company_id")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phone,
              subscriptionPlanID,
              company_id,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
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
          isDisabled={!(idProp || adminModelProp)}
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
              !(idProp || adminModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
