import { socials } from "../data/socials.jsx"

function Contact() {
    return (
        <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contacts</h2>

            <div className="flex justify-center gap-6">
                {socials.map((item, i) => (
                    <a
                        key={i}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        title={item.label}
                        className={`${item.color} hover:text-gray-500 transition-colors duration-300`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Contact