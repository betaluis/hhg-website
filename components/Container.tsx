interface Props {
    children: React.ReactNode
    fixed?: boolean
    classes?: string,
    outline?: boolean,
    gutters?: boolean
}

const Container = ({ children, fixed, classes, outline, gutters = true }: Props) => {
  return (
    <div className={`
        max-w-[1020px] m-auto
        ${gutters ? "px-[20px]" : ""}
        ${outline ? "border-b border-outlineColor-2" : ""}
        ${fixed ? "fixed w-full bg-bkg-light-1" : ""} ${classes}
    `}
    >
            {children}
    </div>
  )
}

export default Container
