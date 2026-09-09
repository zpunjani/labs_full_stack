/**
 * Author: Zalak Punjani
 * Lab 1 Theme:  Front-End Revisited
 * This lab is a simple front-end application that displays a list of employees and the department they belong to.
 */

// An array that contains the departments and their employees
const departments = [
    {
        name: "Administration",
        employees: [
            {
                firstName: "Zoe",
                lastName: "Robins"
            },
            {
                firstName: "Madeleine",
                lastName: "Madden"
            },
        ]
    },

    {
        name: "Audit",
        employees: [
            {
                firstName: "Josha",
                lastName: "Sadowski"
            },
            {
                firstName: "Kate",
                lastName: "Fleetwood"
            }
        ]
    },

    {
        name: "Banking Operations",
        employees: [
            {
                firstName: "Priyanka",
                lastName: "Bose"
            },
            {
                firstName: "Hammed",
                lastName: "Animashaun"
            },
            {
                firstName: "Álvaro",         
                lastName: "Morte"
            },
            {
                firstName: "Taylor",               
                lastName: "Napier"
            },
            {
                firstName: "Alan",               
                lastName: "Simmonds"
            }
        ]
    },

    {
        name: "Communications",
        employees: [
            {
                firstName: "Gil",
                lastName: "Cardinal"
            },
            {
                firstName: "Richard J.",
                lastName: "Lewis"
            }
        ]
    },

    {
        name: "Corporate Services",
        employees: [
            {
                firstName: "Randy",
                lastName: "Bradshaw"
            },
            {
                firstName: "Tracey",
                lastName: "Cook"
            },
            {
                firstName: "Lubomir",
                lastName: "Mykytiuk"
            }
        ]
    },

    {
        name: "Facilities",
        employees: [
            {
                firstName: "Dakota",
                lastName: "House"
            },
            {
                firstName: "Lori Lea",
                lastName: "Okemah"
            },
            {
                firstName: "Renae",
                lastName: "Morrisseau"
            },
            {
                firstName: "Rick",
                lastName: "Belcourt"
            }
        ]
    },

    {
        name: "Financial Services",
        employees: [
            {  
                firstName: "Selina",
                lastName: "Hanusa"
            },
            {
                firstName: "Buffy",
                lastName: "Gaudry"
            },
            {
                firstName: "Shaneen Ann",
                lastName: "Fox"
            },
            {
                firstName: "Allan",
                lastName: "Little"
            },
            {
                firstName: "Danny",
                lastName: "Rabbit"
            },
        ]
    },

    {
        name: "Human Resources",
        employees: [
            {
                firstName: "Jesse Ed",
                lastName: "Azure"
            },
            {
                firstName: "Stacy Da",
                lastName: "Silva"
            },
            {
                firstName: "Vladimir",
                lastName: "Valenta"
            },
            {
                firstName: "Samone",
                lastName: "Sayeses-Whitney"
            },
            {
                firstName: "Paul",
                lastName: "Coeur"
            }
        ]
    },

    {
        name: "Information Technology",
        employees: [
            {
                firstName: "Graham",
                lastName: "Green"
            },
            {
                firstName: "Sandika",
                lastName: "Evergreen"
            },
            {
                firstName: "Jennifer",
                lastName: "Rodriguez"
            }
        ]
    },

    {
        name: "IT Technician",
        employees: [
            {
                firstName: "Aiyana",
                lastName: "Littlebear"
            },
            {
                firstName: "Inara",
                lastName: "Thunderbird"
            },
            {
                firstName: "Kaya",
                lastName: "Runningbrook"
            },
            {
                firstName: "Elara",
                lastName: "Firehawk"
            },
            {
                firstName: "Siona",
                lastName: "Monnflower"
            },
            {
                firstName: "Kaiyu",
                lastName: "Greywolf"
            },
            {
                firstName: "Ayawamat",
                lastName: "Nightwind"
            },
            {
                firstName: "Tala",
                lastName: "Braveheart"
            },
            {
                firstName: "Iniko",
                lastName: "Stonebear"
            },
            {
                firstName: "Onatah",
                lastName: "Redhawk"
            },
        ]
    }   
];

// The main element where the employee directory will be displayed
const main = document.querySelector("#employee-directory");

departments.forEach(department => {
    // Create a section for each department
    const section = document.createElement("section");

    // Creates a heading for the department name
    const heading = document.createElement("h2");
    heading.textContent = department.name;
    
    // Creates a list for the employees
    const employeeList = document.createElement("ul");

    // Creates a list item for each employee
    department.employees.forEach(employee => {
        const employeeItem = document.createElement("li");
        employeeItem.textContent = `${employee.firstName} ${employee.lastName}`;
        employeeList.appendChild(employeeItem);
    });

    // Adds the department heading and employee list to the section
    section.appendChild(heading);
    section.appendChild(employeeList);

    // Adds the section to the main element
    main.appendChild(section);
});

// Getting current year
const currentYear = new Date().getFullYear();

// showing the current year in the footer
const footer = document.querySelector("footer");
footer.textContent = `© ${currentYear} Pixell River Financial.`;

