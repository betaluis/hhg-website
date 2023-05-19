interface Props {
    children: React.ReactNode
    fixed?: boolean
}

const Container = ({ children, fixed }: Props) => {
  return (
    <div className={`bg_people max-w-[1000px] m-auto px-[20px] lg:px-0 ${fixed ? "fixed w-full bg-slate-100" : null}`}>{children}</div>
  )
}

export default Container
