import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SocalLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const googleIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div class="flex flex-col space-y-4">
            <Link onClick={googleIn}
                href="#"
                class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-primary rounded-md group hover:bg-primary focus:outline-none"
            >
                <span class="text-sm font-medium text-primary group-hover:text-white">CONTINUE WITH GOOGLE</span>
            </Link>

        </div>
    );
};

export default SocalLogin;