import { Link } from "react-router-dom";

const RedirectFunc = () => {
    return (
        <main>
            <h1 className='text-lg font-extrabold m-5'>
                There's nothing here! <br />
                <Link
                    to='/'
                    className='text-cyan-600 underline'>
                    Click here
                </Link>{' '}
                <br />
                to return to home page.
            </h1>
        </main>
    )
}

export default RedirectFunc;