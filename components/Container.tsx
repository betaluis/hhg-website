interface Props {
    children: React.ReactNode
    fixed?: boolean
    classes?: string,
    outline?: boolean,
}

const Container = ({ children, fixed, classes, outline }: Props) => {
  return (
    <div className={`
        max-w-[1020px] m-auto px-[20px] lg:px-2
        ${outline ? "border-b border-outlines-slate-to-gray" : ""}
        ${fixed ? "fixed w-full bg-bkg-light" : ""} ${classes}
    `}
    >
            {children}
    </div>
  )
}

export default Container
