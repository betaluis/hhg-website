interface Props {
    children: React.ReactNode
    fixed?: boolean
    classes?: string,
}

const Container = ({ children, fixed, classes }: Props) => {
  return (
    <div className={`max-w-[1000px] m-auto px-[20px] lg:px-0 ${fixed ? "fixed w-full bg-bkg-light" : null} ${classes}`}>{children}</div>
  )
}

export default Container
