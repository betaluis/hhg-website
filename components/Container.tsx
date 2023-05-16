interface Props {
    children: React.ReactNode
    fixed?: boolean
}

const Container = ({ children, fixed }: Props) => {
  return (
    <div className={`max-w-[1000px] m-auto px-[20px] lg:px-[0] bg-slate-100 ${fixed ? "fixed w-full" : null}`}>{children}</div>
  )
}

export default Container
