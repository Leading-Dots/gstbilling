import client from "@/lib/apiClient";
import { SubscriptionPlan } from "@/API";
import { getSubscriptionPlan, listSubscriptionPlans } from "@/graphql/queries";

export const getSubscriptionPlans = async () => {
  try {
    const { data, errors } = await client.graphql({
      query: listSubscriptionPlans,
    });

    if (errors) {
      console.error(errors);
      return [];
    }
    return data.listSubscriptionPlans.items as SubscriptionPlan[];
  } catch (error) {
    console.error("Error fetching subscription plans", error);
    return [];
  }
};

export const getSubscriptionPlanById = async (subscriptionPlanID: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: getSubscriptionPlan,
      variables: {
        id: subscriptionPlanID,
      },
    });
    if (errors) {
      console.error(errors);
    }

    if (data) {
      return data.getSubscriptionPlan;
    }
  } catch (error) {
    console.error("Error fetching subscription plan by ID", error);
  }
};
