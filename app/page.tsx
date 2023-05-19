import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Text } from "@/components/typography/Text";

export default function Home() {
    return (
        <>
            <section className="bg-green-600 relative">
                <Container>
                    <div className="py-24">
                        <h1 className="text-slate-100 font-bold text-[2rem] text-center md:text-[2rem] lg:text-[4rem] max-w-[800px]">
                            We are mobile power.
                        </h1>
                        <Text color="light">
                            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                        </Text>
                        <div className="mt-8 flex gap-4">
                            <Button label="Products" href="/products" type="secondary" className="bg-slate-600 px-8 text-xl bg-gradient-to-t from-slate-700 drop-shadow-[0_2px_0_rgba(30,40,20,1)] hover:from-slate-600" />
                            <Button label="Get in touch" href="/" type="secondary" className="bg-green-400 px-8 text-xl bg-gradient-to-t from-green-500 drop-shadow-[0_2px_0_rgba(22,101,52,1)] hover:from-green-400" />
                        </div>
                    </div>
                </ Container>
            </section>
            <section className="bg-slate-100 py-24">
                <Container>
                    <h2 className="text-green-600 font-black text-[2rem]">Hello, we are mobile power.</h2>
                </ Container>
            </section>
        </>
    )
}
