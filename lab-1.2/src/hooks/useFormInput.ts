import { useState } from "react";

function useFormInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    const [message, setMessage] = useState("");

    function handleChange(newValue: string) {
        setValue(newValue);
    }

    function validateInput(validationCallback: (value: string) => string | null): boolean {
        const validationMessage = validationCallback(value);
        setMessage(validationMessage ?? "");
        return validationMessage === null;
    }

    function resetInput() {
        setValue(initialValue);
        setMessage("");
    }

    return {
        value,
        onChange: handleChange,
        message,
        setMessage,
        validateInput,
        resetInput,
    };
}

export default useFormInput;