import type React from "react"
import type { Role } from "../../types/organization"
import useFormInput from "../../hooks/useFormInput"
import type { OrganizationFormData } from "../../types/organizationFormData"

function OrganizationForm({ onAddRole }: OrganizationFormData) {
    const firstName = useFormInput('')
    const lastName = useFormInput('')
    const role = useFormInput('')

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        firstName.setMessage('')
        role.setMessage('') 

        const newRole: Role = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            role: role.value.trim()
        }

        const result = await onAddRole(newRole)

        if (!result.success) {
            const message = result.error || "Unable to add Role."

            if (message.includes('First Name')) {
                firstName.setMessage(message)
            } else if (message.includes('Role')) {
                role.setMessage(message)
            } else {
                firstName.setMessage(message)
            }

            return
        }

        firstName.resetInput()
        lastName.resetInput()
        role.resetInput()
    }

    return (
        <section>
            <h2>Add Role</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName.value}
                        onChange={(event) => firstName.onChange(event.target.value)}
                    />
                    {firstName.message && <p>{firstName.message}</p>}

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName.value}
                        onChange={(event) => lastName.onChange(event.target.value)}
                    />
                    {lastName.message && <p>{lastName.message}</p>}
                
                
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={role.value}
                        onChange={(event) => role.onChange(event.target.value)}
                    />
                    {role.message && <p>{role.message}</p>}
                
                <button type="submit">Add Role</button>
                </div>
            </form>
        </section>
    )
}

export default OrganizationForm