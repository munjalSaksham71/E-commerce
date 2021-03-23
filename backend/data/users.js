import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('Saks@123', 10),
        isAdmin: true
    },
    {
        name: 'Saksham',
        email: 'Sakshammunjal4@gmail.com',
        password: bcrypt.hashSync('Saks@123', 10),
        isAdmin: true
    }
]

export default users