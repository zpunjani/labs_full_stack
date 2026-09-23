// Organization and management
import roleData from '../../data/organization.json'

export interface Role {
    firstName: string;
    lastName: string;
    role: string;
}

const roles: Role [] = roleData as Role[]

function Organization() {
    return (
        <main>
            <h2>Organization</h2>

            {roles.map((role) => (
                <div key={`${role.firstName}-${role.lastName}`}>
                    <span>
                        {role.firstName} {role.lastName}
                    </span>
                    <span>
                        {role.role}
                    </span>
                </div>
            ))}
        </main>
    )
}

export default Organization