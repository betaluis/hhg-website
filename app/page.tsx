import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Home() {
    return (
        <>
            <section className="bg-green-600 relative">
                <div className="bg_people">
                    <Container>
                        <div className="py-24">
                            <h1 className="text-slate-100 font-black text-[4rem] max-w-[800px]">
                                We are mobile power.
                            </h1>
                            <p className="text-white text-lg max-w-lg">
                                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Button label="Products" href="/products" type="secondary" className="bg-slate-600 px-8 text-xl bg-gradient-to-t from-slate-700 drop-shadow-[0_2px_0_rgba(30,40,20,1)] hover:from-slate-600" />
                                <Button label="Get in touch" href="/" type="secondary" className="bg-green-400 px-8 text-xl bg-gradient-to-t from-green-500 drop-shadow-[0_2px_0_rgba(22,101,52,1)] hover:from-green-400" />
                            </div>
                        </div>
                    </ Container>
                </div>
            </section>
            <section className="bg-slate-100 py-24">
                <Container>
                    <h2 className="text-green-600 font-black text-[2rem]">Hello, we are mobile power.</h2>
                </ Container>
            </section>
        </>
    )
}
