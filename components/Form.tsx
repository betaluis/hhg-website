const Title = () => {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-content-dark-1">
                Let&apos;s talk!
            </h2>
        </div>
    )
}

const Input = ({ text, type, required }: { text: string, type: "text" | "email" | "tel" , required: boolean }) => {
    return (
        <div>
            <label htmlFor={text} className="block text-sm font-medium leading-6 text-content-dark-1">
                <div className="mt-2">
                    <input
                        id={text}
                        name={text}
                        type={type}
                        autoComplete={text}
                        required={required}
                        placeholder={text.charAt(0).toUpperCase() + text.slice(1)}
                        className="block w-full rounded-md border-0 py-3 bg-bkg-light-2
                        text-content-dark-1 outline-none ring-1
                        ring-outlineColor-1 placeholder:text-content-dark-3 focus:ring-2 pl-2
                        focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </label>
        </div>
    )
}

const Button = () => {
    return (
        <div className="pt-4">
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-dark-gradient 
                px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm 
                hover:bg-dark-gradient-hover
                focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                Request a quote
            </button>
        </div>
    )
}

const Form = () => {
    // TODO: Mobile responsiveness
    // TODO: Add form validation
    return (
        <div className="
            flex flex-1 flex-col justify-center
            px-6 py-8 rounded-lg bg-bkg-light-1 min-h-full 
            lg:px-8"
        >
            <Title />
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-4" action="#" method="POST">
                    <Input text="name" type="text" required={true} /> 
                    <Input text="email" type="email" required={true} /> 
                    <Input text="company" type="text" required={true} /> 
                    <Input text="phone" type="tel" required={true} /> 
                    <Button />
                </form>
                <p className="mt-10 text-center text-sm text-content-dark-3 max-w-[300px]">
                    We will never share your details with anyone. We won&apos;t spam you either.
                </p>
            </div>
        </div>
    )
}

export default Form  
