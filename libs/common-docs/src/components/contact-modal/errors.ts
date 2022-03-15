export interface IError {
    error: {
        errors: {
            code: string;
            field: string;
            message: string;
        }[];
    }
}

export const errorVocabulary = {
    TYPE_EMAIL: "Check your email",
    REQUIRED_FIELD_MISSING: "Fields are required, but no value was provided",
    REQUIRED_FIELD_EMPTY: "A field is required, but a blank or empty string was provided",
    TYPE_NUMERIC: "A field should contain a number",
    TYPE_TEXT: "A field should contain text",
    INACTIVE: "The form has been disabled",
    BLOCKED: "The form has been blocked",
    EMPTY: "No data was submitted",
    PROJECT_NOT_FOUND: "An invalid project key was used to submit the form",
    FORM_NOT_FOUND: "An invalid form hashid was used to submit the form",
    NO_FILE_UPLOADS: "File uploads are not supported for this form",
    TOO_MANY_FILES: "The form was submitted with too many file attachments",
    FILES_TOO_BIG: "One or more files uploaded exceeded the max file size",
};