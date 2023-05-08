interface Props {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="lg:hidden max-w-[1000px] m-auto px-[20px] flex items-center justify-between">{children}</div>
  )
}

export default Container
