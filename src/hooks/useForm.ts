import { useState, ChangeEvent, FormEvent } from 'react';

type ValidationFunction<T> = (values: T) => Partial<T>;

/**
 * Custom hook for form handling with validation
 * @param initialValues Initial form values
 * @param validate Validation function that returns error messages
 * @param onSubmit Function to call when form is submitted and valid
 * @returns Object containing form state and handlers
 */
export function useForm<T extends Record<string, unknown>>(
  initialValues: T,
  validate: ValidationFunction<T>,
  onSubmit: (values: T) => Promise<void>
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when the user starts typing
    if (errors[name as keyof T]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(values);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      // Error is handled by the onSubmit function
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues
  };
}
