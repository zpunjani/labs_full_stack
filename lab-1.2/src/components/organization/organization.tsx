// Organization and management
import { useOrganization } from '../../hooks/useOrganization'
import OrganizationForm from '../organizationForm/Organization-form'


function Organization() {
    const { roles, loading, error, addRole } = useOrganization()

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <main>
            <h2>Organization</h2>

            {error && <p>{error}</p>}

            <div className="org-list">
                {roles.map((role) => (
                    <div className="org-row" key={`${role.firstName}-${role.lastName}`}>
                        <span className="org-name">
                            {role.firstName} {role.lastName}
                        </span>
                        <span className="org-role">
                            {role.role}
                        </span>
                    </div>
                ))}
            </div>

            <OrganizationForm onAddRole={addRole} />
        </main>
    )
}

export default Organization