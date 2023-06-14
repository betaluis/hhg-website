import Container from '@/components/Container'

interface NewSectionProps {
    children: React.ReactNode,
    padding?: string,
    bgColor: string,
}

const NewSection = ({ children, padding, bgColor }: NewSectionProps) => {
    return (
        <section className={`${bgColor} ${padding}`}>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default NewSection
