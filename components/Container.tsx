interface Props {
    children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[1000px] m-auto px-[20px]">{children}</div>
  )
}

export default Container
