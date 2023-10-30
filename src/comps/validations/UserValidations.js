import * as yup from "yup";

export const userSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required.")
      .min(2, "Name should have at least 2 characters.")
      .max(100, "Name is too long."),
    mobile_number: yup
      .string()
      .required("Mobile number is required.")
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Mobile number is not valid."),
    email: yup
      .string()
      .email("Email is not valid.")
      .required("Email is required."),
    event_data: yup
      .date()
      .nullable()
      
      .min(new Date(), "Event date should be in the future."),
    event_type: yup
      .string()
      .required("Event type is required."),
    event_location: yup
      .string()
      .required("Event location is required."),
    guest_count: yup
      .number()
      .required("Guest count is required.")
      .min(1, "At least one guest should be there.")
      .max(160, "Too many guests."), // Adjust max as per your requirements
  });