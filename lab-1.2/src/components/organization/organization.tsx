// Organization and management
import roleData from '../../data/organization.json'
import type { Role } from '../../types/organization'

const roles: Role [] = roleData as Role[]

function Organization() {
    return (
        <main>
            <h2>Organization</h2>

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
        </main>
    )
}

export default Organization