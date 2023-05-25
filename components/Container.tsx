interface Props {
    children: React.ReactNode
    fixed?: boolean
    classes?: string,
    outline?: boolean,
}

const Container = ({ children, fixed, classes, outline }: Props) => {
  return (
    <div className={`
        max-w-[1000px] m-auto px-[20px] lg:px-0 
        ${outline ? "border-b border-outlines-slate-to-gray" : null}
        ${fixed ? "fixed w-full bg-bkg-light" : null} ${classes}
    `}
    >
            {children}
    </div>
  )
}

export default Container
