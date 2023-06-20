import Container from '@/components/Container'

interface NewSectionProps {
    children: React.ReactNode,
    padding?: string,
    bgColor: string,
    gutters?: boolean,
}

const NewSection = ({ children, padding, bgColor, gutters = true, }: NewSectionProps) => {
    return (
        <section className={`${bgColor} ${padding}`}>
            <Container gutters={gutters}>
                {children}
            </Container>
        </section>
    )
}

export default NewSection
